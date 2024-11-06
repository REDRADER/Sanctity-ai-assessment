"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const ScrubText = () => {
  const textRef = useRef(null);

  useEffect(() => {

    const typeSplit = new SplitType(textRef.current, {
      types: "lines, words, chars",
      tagName: "span",
    });



   typeSplit.lines.forEach((line, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: line,
          start: "top 70%",
          end: "top 20%",
          scrub: 0.5,
        },

      });

      tl.from(line.querySelectorAll(".char"), {
        opacity: 0.15,
        duration: 0.3,
        ease: "power1.out",
        stagger: {
          each: 0.4
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (

    <div ref={textRef} data-text-split className='text-3xl md:text-[3.2rem] text-[--light-text] leading-[1.2] font-medium opacity-70'>
      At Sanctity Consulting, we
      use human creativity and the
      latest technologies to help
      business leaders, investors,
      and entrepreneurs enhance
      their market positioning,
      discover the next winning
      trend, and optimize their
      chances for success.
    </div>

  );
};

export default ScrubText;
