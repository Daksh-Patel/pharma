"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

import BannerImage1 from "@/assets/images/tablet_manufacturing.png"
import BannerImage2 from "@/assets/images/trusted_pharma.png"
import BannerImage3 from "@/assets/images/medicine_production.png"

const slides = [
  {
    image: BannerImage1,
    eyebrow: "Excellence in",
    title: "Best Tablets",
    titleAccent: "Manufacturing In India",
    description:
      "Precision-engineered pharmaceutical tablets crafted to the highest global standards of purity and efficacy.",
    tag: "ISO 9001 Certified",
    stat: { value: "2B+", label: "Tablets Produced" },
  },
  {
    image: BannerImage2,
    eyebrow: "India's Most",
    title: "Trusted Pharma",
    titleAccent: "Company In Gujarat",
    description:
      "Building lasting partnerships on integrity, transparency, and decades of pharmaceutical expertise.",
    tag: "GMP Compliant",
    stat: { value: "25+", label: "Years of Trust" },
  },
  {
    image: BannerImage3,
    eyebrow: "Uncompromising",
    title: "High Quality",
    titleAccent: "Medicine Production",
    description:
      "State-of-the-art facilities delivering life-changing medicines to patients across the globe.",
    tag: "WHO-GMP Approved",
    stat: { value: "50+", label: "Countries Served" },
  },
]

const AUTOPLAY_DELAY = 4500

// Image: pure opacity + scale, NO x translation → fixes white space gap
const imageVariants = {
  enter: { opacity: 0, scale: 1.06 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 1.03,
    transition: { duration: 0.6, ease: [0.4, 0, 0.6, 1] },
  },
}

const wordVariants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    y: "-60%",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
}

