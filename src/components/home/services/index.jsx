"use client"

import Image from "next/image"
import React from "react"
import BrochuresImage from "@/assets/images/brochures.png"

import { User, Map, ClipboardList, Bike } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: User,
    value: "10+",
    label: "YEARS OF EXPERIENCE",
  },
  {
    id: 2,
    icon: Map,
    value: "20+",
    label: "COUNTRIES",
  },
  {
    id: 3,
    icon: ClipboardList,
    value: "500+",
    label: "DOSAGE FORMS",
  },
  {
    id: 4,
    icon: Bike,
    value: "50+",
    label: "HAPPY CLIENTS",
  },
]

const Services = () => {
  return (
    <section className='relative w-full min-h-120 overflow-hidden'>
      <Image
        src={BrochuresImage}
        alt='Brochure Image'
        fill
        priority
        className='object-cover'
      />

      {/* Green Overlay */}
      <div className='absolute inset-0 bg-[#28a745]/70'></div>

      {/* Content */}
      <div className='absolute w-full py-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <div className='container'>
          <h2 className='text-center mb-4 text-4xl font-bold text-white w-full'>
            Services Delivered We Have Great Skills
          </h2>

          <div className='w-full mx-auto h-0.5 bg-[#ffffff] text-center max-w-37.5' />

          <div className='grid grid-cols-4 gap-8 w-full mt-10'>
            {stats.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  className='border border-white p-10 text-center text-white
                hover:bg-white/10 transition-all duration-300'
                >
                  <div className='flex justify-center mb-6'>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>

                  <h2 className='text-5xl font-bold mb-4'>{item.value}</h2>

                  <p className='tracking-wide text-lg'>{item.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
