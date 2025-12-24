import { Separator } from "@radix-ui/react-select";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import React from "react";

export const Footer7 = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/public-profile/settings", // replace
    },
    {
      icon: Facebook,
      href: "https://www.instagram.com/ktp.official?igsh=NTRldnJ1d2t3cDdh", // replace
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ktp", // replace
    },
  ];

  return (
    <footer className="py-16 px-6 bg-[#042f2e] text-[#b99b6d] border-t border-[#d4b16a]/30">
      <div className="container mx-auto max-w-6xl">

        {/* --- GRID --- */}
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* --- Brand Section --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="./Assets/Logo/logo_ktp.png"
                alt="KTP Logo"
                className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(212,177,106,0.5)]"
              />
              <span className="text-2xl font-bold tracking-wide">KTP</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Transforming brands through digital excellence.
            </p>
          </div>

          {/* --- Company Links --- */}
          <div>
            <h4 className="font-semibold text-[#b99b6d] mb-4 text-lg">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about-us"
                  className="text-sm text-gray-300 hover:text-[#b99b6d] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-sm text-gray-300 hover:text-[#b99b6d] transition-colors duration-300"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* --- Contact Info --- */}
          <div>
            <h4 className="font-semibold text-[#b99b6d] mb-4 text-lg">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-[#b99b6d]" />
                ktpofficial1008@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-[#b99b6d]" />
                +91 9714435035
              </li>
            </ul>
          </div>

          {/* --- Socials --- */}
          <div>
            <h4 className="font-semibold text-[#b99b6d] mb-4 text-lg">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#063b39] text-[#b99b6d]
                             flex items-center justify-center
                             hover:bg-[#d4b16a] hover:text-[#042f2e]
                             shadow-[0_0_10px_rgba(212,177,106,0.2)]
                             hover:shadow-[0_0_20px_rgba(212,177,106,0.4)]
                             transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* --- Separator --- */}
        <div className="border-t border-[#d4b16a]/30 my-10"></div>

        {/* --- Copyright --- */}
        <div className="text-center text-sm text-gray-400">
          © 2024 KTP Digital Agency. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
