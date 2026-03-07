"use client"

import Image from "next/image"
import WelcomeImage from "@/assets/images/welcome.jpg"
// import { Button } from "@/tailwind-components/ui/button"
// import { CircleChevronRight } from "lucide-react"

const WelcomeSection = () => {
  return (
    <section className='py-14 md:py-20 bg-gray-100 relative'>
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
            <h4 className='text-3xl md:text-4xl font-semibold text-[#4b3b2f] mb-3'>
              Welcome To
            </h4>

            <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
              Gristy Pharma
            </h2>

            {/* Underline */}
            <div className='title_underline'></div>

            <p className='text-gray-600 leading-8 mb-6'>
              Gristy Pharma is one of India’s leading pharmaceutical companies,
              offering a comprehensive range of oral, liquid, and injectable
              formulations. As an integrated healthcare solutions provider, the
              company delivers a diverse portfolio of over 300 therapeutic
              products across more than seven key formulation categories,
              including cardiovascular, gastrointestinal, analgesics,
              haematinics, anti-infectives and antibiotics, respiratory agents,
              antidiabetics, and immunologicals. With a strong global presence,
              Gristy Pharma collaborates with partners in over seven countries,
              reinforcing its commitment to quality healthcare worldwide.
            </p>

            {/* <Button className='solidButton'>
              READ MORE <CircleChevronRight />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
