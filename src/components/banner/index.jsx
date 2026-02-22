"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
      className='relative w-full min-h-162.5 overflow-hidden'
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* IMAGE FADE */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className='absolute inset-0'
        >
          <Image
            src={currentSlide.image}
            alt='Banner'
            fill
            priority
            className='object-cover'
          />
        </motion.div>
      </AnimatePresence>

      {/* GRADIENT */}
      <div className='absolute inset-0 bg-linear-to-r from-white via-white/70 to-transparent z-10' />

      {/* TEXT */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={"text-" + index}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          className='absolute top-1/2 -translate-y-1/2 left-10 md:left-30 z-20 max-w-160'
        >
          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight'>
            <span className='text-green-600 uppercase'>
              {currentSlide.title}
            </span>
            <br />
            {currentSlide.subtitle}
          </h1>
        </motion.div>
      </AnimatePresence>

      {/* PREV BUTTON */}
      <button
        onClick={scrollPrev}
        className='absolute left-5 top-1/2 -translate-y-1/2 z-30
        w-14 h-14 rounded-full
        bg-black/30 hover:bg-black/50
        backdrop-blur-md
        flex items-center justify-center'
      >
        <svg width='24' height='24' stroke='white' fill='none'>
          <path d='M15 19l-7-7 7-7' strokeWidth='2' />
        </svg>
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={scrollNext}
        className='absolute right-5 top-1/2 -translate-y-1/2 z-30
        w-14 h-14 rounded-full
        bg-black/30 hover:bg-black/50
        backdrop-blur-md
        flex items-center justify-center'
      >
        <svg width='24' height='24' stroke='white' fill='none'>
          <path d='M9 5l7 7-7 7' strokeWidth='2' />
        </svg>
      </button>

      {/* DOTS */}
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all ${
              i === index ? "bg-green-600 w-8" : "bg-white/50 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
