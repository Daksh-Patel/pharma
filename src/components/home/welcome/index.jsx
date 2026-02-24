"use client"

import Image from "next/image"
import WelcomeImage from "@/assets/images/welcome.jpg"
import { Button } from "@/tailwind-components/ui/button"
import { CircleChevronRight } from "lucide-react"

const WelcomeSection = () => {
  return (
    <section className='py-20 bg-white relative welcome_section'>
      <div className='container'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* LEFT IMAGE */}
          <div className='relative w-full'>
            <Image
              src={WelcomeImage}
              alt='Welcome Image'
              className='object-fit w-full rounded-lg'
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h4 className='text-4xl font-semibold text-[#4b3b2f] mb-3'>
              Welcome To
            </h4>

            <h2 className='text-4xl font-bold text-primary mb-4'>
              Saviour Pharmaceuticals
            </h2>

            {/* Underline */}
            <div className='title_underline'></div>

            <p className='text-gray-600 leading-8 mb-6'>
              Saviour pharmaceuticals is one of the leading companies of India
              working with a wide range of products of orals, liquids and
              injectables. An integrated healthcare solutions provider with
              pharmaceutical product basket, it caters to over 250+ therapeutic
              products, 7+ formulations that include cardiovascular,
              gastrointestinal, analgesics, haematinics, anti-infectives and
              antibiotics, respiratory agents, antidiabetics and immunologicals
              collaborating with 7+ Countries.
            </p>

            <Button className='solidButton'>
              READ MORE <CircleChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
