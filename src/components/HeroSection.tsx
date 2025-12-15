"use client";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ButtonX from "@/components/ui/buttonx";
import { motion } from "framer-motion";

const headline = "We Don’t Market Products. We Build Digital Empires.".split(" ");

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function Hero1() {
  return (
    <section className="w-full bg-white text-[#0f2922] mt-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20 py-16 md:py-24 lg:py-32">
          
          {/* === LEFT TEXT === */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Top Button */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                variant="secondary"
                size="sm"
                className="gap-3 bg-[#1b3b33] text-white hover:bg-[#152d27] text-sm sm:text-base"
              >
                Read our launch article <MoveRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Headline Animation */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl max-w-2xl tracking-tight font-semibold text-[#0f2922] leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {headline.map((word, i) => (
                <motion.span
                  key={i}
                  
                  custom={i}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-xs sm:text-sm md:text-lg lg:text-l leading-relaxed text-[#4b4b4b] max-w-2xl mt-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              We help brands grow in the digital world. Our strategies blend
              creativity with performance. Let’s make your business stand out
              and succeed online.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-3 sm:gap-4 mt-2 sm:mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ButtonX />
            </motion.div>
          </motion.div>

          {/* === RIGHT IMAGE === */}
          <motion.div
            className="flex-1 w-full relative flex justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="./Assets/Background/girl.png"
              alt="Digital Marketing Illustration"
              className="w-full max-w-[520px] sm:max-w-[600px] md:max-w-[650px] h-auto object-contain sm:object-cover rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export { Hero1 };
