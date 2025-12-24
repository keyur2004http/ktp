"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  useEffect(() => {
    if (success === "true") {
      alert("✅ Message sent successfully!");
    }
  }, [success]);

  return null; // or your JSX if needed
}
