"use client"

import Image from "next/image"
import React from "react"

import AddImage2 from "@/assets/images/who-gmp-grey.jpg"
import AddImage3 from "@/assets/images/gmp-certfice-grey.jpg"
import AddImage4 from "@/assets/images/usfda.png"

const AdvertiseList = [
  { id: 2, image: AddImage2 },
  { id: 3, image: AddImage3 },
  { id: 4, image: AddImage4 },
]

export default function Advertise() {
  return (
    <section className='bg-gray-100 py-12 md:py-16 lg:py-20'>
      <div className='container'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10 place-items-center max-w-200 mx-auto'>
          {AdvertiseList.map((item) => (
            <div
              key={item.id}
              className='group w-full max-w-55 bg-white p-4 md:p-6 rounded-md shadow-sm hover:shadow-md transition flex items-center justify-center'
            >
              <Image
                src={item.image}
                alt='certification'
                width={180}
                height={100}
                className='
                  max-h-20 md:max-h-24 lg:max-h-28
                  object-contain
                  transition-all duration-300
                  grayscale
                  group-hover:grayscale-0
                  group-hover:scale-105
                '
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
