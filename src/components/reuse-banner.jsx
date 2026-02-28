"use client"

import React from "react"
import BrochuresImage from "@/assets/images/brochures.png"
import Image from "next/image"

const ReuseBannerSection = ({ title }) => {
  return (
    <section className='relative w-full h-60 overflow-hidden'>
      <Image
        src={BrochuresImage}
        alt='Brochure Image'
        fill
        priority
        className='object-cover'
      />

      {/* Green Overlay */}
      <div className='absolute inset-0 bg-[#28a745]/80'></div>

      {/* Content */}
      <div className='absolute inset-0 flex items-center justify-between'>
        <div className='container flex items-center justify-between'>
          <h1 className='text-white text-4xl md:text-4xl font-semibold max-w-3xl leading-snug'>
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default ReuseBannerSection
