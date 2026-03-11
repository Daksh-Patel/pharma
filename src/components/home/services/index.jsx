"use client"

import Image from "next/image"
import React from "react"
import CountUp from "react-countup"

import BrochuresImage from "@/assets/images/brochures.png"

import { User, Map, ClipboardList, Bike } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: User,
    value: 8,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    id: 2,
    icon: Map,
    value: 10,
    suffix: "+",
    label: "Countries",
  },
  {
    id: 3,
    icon: ClipboardList,
    value: 150,
    suffix: "+",
    label: "Products",
  },
  {
    id: 4,
    icon: Bike,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
  },
]

const Services = () => {
  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Background */}
      <Image
        src={BrochuresImage}
        alt='Services Background'
        fill
        priority
        className='object-cover'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-primary/70' />

      {/* Content */}
      <div className='relative z-10'>
        <div className='container'>
          {/* Title */}
          <div className='text-center mb-4 text-3xl md:text-4xl font-bold text-white'>
            Services Delivered We Have{" "}
            <span className='text-white'>Great Skills</span>
          </div>

          <div className='w-28 h-0.75 bg-white mx-auto mb-16' />

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {stats.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  className='
                  backdrop-blur-md
                  bg-white/10
                  border border-white/20
                  rounded-xl
                  p-8
                  text-center
                  text-white
                  hover:bg-white/20
                  transition-all duration-300
                  hover:-translate-y-1
                  '
                >
                  {/* Icon */}
                  <div className='w-14 h-14 mx-auto mb-5 rounded-full bg-white/20 flex items-center justify-center'>
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  {/* Animated Number */}
                  <h3 className='text-3xl md:text-4xl font-bold mb-2'>
                    <CountUp
                      end={item.value}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {item.suffix}
                  </h3>

                  {/* Label */}
                  <p className='text-sm md:text-base tracking-wide'>
                    {item.label}
                  </p>
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
