"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";
export default function ContactSection() {


  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  {
    success && (
      <div className="fixed top-6 right-6 z-50 bg-teal-600 text-white px-6 py-4 rounded-xl shadow-xl">
        ✅ Message sent successfully!
      </div>
    )
  }

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email Us",
      desc: "Reach out to our team anytime for assistance.",
      link: "mailto:ktpofficial1008@gmail.com",
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Call Us",
      desc: "Talk directly with our experts.",
      link: "+91 9099574730",
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Visit Office",
      desc: "Drop by and meet our creative team.",
      link: ".",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Follow Online",
      desc: "Stay connected on social media.",
      link: "https://www.instagram.com/ktp.official?igsh=MTNjZWhleHVjcnFxdA==",
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstname.trim()) newErrors.firstname = "First name is required.";
    if (!form.lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid.";
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    if (errors[e.target.id]) setErrors({ ...errors, [e.target.id]: "" });
  };



  return (
    <section className="relative py-40 px-6 lg:px-20 bg-gradient-to-br from-gray-200 via-white to-slate-100 overflow-hidden">
      {/* === Background Animation === */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-teal-200/30 rounded-full blur-[100px]"
          animate={{ x: [0, 30, -30, 0], y: [0, 15, -15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-100/30 rounded-full blur-[120px]"
          animate={{ x: [0, -20, 20, 0], y: [0, -15, 15, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* === LEFT SIDE CONTACT INFO === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-semibold text-teal-900 mb-6">
            Let’s Connect
          </h2>
          <p className="text-gray-700 mb-10 max-w-lg leading-relaxed">
            We’d love to hear from you — drop us a message or contact our team
            through the channels below.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {contactMethods.map((item, index) => {
              const isActive = index === 0; // Highlight "Email Us"
              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  className={`group flex items-start space-x-3 p-4 rounded-xl transition-all duration-500  ${isActive
                      ? "bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white ]"
                      : "bg-white border border-gray-100 text-gray-800 hover:bg-gradient-to-br hover:from-teal-700 hover:via-teal-800 hover:to-teal-900 hover:text-white 3]"
                    }`}
                >
                  {/* === ICON CONTAINER === */}
                  <div
                    className={`flex-shrink-0 p-4 rounded-xl transition-colors duration-500 ${isActive
                        ? "bg-white/20"
                        : "bg-gray-100 group-hover:bg-white/20"
                      }`}
                  >
                    <div
                      className={`transition-colors duration-500 ${isActive ? "text-white" : "text-[#042f2e] group-hover:text-white"
                        }`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* === TEXT === */}
                  <div>
                    <h3
                      className={`text-lg font-semibold transition-colors duration-500 ${isActive ? "text-white" : "group-hover:text-white"
                        }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 transition-colors duration-500 ${isActive
                          ? "text-gray-300"
                          : "text-gray-600 group-hover:text-gray-300"
                        }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

        </motion.div>

        {/* === RIGHT SIDE FORM === */}
        <motion.form
          action="https://formsubmit.co/ktpofficial1008@gmail.com"
          method="POST"
          onSubmit={(e) => {
            if (!validateForm()) {
              e.preventDefault();
            }
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-slate-200 w-full max-w-lg"
        >

          <div className="flex gap-4 mb-6">
            <div className="w-full">
              <Label htmlFor="firstname">First Name *</Label>
              <Input
                id="firstname"
                name="First Name"
                value={form.firstname}
                onChange={handleChange}
                className={`${errors.firstname ? "border-red-500" : ""}`}
              />

              {errors.firstname && (
                <p className="text-red-500 text-sm">{errors.firstname}</p>
              )}
            </div>
            <div className="w-full">
              <Label htmlFor="lastname">Last Name *</Label>
              <Input
                id="lastname"
                name="Last Name"
                value={form.lastname}
                onChange={handleChange}
                className={`${errors.firstname ? "border-red-500" : ""}`}
              />

              {errors.lastname && (
                <p className="text-red-500 text-sm">{errors.lastname}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              placeholder="you@example.com"
              className={`${errors.firstname ? "border-red-500" : ""}`}
              onChange={handleChange}
            />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              name="Subject"
              value={form.subject}
              className={`${errors.firstname ? "border-red-500" : ""}`}
              onChange={handleChange}
            />

            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          <div className="mb-8">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="Message"
              rows={4}
              value={form.message}
              className={`${errors.firstname ? "border-red-500" : ""}`}
              onChange={handleChange}
            />

            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Send Message
              </>
            )}
          </Button>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Contact Form Submission" />
          <input type="hidden" name="_next" value="http://localhost:3000/contact?success=true" />
          <input type="hidden" name="_replyto" value="%email%" />
        </motion.form>
      </div>
    </section>
  );
}
