"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import React, { useRef } from "react"

import AddImage1 from "@/assets/images/iso-9001-grey.jpg"
import AddImage2 from "@/assets/images/iso-9001-grey.jpg"
import AddImage3 from "@/assets/images/iso-9001-grey.jpg"
import AddImage4 from "@/assets/images/iso-9001-grey.jpg"
import AddImage5 from "@/assets/images/iso-9001-grey.jpg"
import AddImage6 from "@/assets/images/iso-9001-grey.jpg"

const AdvertiseList = [
  { id: 1, image: AddImage1 },
  { id: 2, image: AddImage2 },
  { id: 3, image: AddImage3 },
  { id: 4, image: AddImage4 },
  { id: 5, image: AddImage5 },
  { id: 6, image: AddImage6 },
]

export default function Advertise() {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    }),
  )

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      dragFree: true, // smoother loop
    },
    [autoplay.current],
  )

  return (
    <section className='bg-gray-100 py-20'>
      <div className='container mx-auto px-4'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {AdvertiseList.map((item) => (
              <div
                key={item.id}
                className='flex-[0_0_20%] min-w-0 px-5 flex justify-center'
              >
                <div className='group'>
                  <Image
                    src={item.image}
                    alt='certification'
                    width={210}
                    height={135}
                    className='object-contain transition-all duration-300
                    grayscale group-hover:grayscale-0 group-hover:scale-110'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
