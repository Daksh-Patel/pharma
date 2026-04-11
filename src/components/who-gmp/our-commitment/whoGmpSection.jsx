"use client"

import Image from "next/image"
import React from "react"

const WhoGmpSection = ({
  title,
  paragraphs,
  image,
  imagePosition = "right",
}) => {
  return (
    <div className='space-y-4'>
      {/* Section Title */}
      <div className='pl-4 border-l-4 border-orange-500 bg-white py-3'>
        <h2 className='text-lg font-bold text-primary'>{title}</h2>
      </div>

      {/* Content Box */}
      <div className='bg-gray-100 p-6'>
        <div
          className={`flex flex-col lg:flex-row gap-8 ${
            imagePosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div className='flex-1 space-y-4 text-gray-700 leading-relaxed'>
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* Optional Image */}
          {image && (
            <div className='w-full lg:w-85 shrink-0'>
              <Image
                src={image}
                alt={title}
                className='w-full h-auto object-cover'
                placeholder='blur'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WhoGmpSection
