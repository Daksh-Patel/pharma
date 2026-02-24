"use client"

import Image from "next/image"
import React from "react"
import BrochuresImage from "@/assets/images/brochures.png"
import { Button } from "@/tailwind-components/ui/button"
import { Download } from "lucide-react"

const Brochures = () => {
  return (
    <section className='relative w-full h-75 overflow-hidden'>
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
          <h2 className='text-white text-3xl md:text-4xl font-semibold max-w-3xl leading-snug'>
            Quality will keep us create strong bond with our customers. Quality
            will make us spread Smile.
          </h2>

          <Button className='solidButton2 hover:bg-gray-800 h-14 w-87.5 text-xl transition flex items-center gap-3'>
            DOWNLOAD BROCHURES
            <Download className='w-6! h-6! shrink-0' />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Brochures
