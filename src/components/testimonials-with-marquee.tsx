"use client"
import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-20 sm:py-50 md:py-32 px-0 mb-20",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}
const testimonials = [
  {
    author: {
      name: "Kirit trivedi",
      handle: "@Anshika flower",
      avatar: "./Assets/icones/person.webp"
    },
    text: "Great digital marketing service with clear strategy and real results. Highly recommended.",
    href: ""
  },
  {
    author: {
      name: "Chetan shah",
      handle: "@Immitation jwellery",
      avatar: "./Assets/icones/person.webp"
    },
    text: "Professional team, creative ideas, and excellent support throughout the project.",
    href: ""
  },
  {
    author: {
      name: "Mayur trivedi",
      handle: "@Samor masala",
      avatar: "./Assets/icones/person.webp"
    },
    text: "Our online reach improved quickly thanks to their smart digital marketing approach."
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="What Our Clients Say"
      description="See how we helped businesses improve their online presence."
      testimonials={testimonials}
    />
  )
}