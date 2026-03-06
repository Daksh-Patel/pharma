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
  {
    id: 2,
    title: "Anti diabetic",
    image: ProductImage2,
  },
  {
    id: 3,
    title: "oncology",
    image: ProductImage3,
  },
  {
    id: 4,
    title: "antibiotics",
    image: ProductImage4,
  },
  {
    id: 5,
    title: "anti hypertensive",
    image: ProductImage5,
  },
  {
    id: 6,
    title: "beta lactum",
    image: ProductImage6,
  },
  {
    id: 7,
    title: "nutraceuticals",
    image: ProductImage7,
  },
]

const OurProduct = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        {/* Title */}
        <div className='text-center mb-4 text-4xl font-bold'>
          Our <span className='text-primary'>Products</span>
        </div>

        <div className='title_center_underline mx-auto' />

        <div className='grid grid-cols-4 gap-10'>
          {ProductList.map((product) => (
            <div
              className='bg-white p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 group rounded-md cursor-pointer mt-8'
              key={product.id}
            >
              <div className='w-35 h-35 bg-[#f7f7f7] relative flex items-center justify-center p-5 rounded-full'>
                <Image
                  src={product.image}
                  alt='product'
                  width={120}
                  height={120}
                  className='object-contain transition-transform duration-300 group-hover:scale-110'
                  priority
                />
              </div>
              <p className='mt-4 text-lg font-bold text-primary text-center capitalize'>
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
