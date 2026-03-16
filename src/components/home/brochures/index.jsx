"use client"

import Image from "next/image"
import React from "react"
import Link from "next/link"

import BrochuresImage from "@/assets/images/brochures.png"
import { Button } from "@/tailwind-components/ui/button"
import { Download } from "lucide-react"

const Brochures = () => {
  return (
    <section className='relative w-full py-20 overflow-hidden'>
      {/* Background Image */}
      <Image
        src={BrochuresImage}
        alt='Brochure Image'
        fill
        priority
        className='object-cover'
      />

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-primary/70' />

      {/* Content */}
      <div className='relative z-10 container'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
          {/* Text */}
          <div className='max-w-2xl text-center lg:text-left'>
            <h2 className='text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug mb-4'>
              Quality will keep us create strong bond with our customers.
            </h2>

            <p className='text-white/90 text-lg'>
              Quality will make us spread{" "}
              <span className='font-semibold'>Smile.</span>
            </p>
          </div>

          {/* Download Button */}
          <Link
            href='/brochures/grishty_pharma_brochure.pdf'
            target='_blank'
            download='grishty-pharma-brochure.pdf'
          >
            <Button
              className='
    bg-white text-primary
    hover:bg-black hover:text-white
    h-12 sm:h-14
    px-6 sm:px-8
    text-base sm:text-lg
    rounded-md
    flex items-center gap-3
    shadow-xl
    transition-all
    '
            >
              DOWNLOAD BROCHURES
              <Download className='w-7 h-7 sm:w-8 sm:h-8 shrink-0' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Brochures
