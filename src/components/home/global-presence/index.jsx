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
    content:
      "Cameroon | Bolivia | Peru | Mexico | Guatemala | Indonesia | Thailand | Uganda | Tanzania | Venezuela | Mali | Benin | Ghana | Burkina Faso | Togo | Cabo Verde | Senegal | Nicaragua | Costa Rica | Colombia | Ethiopia | Somalia | Namibia",
  },
  {
    id: 2,
    name: "Cambodia",
    flag: CountryImage2,
    content: "Cambodia related country list here...",
  },
  {
    id: 3,
    name: "Vietnam",
    flag: CountryImage3,
    content: "Vietnam related country list here...",
  },
  {
    id: 4,
    name: "Philippines",
    flag: CountryImage4,
    content: "Philippines related country list here...",
  },
  {
    id: 5,
    name: "Ivory Coast",
    flag: CountryImage5,
    content: "Ivory Coast related country list here...",
  },
  {
    id: 6,
    name: "Chile",
    flag: CountryImage6,
    content: "Chile related country list here...",
  },
]

const GlobalPresence = () => {
  const [active, setActive] = useState(1)

  const activeCountry = countries.find((c) => c.id === active)

  return (
    <section className='py-20 bg-gray-100'>
      <div className='container mx-auto px-4'>
        {/* Title */}
        <div className='text-center mb-4 text-4xl font-bold'>
          Global <span className='text-primary'>Presence</span>
        </div>

        <div className='title_center_underline mx-auto' />

        <div className='flex justify-center gap-12 flex-wrap mt-8'>
          {countries.map((country) => (
            <div
              key={country.id}
              className='flex flex-col items-center cursor-pointer'
              onClick={() => setActive(country.id)}
            >
              <div
                className={`w-24 h-24 rounded-full overflow-hidden shadow-md 
                transition-all duration-300 
                ${active === country.id ? "scale-110" : ""}`}
              >
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={96}
                  height={96}
                  className='object-cover'
                />
              </div>

              <button
                key={country.id}
                onClick={() => setActive(country.id)}
                className={`px-10 py-4 rounded-t-xl text-lg font-semibold transition-all duration-300 mt-8
                ${
                  active === country.id
                    ? "bg-primary text-white"
                    : "bg-[#ededed] text-[#9c9c9c]"
                }`}
              >
                {country.name}
              </button>
            </div>
          ))}
        </div>

        {/* Content Box */}
        <div className='bg-white rounded-b-xl p-10 mt-0 shadow-md text-center text-lg leading-8 mx-1'>
          {activeCountry?.content}
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
