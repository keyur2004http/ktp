"use client";

import * as React from "react";
import { motion, Variants,Transition } from "framer-motion";
import {
  Megaphone,
  Users,
  Video,
  Globe,
  Search,
  PenTool,
  Sparkles,
  ShoppingBag,
  Check
} from "lucide-react";
import { JSX } from "react";

const services = [
  {
    icon: <Megaphone className="h-12 w-12 text-teal-800" />,
    title: "Digital Marketing",
    desc: "Grow your brand visibility and engagement online.",
    points: [
      "Performance Campaigns",
      "Lead Generation",
      "Brand Awareness",
      "Analytics & Reporting",
    ],
  },
  {
    icon: <Users className="h-12 w-12 text-teal-800" />,
    title: "Social Media Marketing",
    desc: "Build a loyal community and boost engagement.",
    points: ["Content Strategy", "Influencer Collabs", "Reel & Story", "Targeted Ads"],
  },
  {
    icon: <Video className="h-12 w-12 text-teal-800" />,
    title: "Video Editing",
    desc: "Turn footage into stories that convert.",
    points: ["Cinematic Cuts", "Motion Graphics", "Color Grading", "Engaging Transitions"],
  },
  {
    icon: <Globe className="h-12 w-12 text-teal-800" />,
    title: "Website Design & Development",
    desc: "Modern, fast & responsive websites.",
    points: ["Responsive Layouts", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
  },
  {
    icon: <Search className="h-12 w-12 text-teal-800" />,
    title: "SEO Optimization",
    desc: "Improve visibility and attract organic traffic.",
    points: ["On-page SEO", "Keyword Research", "Technical SEO", "Link Building"],
  },
  {
    icon: <PenTool className="h-12 w-12 text-teal-800" />,
    title: "Graphic Designing",
    desc: "Visuals that communicate and convert.",
    points: ["Logo Design", "Brand Kits", "Social Creatives", "Print Materials"],
  },
  {
    icon: <Sparkles className="h-12 w-12 text-teal-800" />,
    title: "Animation Design",
    desc: "Engaging motion for brand experiences.",
    points: ["2D/3D Animations", "Explainers", "Animated Logos", "UI Microinteractions"],
  },
  {
    icon: <ShoppingBag className="h-12 w-12 text-teal-800" />,
    title: "Google & Meta Ads",
    desc: "High-ROI paid campaigns.",
    points: ["Audience Targeting", "A/B Testing", "Budget Opt.", "ROI Tracking"],
  },
];

const flipTransition = {
  duration: 0.6,
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
};

const cardVariants: Variants = {
  front: { rotateY: 0, transition: flipTransition },
  back: { rotateY: 180, transition: flipTransition },
};

export default function ServiceSection(): JSX.Element {
  const [flippedIndex, setFlippedIndex] = React.useState<number | null>(null);

  const toggleFlip = (i: number) =>
    setFlippedIndex((prev) => (prev === i ? null : i));

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 leading-tight">
            Our <span className="text-[#b99b6d]">Services</span>
          </h2>
          <div className="mt-6 w-20 h-1 mx-auto bg-gradient-to-r from-teal-950 to-white rounded-full" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of digital solutions designed to elevate your brand and drive impactful results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
  {services.map((svc, i) => {
    const isFlipped = flippedIndex === i;

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full perspective-1000"
      >
        <motion.div
          onClick={() => toggleFlip(i)}
          onMouseEnter={() => setFlippedIndex(i)}
          onMouseLeave={() => setFlippedIndex(null)}
          className="relative w-full h-64 sm:h-72 md:h-80 cursor-pointer group"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            style={{ transformStyle: "preserve-3d", height: "100%" }}
            animate={isFlipped ? "back" : "front"}
            variants={cardVariants}
            className="relative w-full h-full"
          >
            {/* FRONT */}
            <motion.div
              style={{
                backfaceVisibility: "hidden",
                transform: "translateZ(10px)",
              }}
              className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-teal-950/10 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-100 via-white to-white backdrop-blur-sm shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                {/* Responsive icon size */}
                <div className="text-teal-800">
                  {React.cloneElement(svc.icon, {
                    className: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
                  })}
                </div>
              </motion.div>

              {/* Responsive title */}
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                {svc.title}
              </h3>

              {/* Responsive description */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed">
                {svc.desc}
              </p>

              <div className="mt-4 sm:mt-5 md:mt-6 w-12 sm:w-14 md:w-16 h-1 bg-gradient-to-r from-teal-800 to-white rounded-full" />
            </motion.div>

            {/* BACK */}
            <motion.div
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg) translateZ(10px)",
              }}
              className="absolute inset-0 flex flex-col justify-center rounded-2xl border border-[#b99b6d]/30 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white via-white to-gray-100 backdrop-blur-sm shadow-lg"
            >
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-teal-950 mb-3 sm:mb-4 text-center">
                {svc.title}
              </h4>
              <ul className="text-xs sm:text-sm md:text-base text-gray-700 space-y-2 sm:space-y-3">
                {svc.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 text-teal-800 flex-shrink-0" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  })}
</div>

      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
