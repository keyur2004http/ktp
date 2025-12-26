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
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-[#042f2e]/10 rounded-full blur-[100px]"
          animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-96 h-96 bg-[#b99b6d]/15 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 30, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
  
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-teal-900 leading-tight"
          >
            Why<span className="text-[#b99b6d]"> Choose US</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-700 mb-12 max-w-xl sm:text-sm text-sm leading-relaxed mt-10"
          >
            We blend creativity and strategy to deliver marketing that performs — turning insights into impactful growth.
          </motion.p>
  
          <div className="grid sm:grid-cols-2 grid-cols-2 gap-10">
            {features.map((feature, index) => {
              const isActive = index === 0;
              return (
                <motion.div
                  key={index}
                  className={`group flex flex-col sm:flex-row items-start sm:items-start gap-3 p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-teal-950 via-teal-900 to-teal-700 p-4 rounded-xl shadow-[0_0_25px_rgba(4,47,46,0.2)]"
                      : "p-4 rounded-xl border-black"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className={`flex-shrink-0 p-3 rounded-xl transition-colors duration-300 ${
                      isActive ? "bg-[#042f2e]" : "bg-[#042f2e]/10"
                    }`}
                  >
                    <div className={`${isActive ? "text-white" : "text-[#042f2e]"}`}>
                      {feature.icon}
                    </div>
                  </motion.div>
  
                  <div>
                    <h3 className={`text-lg font-semibold ${isActive ? "text-gray-50" : "text-[#0f172a]"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isActive ? "text-gray-400" : "text-gray-600"}`}>
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
  
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -left-10 w-24 h-24 bg-[#b99b6d]/25 rounded-full blur-xl"
          />
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/Assets/Service/whychoose.png"
              alt="Why Choose Us"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
