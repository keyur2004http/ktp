"use client";

import { motion } from "framer-motion";
import { Target, BarChart, Users, Rocket } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Data-Driven Strategy",
    desc: "We design campaigns using real insights and analytics to achieve maximum ROI.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-[#]" />,
    title: "Proven Results",
    desc: "Our approach consistently drives measurable business growth and conversions.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#042f2e] " />,
    title: "Expert Team",
    desc: "Our specialists in marketing, strategy, and design deliver campaigns that convert.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-[#042f2e]" />,
    title: "Continuous Growth",
    desc: "We focus on sustainable, long-term brand success and audience engagement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative  py-24 px-6 lg:px-20 overflow-hidden">
      {/* === Decorative Glows === */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-[#042f2e]/10 rounded-full blur-[100px]"
          animate={{ x: [0, 20, -20, 0], y: [0, 15, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-96 h-96 bg-[#b99b6d]/15 rounded-full blur-[120px]"
          animate={{ x: [0, -20, 20, 0], y: [0, -15, 15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* === LEFT CONTENT === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         <h2 className="text-4xl md:text-5xl font-bold text-teal-900 leading-tight">
            Why<span className="text-[#b99b6d]"> Choose US</span>
          </h2>
          
          <p className="text-gray-700 mb-12 max-w-xl sm:text-sm text-sm leading-relaxed mt-10">
            We blend creativity and strategy to deliver marketing that performs — turning insights into impactful growth.
          </p>

          <div className="grid sm:grid-cols-2 gap-10 ">
            {features.map((feature, index) => {
              const isActive = index === 0; // highlight first one
              return (
                <motion.div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-300 ${
                    isActive
                      ? " bg-gradient-to-br from-teal-950 via-teal-900 to-teal-700 p-4 rounded-xl shadow-[0_0_25px_rgba(4,47,46,0.2)]"
                      : " p-4 rounded-xl border-black "
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`flex-shrink-0 p-4 rounded-xl ${
                      isActive ? "bg-[#042f2e]" : "bg-[#042f2e]/10"
                    }`}
                  >
                    <div
                      className={`${
                        isActive ? "text-white" : "text-[#042f2e]"
                      }`}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        isActive ? "text-gray-50" : "text-[#0f172a]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 leading-relaxed ${
                        isActive ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* === RIGHT IMAGE === */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#b99b6d]/25 rounded-full blur-xl"></div>
          <Image
            src="/Assets/Service/whychoose.png" // ✅ Replace with your actual image
            alt="Why Choose Us"
            width={600}
            height={400}
            className="rounded-xl object-cover]"
          />
        </motion.div>
      </div>
    </section>
  );
}
