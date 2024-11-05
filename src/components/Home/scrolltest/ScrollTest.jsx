"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, Flip);

const ScrollFlipComponent = () => {
  useEffect(() => {
    const attr = (defaultVal, attrVal) => {
      const defaultValType = typeof defaultVal;
      if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
      if (attrVal === "true" && defaultValType === "boolean") return true;
      if (attrVal === "false" && defaultValType === "boolean") return false;
      if (isNaN(attrVal) && defaultValType === "string") return attrVal;
      if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
      return defaultVal;
    };

    ScrollTrigger.normalizeScroll(true);

    const components = document.querySelectorAll("[tr-scrollflip-element='component']");
    components.forEach((componentEl, componentIndex) => {
      const originEls = componentEl.querySelectorAll("[tr-scrollflip-element='origin']");
      const targetEls = componentEl.querySelectorAll("[tr-scrollflip-element='target']");
      const scrubStartEl = componentEl.querySelector("[tr-scrollflip-scrubstart]");
      const scrubEndEl = componentEl.querySelector("[tr-scrollflip-scrubend]");

      const startSetting = attr("top top", scrubStartEl?.getAttribute("tr-scrollflip-scrubstart"));
      const endSetting = attr("bottom bottom", scrubEndEl?.getAttribute("tr-scrollflip-scrubend"));
      const staggerSpeedSetting = attr(0, componentEl.getAttribute("tr-scrollflip-staggerspeed"));
      const staggerDirectionSetting = attr("start", componentEl.getAttribute("tr-scrollflip-staggerdirection"));
      const scaleSetting = attr(true, componentEl.getAttribute("tr-scrollflip-scale"));
      const breakpointSetting = attr(0, componentEl.getAttribute("tr-scrollflip-breakpoint"));

      let timeline;
      let resizeTimer;

      // Assign matching data flip IDs
      originEls.forEach((originEl, index) => {
        const flipId = `${componentIndex}-${index}`;
        originEl.setAttribute("data-flip-id", flipId);
        if (targetEls[index]) {
          targetEls[index].setAttribute("data-flip-id", flipId);
        }
      });

      // Create timeline function
      const createTimeline = () => {
        if (timeline) {
          timeline.kill();
          gsap.set(targetEls, { clearProps: "all" });
        }
        document.body.classList.add("scrollflip-relative");

        gsap.matchMedia().add(`(min-width: ${breakpointSetting}px)`, () => {
          const state = Flip.getState(originEls);
          timeline = gsap.timeline({
            scrollTrigger: {
              trigger: scrubStartEl,
              endTrigger: scrubEndEl,
              start: startSetting,
              end: endSetting,
              scrub: true,
            },
          });
          timeline.add(
            Flip.from(state, {
              targets: targetEls,
              scale: scaleSetting,
              stagger: { amount: staggerSpeedSetting, from: staggerDirectionSetting },
            })
          );
        });

        document.body.classList.remove("scrollflip-relative");
      };

      createTimeline();

      // Update on window resize
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          createTimeline();
        }, 250);
      };
      
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
        if (timeline) timeline.kill();
      };
    });
  }, []);

  return (
    <div tr-scrollflip-element="component" className="relative w-full">
      <section tr-scrollflip-scrubstart="top top" className="relative h-[100vh] p-[5em_1em_1em] z-[1] w-full">
        <span tr-scrollflip-element="origin" className="text-white text-[5em] absolute">Make A</span>
        <span tr-scrollflip-element="origin" className="text-white text-[5em] absolute">Difference</span>
      </section>
      <section tr-scrollflip-scrubend="40% center" className="relative h-[100vh] p-[5em_1em_1em] z-[2] w-full">
        <div tr-scrollflip-element="target" className="absolute">Make A</div>
        <span tr-scrollflip-element="origin" className=" absolute">Difference</span>
      </section>
    </div>
  );
};

export default ScrollFlipComponent;
