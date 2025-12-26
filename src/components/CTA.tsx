"use client"
import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-40 text-white">
      <div className="mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col text-center bg-teal-950 p-4 lg:p-14 gap-8 items-center"
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Badge>Get started</Badge>
          </motion.div>
  
          {/* Heading + Text */}
          <motion.div
            className="flex flex-col gap-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Let’s Build Something That Works for Your Business
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-white max-w-xl">
              Ready to start your project? Let’s turn your ideas into a powerful digital presence.
            </p>
          </motion.div>
  
          {/* Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <a href="/contact-us">
              <Button className="gap-4 bg-[#b99b6d] hover:bg-[#a8895f]">
                Contact Us <MoveRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export { CTA };
