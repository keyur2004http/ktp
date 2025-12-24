import "./globals.css";
import { Hero1 } from "@/components/HeroSection";
import { Footer7 } from "@/components/Footer";

import { CTA } from "@/components/CTA";
import { TestimonialsSectionDemo } from "@/components/testimonials-with-marquee";

import Navbar from "@/components/Navbar";

import OurSection from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChoose";
import ServicesSection from "@/components/ServiceForHome";
import ServiceSection from "@/components/zigzag";


export default function Home() {
  return (
    <>
        <Navbar></Navbar>
        <Hero1></Hero1>
        <WhyChooseUs></WhyChooseUs>
        <ServicesSection></ServicesSection>
        <CTA></CTA>
        <TestimonialsSectionDemo></TestimonialsSectionDemo>
        <Footer7></Footer7>
        
        </>
  );
}
  