"use client"

import Image from "next/image"
import ProfileImage from "@/assets/images/gristy.png"

const WelcomeSection = () => {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* LEFT CONTENT */}
          <div className='relative'>
            {/* Vertical Accent Line */}

            <div className='pl-3 border-l-3 py-3 mb-5'>
              <h5 className='text-lg font-bold text-gray-700 mb-3'>
                Leading the Way in Quality Healthcare Solutions
              </h5>

              <h2 className='text-2xl font-bold text-primary'>
                Welcome to Gristy Pharma
              </h2>
            </div>
            <div className=''>
              <p className='text-gray-700 leading-8 mb-6 text-justify'>
                Gristy Pharma is one of India’s leading pharmaceutical
                companies. We offer a wide range of food and Nutra products,
                including oral medicines, liquids, and injectables. With over
                250 therapeutic products across seven formulations, we focus on
                areas like heart health, digestive health, pain relief,
                infection control, respiratory issues, diabetes, and immune
                support.
              </p>

              <p className='text-gray-700 leading-8 text-justify'>
                We partner with more than seven countries and prioritize high
                quality, safety, and effectiveness at competitive prices to meet
                our customers’ needs. Our unique business model combines the
                strengths of both large and small companies, backed by strong
                leadership and a commitment to innovation. We’re also actively
                seeking new partnerships with multinational companies to expand
                our product offerings.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className='p-3 shadow-md'>
            <div className='relative w-full h-112.5'>
              <Image
                src={ProfileImage}
                alt='Welcome'
                fill
                className='object-cover rounded-md'
                placeholder='blur'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
