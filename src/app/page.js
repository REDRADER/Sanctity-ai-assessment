import Contact from "@/components/Home/Contact/Contact";
import Hero from "@/components/Home/Hero/Hero";
import Resources from "@/components/Home/Resources/Resources";
import ScrollTest from "@/components/Home/scrolltest/ScrollTest";
import Services from "@/components/Home/Services/Services";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import TrackRecord from "@/components/Home/TrackRecord/TrackRecord";
import WhoTrustUs from "@/components/Home/WhoTrustUs/WhoTrustUs";
import Whyus from "@/components/Home/Whyus/Whyus";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100vw] h-full">
      <Hero/>
      <Services/>
      <TrackRecord/>
      <Whyus/>
      <WhoTrustUs/>
      <Testimonials/>
      <Resources/>
      
      {/* <ScrollTest/> */}
    </div>
  );
}
