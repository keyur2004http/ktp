"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 px-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-md text-center"
      >
        <CheckCircle className="w-16 h-16 text-teal-600 mx-auto mb-6" />

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Message Sent!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for contacting us.  
          Our team will get back to you shortly.
        </p>

        <Link
          href="/"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
