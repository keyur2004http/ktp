"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useSpring,
  useTransform,
  AnimatePresence, 
} from "framer-motion";
import {
  Megaphone,
  Share2,
  Video,
  Globe,
  Search,
  Palette,
  Film,
  Users,
  Target,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Mail,
  PenTool,
  Sparkles,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import { Footer7 } from "./Footer";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
    email?: string;
  };
}

const AnimatedTooltip = ({
  items,
  className,
}: {
  items: TeamMember[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useSpring(0, springConfig);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex items-center gap-4 flex-wrap justify-center", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={handleMouseMove}
        >
          {/* 👇 This ensures something is always visible */}
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 rounded-full border-2 border-[#b99b6d]/40 shadow-md object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Tooltip on hover */}
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 bg-teal-950 text-white text-xs px-4 py-2 rounded-lg shadow-lg z-50"
              >
                <div className="font-bold text-sm">{item.name}</div>
                <div className="text-gray-300 text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};


const SocialLinks = ({
  socials,
  className,
}: {
  socials: { name: string; url: string; icon: React.ElementType }[];
  className?: string;
}) => {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null);

  return (
    <div className={cn("flex items-center justify-center gap-0", className)}>
      {socials.map((social, index) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative cursor-pointer px-5 py-2 transition-opacity duration-200",
            hoveredSocial && hoveredSocial !== social.name
              ? "opacity-50"
              : "opacity-100"
          )}
          key={index}
          onMouseEnter={() => setHoveredSocial(social.name)}
          onMouseLeave={() => setHoveredSocial(null)}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

const StatCounter = ({
  value,
  label,
  suffix,
  delay,
}: {
  value: number;
  label: string;
  suffix: string;
  delay: number;
}) => {
  const countRef = React.useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const springValue = useSpring(0, { stiffness: 50, damping: 10 });

  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest)
  );

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        ref={countRef}
        className="text-2xl md:text-4xl font-bold text-teal-900 flex items-center justify-center"
      >
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-gray-500 text-xs md:text-sm mt-2">{label}</p>
    </motion.div>
  );
};

export default function AboutUsPage() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const services = [
    { icon: <Megaphone className="h-8 w-8 text-teal-900" />, title: "Digital Marketing", desc: "Grow your online presence and reach your ideal customers effectively." },
    { icon: <Users className="h-8 w-8 text-teal-900" />, title: "Social Media Marketing", desc: "Engage audiences and build brand loyalty on all social platforms." },
    { icon: <Video className="h-8 w-8 text-teal-900" />, title: "Video Editing", desc: "Craft professional, engaging videos that capture attention instantly." },
    { icon: <Globe className="h-8 w-8 text-teal-900" />, title: "Website Design", desc: "Create fast, modern, and responsive websites for your business." },
    { icon: <Search className="h-8 w-8 text-teal-900" />, title: "SEO Optimization", desc: "Improve your Google ranking and drive organic traffic to your site." },
    { icon: <PenTool className="h-8 w-8 text-teal-900" />, title: "Graphics Designing", desc: "Design creative visuals and brand materials that leave a mark." },
    { icon: <Sparkles className="h-8 w-8 text-teal-900" />, title: "Animation Designer", desc: "Add life to your brand with smooth and appealing animations." },
    { icon: <ShoppingBag className="h-8 w-8 text-teal-900" />, title: "Google & Meta Ads", desc: "Run high-converting ad campaigns that generate measurable results." },
  ];

  const teamMembers: TeamMember[] = [
    { id: 1, name: "John Doe", designation: "CEO & Founder", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400", socials: { linkedin: "#", email: "john@example.com" } },
    { id: 2, name: "Jane Smith", designation: "Creative Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400", socials: { instagram: "#", email: "jane@example.com" } },
    { id: 3, name: "Mike Johnson", designation: "Marketing Lead", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400", socials: { twitter: "#", github: "#", email: "mike@example.com" } },
    { id: 4, name: "Sarah Williams", designation: "Design Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", socials: { linkedin: "#", email: "sarah@example.com" } },
  ];

  const stats = [
    { value: 500, label: "Projects Completed", suffix: "+" },
    { value: 250, label: "Happy Clients", suffix: "+" },
    { value: 8, label: "Years Experience", suffix: "" },
    { value: 98, label: "Satisfaction Rate", suffix: "%" },
  ];

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative w-full bg-white overflow-hidden mt-20"
      >
        <section className="relative py-20 px-6 md:px-10">
          <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h1
             
                className="text-3xl md:text-4xl font-bold mb-6 text-teal-950"
              >
                About Our Agency
              </motion.h1>
              <div className="w-24 h-1 bg-gradient-to-br from-[#b99b6d]/30 to-white mx-auto mb-8" />
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
                We are a passionate team of digital marketing experts dedicated to helping
                businesses grow their online presence.
              </p>
            </motion.div>

            {/* Story Section */}
            <motion.div
             
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-teal-950">Our Story</h2>
                <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                  We deliver innovative marketing strategies that drive real, measurable
                  growth and brand success.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#b99b6d]" />
                    <span>Data-driven marketing for measurable growth.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#b99b6d]" />
                    <span>Dedicated creative team for branding excellence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#b99b6d]" />
                    <span>Personalized campaigns for your business goals.</span>
                  </li>
                </ul>
              </div>
              <motion.img
                src="/Assets/About/About-us.jpg"
                alt="Our Team at Work"
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Services */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-center text-teal-950 mb-6">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-br from-[#b99b6d]/40 to-white mx-auto mb-10" />

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                   
                    whileHover={{ scale: 1.05 }}
                    className="max-w-xs w-full text-center flex flex-col items-center space-y-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
                  >
                    <div className="rounded-full bg-gradient-to-br from-gray-100 to-white p-3 sm:p-4 md:p-5 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl">
                      {service.icon}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-teal-950">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mt-24">
              <h2 className="text-3xl font-bold mb-8 text-center text-teal-900">
                Our Achievements
              </h2>
              <div className="grid grid-cols-4  md:grid-cols-4 gap-10 mt-10 text-teal-900">
                {stats.map((stat, index) => (
                  <StatCounter
                    key={index}
                    value={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* Team Section */}
            {/* <div className="mt-24 mb-20">
              <h2 className="text-3xl font-bold mb-6 text-center text-teal-950">
                Meet Our Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-br from-[#b99b6d]/30 to-white mx-auto mb-8" />
              <div className="flex justify-center mb-20">
                <AnimatedTooltip items={teamMembers} />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-[#b99b6d]/30">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      {member.designation}
                    </p>
                    <SocialLinks
                      socials={[
                        ...(member.socials.linkedin
                          ? [
                              {
                                name: "LinkedIn",
                                url: member.socials.linkedin,
                                icon: Linkedin,
                              },
                            ]
                          : []),
                        ...(member.socials.twitter
                          ? [
                              {
                                name: "Twitter",
                                url: member.socials.twitter,
                                icon: Twitter,
                              },
                            ]
                          : []),
                        ...(member.socials.instagram
                          ? [
                              {
                                name: "Instagram",
                                url: member.socials.instagram,
                                icon: Instagram,
                              },
                            ]
                          : []),
                        ...(member.socials.github
                          ? [
                              {
                                name: "GitHub",
                                url: member.socials.github,
                                icon: Github,
                              },
                            ]
                          : []),
                        ...(member.socials.email
                          ? [
                              {
                                name: "Email",
                                url: `mailto:${member.socials.email}`,
                                icon: Mail,
                              },
                            ]
                          : []),
                      ]}
                    />
                  </motion.div>
                ))}
              </div>
            </div> */}
          </div>
        </section>
      </motion.div>
      <Footer7 />
    </>
  );
}
