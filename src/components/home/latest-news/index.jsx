"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import React from "react"

import Image1 from "@/assets/images/iStock_000057723958_XXXLarge-400x248.jpg"
import Image2 from "@/assets/images/karsten-wurth-inf1783-104731-unsplash-400x248.jpg"

const newsData = [
  {
    id: 1,
    image: Image2,
    date: "AUG 04, 2018",
    category: "PHARMACEUTICALS",
    title:
      "Navigating the Pharmaceutical Landscape: Key Challenges and Opportunities",
    description:
      "The commerce ministry is in favour of hiking import duty on aluminium ...",
  },
  {
    id: 2,
    image: Image1,
    date: "AUG 04, 2018",
    category: "UNCATEGORIZED",
    title: "Steels’ Safety: India Appeals Against WTO’s Panel Ruling",
    description:
      "New Delhi: India has challenged the WTO dispute panel's ruling that ...",
  },
  {
    id: 3,
    image: Image2,
    date: "AUG 04, 2018",
    category: "UNCATEGORIZED",
    title: "Default Interest Rate in Small Loans Now is Lowest",
    description:
      "From a consumer perspective, it’s immensely important that ...",
  },
]

const LatestNews = () => {
  return (
    <section className='py-20 bgwhite'>
      <div className='container'>
        {/* Title */}
        <div className='text-center mb-4 text-4xl font-bold'>
          Latest <span className='text-primary'>News</span>
        </div>

        <div className='title_center_underline mx-auto' />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
          {newsData.map((item) => (
            <div
              key={item.id}
              className='bg-white shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col'
            >
              {/* Image */}
              <div className='relative w-full h-64 overflow-hidden'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              {/* Content */}
              <div className='p-8 flex flex-col grow'>
                {/* Date & Category */}
                <div className='text-sm tracking-wide text-gray-400 uppercase mb-4'>
                  {item.date}
                  <span className='mx-2'>•</span>
                  <span className='text-primary font-semibold'>
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className='text-2xl font-semibold text-gray-800 mb-6 leading-snug'>
                  {item.title}
                </h3>

                <div className='border-t border-gray-200 mb-6'></div>

                {/* Description */}
                <p className='text-gray-600 grow'>{item.description}</p>

                {/* Arrow Button */}
                <div className='mt-8 flex justify-center'>
                  <button
                    className='w-14 h-14 rounded-full border-2 border-primary text-primary
                    flex items-center justify-center 
                    transition-all duration-300 
                    group-hover:bg-primary group-hover:text-white'
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews
