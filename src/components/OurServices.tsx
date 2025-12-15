"use client"
import * as React from "react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import {
  Shield,
  Zap,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  Clock,
  Target,
  Rocket,
  Globe,
  Camera,
  Code,
  Search,
  Brush,
  Film,
  Megaphone,
} from "lucide-react"

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = React.useRef(null)
  const isInView = useInView(countRef)
  const springValue = useSpring(0, { stiffness: 50, damping: 10 })

  React.useEffect(() => {
    if (isInView) springValue.set(value)
    else springValue.set(0)
  }, [isInView, value, springValue])

  const displayValue = useTransform(springValue, v => Math.floor(v))

  return (
    <motion.div
      className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300 border border-[#b99b6d]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-teal-950 flex items-center justify-center mb-4 text-primary"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-foreground flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
      <div className="w-10 h-0.5 bg-[#b99b6d] mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  )
}

interface FeatureItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  delay?: number
}

function FeatureItem({ icon, secondaryIcon, title, description, delay = 0 }: FeatureItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary bg-teal-950 p-3 rounded-lg relative">
          {icon}
          {secondaryIcon}
        </div>
        <h3 className="text-xl font-medium text-teal-900">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed pl-12">{description}</p>
      <div className="mt-3 pl-12 flex items-center text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </motion.div>
  )
}

export default function OurSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const statsRef = React.useRef<HTMLDivElement>(null)
  const isStatsInView = useInView(statsRef)

  const { scrollYProgress } = useScroll({ target: sectionRef })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  const services = [
    { icon: <Globe className="w-6 h-6 text-[#b99b6d]" />, secondaryIcon: <Zap className="w-4 h-4 absolute -top-1 -right-1 text-[#B1A186]" />, title: "Digital Marketing", description: "Boost your brand visibility with data-driven campaigns that deliver measurable results across all platforms." },
    { icon: <Users className="w-6 h-6 text-[#b99b6d]" />, secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#B1A186]" />, title: "Social Media Marketing", description: "Engage audiences and grow your online presence with creative social media strategies tailored to your brand." },
    { icon: <Film className="w-6 h-6 text-[#b99b6d]" />, secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#B1A186]" />, title: "Video Editing", description: "Create high-quality, impactful videos that tell your brand story and captivate your target audience." },
    { icon: <Code className="w-6 h-6 text-[#b99b6d]" />, secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#B1A186]" />, title: "Website Development", description: "Build fast, modern, and responsive websites designed to convert visitors into customers." },
    { icon: <Search className="w-6 h-6 text-[#b99b6d]" />, secondaryIcon: <Award className="w-4 h-4 absolute -top-1 -right-1 text-[#B1A186]" />, title: "SEO Optimization", description: "Rank higher on search engines and attract organic traffic through proven SEO strategies." },
    { icon: <Brush className="w-6 h-6 text-[#b99b6d]" />, secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#B1A186]" />, title: "Graphics Designing", description: "Craft visually stunning designs that communicate your brand identity with clarity and style." },
    { icon: <Camera className="w-6 h-6 text-[#b99b6d]" />, secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#B1A186]" />, title: "Animation Design", description: "Bring your ideas to life with dynamic animations that engage and entertain your audience." },
    { icon: <Users className="w-6 h-6 text-[#b99b6d]" />, secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#B1A186]" />, title: "Influencer Marketing", description: "Collaborate with top influencers to reach new audiences and build authentic brand trust." },
    { icon: <Megaphone className="w-6 h-6 text-[#b99b6d]" />, secondaryIcon: <Zap className="w-4 h-4 absolute -top-1 -right-1 text-[#B1A186]" />, title: "Google & Meta Ads", description: "Maximize ROI with targeted ad campaigns across Google, Facebook, and Instagram platforms." },
  ]

  const stats = [
    { icon: <Award className="w-6 h-6 text-[#b99b6d]" />, value: 900, label: "Projects Delivered", suffix: "+" },
    { icon: <Users className="w-6 h-6 text-[#b99b6d]" />, value: 7000, label: "Happy Clients", suffix: "+" },
    { icon: <Clock className="w-6 h-6 text-[#b99b6d]" />, value: 12, label: "Years Experience", suffix: "" },
    { icon: <TrendingUp className="w-6 h-6 text-[#b99b6d]" />, value: 99, label: "Client Satisfaction", suffix: "%" },
  ]

  return (
    <section ref={sectionRef} className="w-full py-24 px-4 bg-gradient-to-b from-background to-muted/20 overflow-hidden relative">
      <motion.div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-950/10 blur-3xl" style={{ y: y1, rotate: rotate1 }} />
      <motion.div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl" style={{ y: y2, rotate: rotate2 }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-6">
          <span className="text-primary font-medium mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Empowering Brands with Digital Excellence
          </h2>
        </div>

        <p className="text-center max-w-2xl mx-auto mb-16 text-muted-foreground">
          From strategy to execution, our expert team delivers creative, data-driven, and result-oriented digital services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((s, i) => (
            <FeatureItem key={i} {...s} delay={i * 0.1} />
          ))}
        </div>

        <div ref={statsRef} className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatCounter key={i} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
