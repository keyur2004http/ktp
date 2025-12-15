"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/getStartButton";
import { Sparkles, CheckCircle } from "lucide-react";

const services = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    points: [
      "Comprehensive online growth strategies",
      "Audience targeting & brand awareness",
      "Conversion-focused campaigns",
      "Cross-platform optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    points: [
      "Creative post & reels campaigns",
      "Boost engagement organically",
      "Paid ad management for Facebook, Instagram & LinkedIn",
      "Content calendar & analytics tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1611162616305-4e9817cf77b3?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    points: [
      "High-quality promotional video editing",
      "Cinematic transitions & storytelling",
      "Custom brand intros/outros",
      "Optimized for social & YouTube",
    ],
    image:
      "https://images.unsplash.com/photo-1602524200744-88d2e51a7b97?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "website",
    title: "Website Development",
    points: [
      "Fully responsive design",
      "SEO & speed optimized",
      "Modern UI/UX layouts",
      "Built with React, Next.js or WordPress",
    ],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    points: [
      "Keyword research & competitor analysis",
      "On-page & off-page SEO",
      "Technical site audits",
      "Google ranking improvements",
    ],
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "graphics-designing",
    title: "Graphic Designing",
    points: [
      "Logo & brand identity creation",
      "Banner, poster & ad creatives",
      "Print & digital design solutions",
      "Professional, eye-catching layouts",
    ],
    image:
      "https://images.unsplash.com/photo-1587613865764-4ec76a0255fa?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "animation-designer",
    title: "Animation Design",
    points: [
      "2D & 3D explainer videos",
      "Logo motion animations",
      "Product & brand storytelling visuals",
      "Smooth transitions & motion graphics",
    ],
    image:
      "https://images.unsplash.com/photo-1602526217795-2bdbb7a43412?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    points: [
      "Connect with the right creators",
      "Authentic brand collaborations",
      "Increased reach & trust factor",
      "Performance-based campaigns",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292243-1b5a44e8a7e2?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "ads-marketing",
    title: "Google & Meta Ads Marketing",
    points: [
      "ROI-focused campaign setup",
      "Ad optimization & A/B testing",
      "Conversion tracking & reporting",
      "Increase brand visibility instantly",
    ],
    image:
      "https://images.unsplash.com/photo-1607082349566-1873421258d0?auto=format&fit=crop&w=1080&q=80",
  },
];

export default function ServicesZigzagSection() {
  return (
    <section className="py-40 md:py-40 bg-white overflow-hidden" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            className="text-primary font-medium mb-2 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            OUR SERVICES
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Empowering Your Brand in the Digital World
          </h2>

          <motion.div
            className="w-24 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {/* Services */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.17, 0.67, 0.83, 0.9] }}
              className={`flex flex-col items-center gap-12 md:gap-16 lg:gap-20 
                ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}
              `}
            >
              {/* Image */}
              <div
                className="relative w-full md:w-5/12 lg:w-1/2 h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text */}
              <div className="w-full md:w-7/12 lg:w-1/2 space-y-5 text-center md:text-left">
                <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                  Service {index + 1}
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                  {service.title}
                </h3>

                {/* ✅ Points List */}
                <ul className="space-y-2 text-lg text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 justify-center md:justify-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex justify-center md:justify-start">
                  <Button />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
