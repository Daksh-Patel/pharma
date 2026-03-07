"use client"

import Image from "next/image"
import React, { useState } from "react"

import CountryImage1 from "@/assets/images/Myanmar-1.png"
import CountryImage2 from "@/assets/images/Cambodia.png"
import CountryImage3 from "@/assets/images/Vietnam.png"
import CountryImage4 from "@/assets/images/Philippines.png"
import CountryImage5 from "@/assets/images/ivory-coast.png"
import CountryImage6 from "@/assets/images/Chille.png"

const countries = [
  {
    id: 1,
    name: "Myanmar",
    flag: CountryImage1,
    content: [
      "Cameroon",
      "Bolivia",
      "Peru",
      "Mexico",
      "Guatemala",
      "Indonesia",
      "Thailand",
      "Uganda",
      "Tanzania",
      "Venezuela",
      "Mali",
      "Benin",
      "Ghana",
      "Senegal",
    ],
  },
  {
    id: 2,
    name: "Cambodia",
    flag: CountryImage2,
    content: [
      "Laos",
      "Thailand",
      "Malaysia",
      "Indonesia",
      "Singapore",
      "Vietnam",
      "Philippines",
    ],
  },
  {
    id: 3,
    name: "Vietnam",
    flag: CountryImage3,
    content: [
      "Japan",
      "South Korea",
      "Thailand",
      "Malaysia",
      "Indonesia",
      "Singapore",
      "Cambodia",
      "Laos",
    ],
  },
  {
    id: 4,
    name: "Philippines",
    flag: CountryImage4,
    content: [
      "Indonesia",
      "Malaysia",
      "Singapore",
      "Thailand",
      "Vietnam",
      "Taiwan",
      "Hong Kong",
    ],
  },
  {
    id: 5,
    name: "Ivory Coast",
    flag: CountryImage5,
    content: [
      "Ghana",
      "Nigeria",
      "Senegal",
      "Burkina Faso",
      "Togo",
      "Benin",
      "Mali",
    ],
  },
  {
    id: 6,
    name: "Chile",
    flag: CountryImage6,
    content: ["Argentina", "Peru", "Brazil", "Colombia", "Bolivia", "Ecuador"],
  },
]

const GlobalPresence = () => {
  const [active, setActive] = useState(1)
  const activeCountry = countries.find((c) => c.id === active)

  return (
    <section className='py-20 bg-white' id='globalPresence'>
      <div className='container'>
        {/* Title */}
        <div className='text-center mb-4 text-3xl md:text-4xl font-bold'>
          Global <span className='text-primary'>Presence</span>
        </div>

        <div className='title_center_underline mx-auto mb-12' />

        {/* Country Cards */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6'>
          {countries.map((country) => (
            <div
              key={country.id}
              onClick={() => setActive(country.id)}
              className={`
              cursor-pointer
              p-4 rounded-xl
              flex flex-col items-center
              transition-all duration-300
              shadow-sm
              ${
                active === country.id
                  ? "bg-primary/80 text-white shadow-lg scale-105"
                  : "bg-white hover:shadow-md"
              }
              `}
            >
              <div className='w-16 h-16 rounded-full overflow-hidden mb-3'>
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={64}
                  height={64}
                  className='object-cover'
                />
              </div>

              <p className='text-sm font-semibold text-center'>
                {country.name}
              </p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className='bg-white rounded-xl shadow-md mt-10 p-8'>
          <h3 className='text-xl font-bold mb-6 text-center'>
            Export Markets for {activeCountry?.name}
          </h3>

          <div className='flex flex-wrap justify-center gap-3'>
            {activeCountry?.content.map((country, index) => (
              <span
                key={index}
                className='
                border
                text-black
                px-4 py-2
                rounded-sm
                text-sm
                font-medium
                '
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
