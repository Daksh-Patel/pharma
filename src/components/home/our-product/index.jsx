"use client"

import Image from "next/image"
import React from "react"

import ProductImage2 from "@/assets/images/Anti-Diabetic-110x110.png"
import ProductImage3 from "@/assets/images/Anti-Bacterial-110x110.png"
import ProductImage4 from "@/assets/images/Anti-Ulce-110x110.png"
import ProductImage5 from "@/assets/images/Anti-Fungal-110x110.png"
import ProductImage6 from "@/assets/images/Anti-Allergic-110x110.png"
import ProductImage7 from "@/assets/images/Pain-Management-110x110.png"

const ProductList = [
  { id: 2, title: "Anti diabetic", image: ProductImage2 },
  { id: 3, title: "Oncology", image: ProductImage3 },
  { id: 4, title: "Antibiotics", image: ProductImage4 },
  { id: 5, title: "Anti hypertensive", image: ProductImage5 },
  { id: 6, title: "Beta lactum", image: ProductImage6 },
  { id: 7, title: "Nutraceuticals", image: ProductImage7 },
]

const OurProduct = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-white to-muted/30'>
      <div className='container'>
        {/* Title */}
        <div className='text-center mb-4 text-3xl md:text-4xl font-bold'>
          Our <span className='text-primary'>Products</span>
        </div>

        <div className='title_center_underline mx-auto mb-16' />

        {/* Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8'>
          {ProductList.map((product) => (
            <div
              key={product.id}
              className='group flex flex-col items-center text-center cursor-pointer'
            >
              {/* Icon Circle */}
              <div
                className='
                relative
                w-28 h-28
                flex items-center justify-center
                rounded-full
                bg-white
                shadow-md
                transition-all duration-300
                group-hover:shadow-xl
              '
              >
                {/* Hover Ring */}
                <div
                  className='
                  absolute inset-0
                  rounded-full
                  border-2 border-primary/20
                  scale-110
                  opacity-0
                  group-hover:opacity-100
                  group-hover:scale-125
                  transition-all duration-500
                '
                />

                <Image
                  src={product.image}
                  alt={product.title}
                  width={70}
                  height={70}
                  className='
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-110
                  '
                />
              </div>

              {/* Title */}
              <p
                className='
                mt-4
                text-sm md:text-base
                font-semibold
                text-foreground
                group-hover:text-primary
                transition-colors
                capitalize
              '
              >
                {product.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProduct
