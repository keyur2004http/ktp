"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface Service {
  title: string;
  points: string[];
  image: string;
}

const services: Service[] = [
  {
    title: "Digital Marketing",
    points: [
      "Precision targeting with AI-driven analytics",
      "Campaigns that convert awareness into action",
      "Real-time performance tracking and ROI insights",
    ],
    image: "/Assets/Service/digital-marketing.jpg",
  },
  {
    title: "Social Media Strategy",
    points: [
      "Tailored content calendars that engage audiences",
      "High-impact visuals and storytelling posts",
      "Organic growth powered by audience psychology",
    ],
    image: "/Assets/Service/social-marketing.jpg",
  },
  {
    title: "Cinematic Video Editing",
    points: [
      "Cinematic storytelling with dynamic transitions",
      "High-end color grading and motion graphics",
      "Optimized for YouTube, Reels & Ads",
    ],
    image: "/Assets/Service/video-editing.jpg",
  },
  {
    title: "Luxury Website Design",
    points: [
      "Visually stunning, responsive experiences",
      "Optimized for performance and SEO precision",
      "Crafted to reflect brand elegance and innovation",
    ],
    image: "/Assets/Service/web-design.jpg",
  },
  {
    title: "Search Engine Domination (SEO)",
    points: [
      "Data-driven SEO campaigns built for results",
      "Deep keyword research with advanced tools",
      "Sustainable traffic growth and authority building",
    ],
    image: "/Assets/Service/seo.jpg",
  },
  {
    title: "Brand & Visual Identity",
    points: [
      "Timeless logo design and brand language",
      "Elegant typography and color harmony",
      "Cohesive visuals that build trust and recall",
    ],
    image: "/Assets/Service/brand-idendity.png",
  },
  {
    title: "Motion & Animation Design",
    points: [
      "Dynamic animations that tell your brand story",
      "Modern motion effects with cinematic flow",
      "Perfect for ads, explainers, and presentations",
    ],
    image: "/Assets/Service/animation.jpg",
  },
  {
    title: "Influencer & Performance Marketing",
    points: [
      "Strategic influencer collaborations that convert",
      "Optimized Google & Meta ad funnels",
      "ROI-focused growth with transparent reporting",
    ],
    image: "/images/services/influencer-premium.jpg",
  },
];

const ServiceZigzag = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative w-full py-24 lg:px-50 bg-gradient-to-b from-[#001f1e] via-[#011716] to-black text-white overflow-hidden">
      {/* ===== Floating Background Light ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-[#b99b6d]/15 rounded-full blur-[120px]"
          animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-32 w-[28rem] h-[28rem] bg-[#b99b6d]/10 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 30, 0], y: [0, -15, 15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-[#b99b6d] to-[#d8c49b] bg-clip-text text-transparent tracking-wide"
        >
          Our Expertise
        </motion.h2>

        <div className="flex flex-col gap-24">
          <AnimatePresence>
            {(showAll ? services : services.slice(0, 4)).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 60 }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative w-full md:w-1/2 h-72 md:h-[22rem] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(185,155,109,0.25)]"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover brightness-[0.8] hover:brightness-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                {/* TEXT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="md:w-1/2 space-y-5"
                >
                  <div className="relative inline-block">
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#b99b6d] tracking-wide">
                      {service.title}
                    </h3>
                    {/* Animated underline */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute mt-2 left-0 w-full h-[3px] origin-left bg-gradient-to-r from-[#b99b6d] to-[#d8c49b] rounded-full"
                    />
                  </div>

                  <ul className="space-y-3 text-lg text-gray-300 pt-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-[#b99b6d] mt-1 w-5 h-5 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* VIEW MORE / LESS BUTTON */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-[#b99b6d] to-[#d8c49b] hover:opacity-90 text-black font-semibold px-10 py-4 rounded-full shadow-[0_0_25px_rgba(185,155,109,0.4)] text-lg"
            >
              {showAll ? "View Less" : "View More"}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceZigzag;
