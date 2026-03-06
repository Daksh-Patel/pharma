"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

import BannerImage1 from "@/assets/images/banner_img1.png"
import BannerImage2 from "@/assets/images/banner_img2.png"
import BannerImage3 from "@/assets/images/banner_img3.png"

const slides = [
  {
    image: BannerImage1,
    title: "Best Tablets",
    subtitle: "Manufacturing In India",
  },
  {
    image: BannerImage2,
    title: "Trusted Pharma",
    subtitle: "Company In Gujarat",
  },
  {
    image: BannerImage3,
    title: "High Quality",
    subtitle: "Medicine Production",
  },
]

const AUTOPLAY_DELAY = 3000

export default function HomeBanner() {
  const [index, setIndex] = useState(0)
  const autoplayRef = useRef(null)

  // NEXT
  const scrollNext = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  // PREV
  const scrollPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // START AUTOPLAY
  const startAutoplay = () => {
    stopAutoplay()
    autoplayRef.current = setInterval(scrollNext, AUTOPLAY_DELAY)
  }

  // STOP AUTOPLAY
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
  }

  // INITIAL AUTOPLAY
  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [])

  const currentSlide = slides[index]

  return (
    <div
      className='relative w-full h-125 md:h-150 lg:h-162.5 overflow-hidden bg-background'
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* IMAGE FADE */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='absolute inset-0'
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            className='object-cover'
          />
        </motion.div>
      </AnimatePresence>

      {/* GRADIENT OVERLAY - Enhanced for better text visibility */}
      <div className='absolute inset-0 bg-linear-to-r from-background/95 via-background/70 to-transparent z-10' />

      {/* Additional subtle gradient from bottom */}
      <div className='absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent z-10' />

      {/* CONTENT CONTAINER */}
      <div className='container relative h-full z-20'>
        {/* TEXT CONTENT */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={"text-" + index}
            initial={{ opacity: 0, y: 40, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='absolute top-1/2 -translate-y-1/2 left-10 md:left-20 lg:left-35 max-w-2xl'
          >
            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='h-1 bg-primary mb-6'
            />
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4'>
              <motion.span
                className='block text-primary uppercase tracking-tight'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {currentSlide.title}
              </motion.span>
              <motion.span
                className='block text-foreground'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {currentSlide.subtitle}
              </motion.span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAVIGATION CONTROLS */}

      {/* PREV BUTTON */}
      <button
        onClick={scrollPrev}
        aria-label='Previous slide'
        className='absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 md:w-14 md:h-14 rounded-full
          bg-foreground/10 hover:bg-primary/90
          backdrop-blur-md
          items-center justify-center
          transition-all duration-300
          border border-primary/20 hover:border-primary
          group hidden md:flex'
      >
        <svg
          width='24'
          height='24'
          stroke='currentColor'
          fill='none'
          className='text-foreground group-hover:text-primary-foreground transition-colors'
        >
          <path
            d='M15 19l-7-7 7-7'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={scrollNext}
        aria-label='Next slide'
        className='absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 md:w-14 md:h-14 rounded-full
          bg-foreground/10 hover:bg-primary/90
          backdrop-blur-md hidden
          md:flex items-center justify-center
          transition-all duration-300
          border border-primary/20 hover:border-primary
          group'
      >
        <svg
          width='24'
          height='24'
          stroke='currentColor'
          fill='none'
          className='text-foreground group-hover:text-primary-foreground transition-colors'
        >
          <path
            d='M9 5l7 7-7 7'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {/* DOTS NAVIGATION */}
      <div className='absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-primary w-8 md:w-10"
                : "bg-foreground/30 hover:bg-foreground/50 w-2 md:w-3"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
