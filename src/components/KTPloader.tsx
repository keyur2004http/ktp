"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function KtpGifLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]); 

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="/Assets/Loader/kk.gif"
            alt="Loading..."
            className="w-36 h-36 object-contain"
          />
          <p className="mt-4 text-sm text-gray-600 tracking-wide">
            Building your digital empire...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
