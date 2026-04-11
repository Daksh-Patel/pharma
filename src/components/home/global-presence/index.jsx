"use client"

import Image from "next/image"
import React, { useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

import CountryImage1 from "@/assets/images/Myanmar-1.png"
import CountryImage2 from "@/assets/images/Cambodia.svg"
import CountryImage3 from "@/assets/images/Vietnam.png"
import CountryImage4 from "@/assets/images/Philippines.svg"
import CountryImage5 from "@/assets/images/Ivory_Coast.png"
import CountryImage6 from "@/assets/images/Chile.png"
import CountryImage7 from "@/assets/images/Thailand.png"
import CountryImage8 from "@/assets/images/Malaysia.svg"
import CountryImage9 from "@/assets/images/Indonesia.png"
import CountryImage10 from "@/assets/images/Singapore.png"
import CountryImage11 from "@/assets/images/Brazil.png"
import CountryImage12 from "@/assets/images/Nigeria.svg"
import CountryImage13 from "@/assets/images/Kenya.png"
import CountryImage14 from "@/assets/images/Argentina.png"
import CountryImage15 from "@/assets/images/Colombia.png"
import CountryImage16 from "@/assets/images/Ecuador.svg"
import CountryImage17 from "@/assets/images/Panama.png"
import CountryImage18 from "@/assets/images/Costa_Rica.png"
import CountryImage19 from "@/assets/images/China.png"
import CountryImage20 from "@/assets/images/Japan.png"
import CountryImage21 from "@/assets/images/South_Korea.png"
import CountryImage22 from "@/assets/images/Taiwan.png"
import CountryImage23 from "@/assets/images/Australia.png"
import CountryImage24 from "@/assets/images/New_Zealand.svg"
import CountryImage25 from "@/assets/images/South_Africa.png"
import CountryImage26 from "@/assets/images/Ghana.svg"

const countries = [
  { id: 1, name: "Myanmar", flag: CountryImage1 },
  { id: 2, name: "Cambodia", flag: CountryImage2 },
  { id: 3, name: "Vietnam", flag: CountryImage3 },
  { id: 4, name: "Philippines", flag: CountryImage4 },
  { id: 5, name: "Ivory Coast", flag: CountryImage5 },
  { id: 6, name: "Chile", flag: CountryImage6 },
  { id: 7, name: "Thailand", flag: CountryImage7 },
  { id: 8, name: "Malaysia", flag: CountryImage8 },
  { id: 9, name: "Indonesia", flag: CountryImage9 },
  { id: 10, name: "Singapore", flag: CountryImage10 },
  { id: 11, name: "Brazil", flag: CountryImage11 },
  { id: 12, name: "Nigeria", flag: CountryImage12 },
  { id: 13, name: "Kenya", flag: CountryImage13 },
  { id: 14, name: "Argentina", flag: CountryImage14 },
  { id: 15, name: "Colombia", flag: CountryImage15 },
  { id: 16, name: "Ecuador", flag: CountryImage16 },
  { id: 17, name: "Panama", flag: CountryImage17 },
  { id: 18, name: "Costa Rica", flag: CountryImage18 },
  { id: 19, name: "China", flag: CountryImage19 },
  { id: 20, name: "Japan", flag: CountryImage20 },
  { id: 21, name: "South Korea", flag: CountryImage21 },
  { id: 22, name: "Taiwan", flag: CountryImage22 },
  { id: 23, name: "Australia", flag: CountryImage23 },
  { id: 24, name: "New Zealand", flag: CountryImage24 },
  { id: 25, name: "South Africa", flag: CountryImage25 },
  { id: 26, name: "Ghana", flag: CountryImage26 },
]

const GlobalPresence = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    }),
  )

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    autoplay.current,
  ])

  return (
    <section className='py-20 bg-white' id='globalPresence'>
      <div className='container'>
        <div className='text-center mb-4 text-3xl md:text-4xl font-bold'>
          Global <span className='text-primary'>Presence</span>
        </div>

        <div className='title_center_underline mx-auto mb-12' />

        {/* Embla */}
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex my-4'>
            {countries.map((country) => (
              <div
                key={country.id}
                className='
                flex-[0_0_50%]
                sm:flex-[0_0_33.33%]
                md:flex-[0_0_25%]
                lg:flex-[0_0_16.66%]
                px-3
                '
              >
                <div className='p-4 rounded-xl flex flex-col items-center shadow-sm bg-white hover:shadow-md transition'>
                  <div className='w-25 h-16 rounded-sm overflow-hidden mb-3 border border-gray-200'>
                    <Image
                      src={country.flag}
                      alt={country.name}
                      width={100}
                      height={64}
                      className='object-cover min-h-16'
                    />
                  </div>

                  <p className='text-sm font-semibold text-center'>
                    {country.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