const fadeSlide = {
  hidden: { opacity: 0, y: 22 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
}

export default function HomeBanner() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  // Stable autoplay — functional updater, no stale closure
  useEffect(() => {
    if (paused) {
      clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setIndex((p) => (p + 1) % slides.length)
    }, AUTOPLAY_DELAY)
    return () => clearInterval(intervalRef.current)
  }, [paused, index])

  const scrollNext = useCallback(() => {
    setDirection(1)
    setIndex((p) => (p + 1) % slides.length)
  }, [])

  const scrollPrev = useCallback(() => {
    setDirection(-1)
    setIndex((p) => (p - 1 + slides.length) % slides.length)
  }, [])

  const goTo = useCallback((i) => {
    setDirection((prev) => (i > prev ? 1 : -1))
    setIndex(i)
  }, [])

  const slide = slides[index]

  return (
    <section
      className='relative w-full overflow-hidden bg-background'
      style={{ height: "clamp(500px, 88vh, 740px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── BACKGROUND IMAGE — fade + scale only, no x shift ── */}
      <AnimatePresence mode='sync'>
        <motion.div
          key={`img-${index}`}
          variants={imageVariants}
          initial='enter'
          animate='center'
          exit='exit'
          className='absolute inset-0'
          // No x/y transforms here — prevents any side gap
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className='object-cover object-center'
          />
        </motion.div>
      </AnimatePresence>

      {/* ── OVERLAYS ── */}
      <div
        className='absolute inset-0 z-10 pointer-events-none'
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.93) 28%, rgba(255,255,255,0.75) 48%, rgba(255,255,255,0.25) 65%, rgba(255,255,255,0) 80%)",
        }}
      />
      <div
        className='absolute inset-0 z-10 pointer-events-none'
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,0.45) 0%, transparent 28%)",
        }}
      />

      {/* ── TOP PROGRESS BAR ── */}
      <div className='absolute top-0 left-0 right-0 h-[3px] z-40 bg-border'>
        {!paused && (
          <motion.div
            key={index}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
            className='h-full w-full bg-primary'
            style={{ originX: 0 }}
          />
        )}
      </div>

      {/* ── SLIDE COUNTER top-right ── */}
      <div className='absolute top-6 right-6 md:top-8 md:right-10 z-30 hidden md:flex items-center gap-3'>
        <AnimatePresence mode='wait'>
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35 }}
            className='text-foreground/60 font-mono text-sm font-semibold tracking-widest'
          >
            0{index + 1}
          </motion.span>
        </AnimatePresence>
        <div className='h-px w-8 bg-foreground/20' />
        <span className='text-foreground/30 font-mono text-sm tracking-widest'>
          0{slides.length}
        </span>
      </div>

      {/* ── LEFT ACCENT BAR ── */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={`bar-${index}`}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className='absolute left-0 top-[12%] bottom-[12%] w-[3px] bg-primary z-20 rounded-r-full hidden lg:block'
        />
      </AnimatePresence>

      {/* ── MAIN CONTENT ── */}
      <div className='container relative h-full z-20 flex items-center'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={`content-${index}`}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='max-w-lg lg:max-w-4xl'
          >
            {/* TAG PILL */}
            <motion.div variants={fadeSlide} custom={0} className='mb-5'>
              <span className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/25'>
                <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
                {slide.tag}
              </span>
            </motion.div>

            {/* TITLE LINE 1 */}
            <div className='overflow-hidden'>
              <motion.h1
                variants={wordVariants}
                className='text-foreground font-bold lg:leading-22 tracking-tight'
                style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)" }}
              >
                {slide.title}
              </motion.h1>
            </div>

            {/* TITLE LINE 2 — primary green */}
            <div className='overflow-hidden mb-5'>
              <motion.h1
                variants={wordVariants}
                className='text-primary font-bold lg:leading-22 tracking-tight'
                style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)" }}
              >
                {slide.titleAccent}
              </motion.h1>
            </div>

            {/* DECORATIVE UNDERLINE */}
            <motion.div
              variants={fadeSlide}
              custom={0.05}
              className='title_underline mb-5'
            />

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeSlide}
              custom={0.1}
              className='text-foreground/60 text-sm md:text-base leading-relaxed max-w-sm mb-8'
            >
              {slide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── VERTICAL THUMBNAIL STRIP (desktop right) ── */}
      <div className='absolute right-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 hidden xl:flex'>
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`relative overflow-hidden rounded-lg transition-all duration-500 border-2 ${
              i === index
                ? "border-primary w-16 h-11 opacity-100 shadow-md"
                : "border-border hover:border-primary/40 w-12 h-8 opacity-45 hover:opacity-75"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className='object-cover'
              sizes='64px'
            />
            {i === index && (
              <motion.div
                layoutId='thumb-active'
                className='absolute bottom-0 left-0 right-0 h-0.5 bg-primary'
              />
            )}
          </button>
        ))}
      </div>

      {/* ── ARROW CONTROLS ── */}
      <button
        onClick={scrollPrev}
        aria-label='Previous slide'
        className='absolute left-4 top-1/2 -translate-y-1/2 z-30
          w-11 h-11 rounded-full hidden lg:flex items-center justify-center
          bg-white/90 hover:bg-primary shadow-sm backdrop-blur-sm
          border border-border hover:border-primary
          transition-all duration-300 group'
      >
        <svg
          width='18'
          height='18'
          fill='none'
          stroke='currentColor'
          className='text-foreground/60 group-hover:text-white transition-colors'
        >
          <path
            d='M11 15l-6-6 6-6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        aria-label='Next slide'
        className='absolute right-4 top-1/2 -translate-y-1/2 z-30
          w-11 h-11 rounded-full hidden lg:flex items-center justify-center
          bg-white/90 hover:bg-primary shadow-sm backdrop-blur-sm
          border border-border hover:border-primary
          transition-all duration-300 group'
      >
        <svg
          width='18'
          height='18'
          fill='none'
          stroke='currentColor'
          className='text-foreground/60 group-hover:text-white transition-colors'
        >
          <path
            d='M7 3l6 6-6 6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {/* ── MOBILE / TABLET DOT NAV ── */}
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 xl:hidden'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "bg-primary w-7 h-2.5"
                : "bg-foreground/20 hover:bg-foreground/40 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
