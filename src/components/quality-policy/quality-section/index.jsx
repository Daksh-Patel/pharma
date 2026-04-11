import { Card } from "@/tailwind-components/ui/card"
import React from "react"

import Image1 from "@/assets/images/quality-new.jpg"
import Image2 from "@/assets/images/quality-new2.jpg"
import Image from "next/image"

const QualitySection = () => {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='container'>
        <div className='pl-3 border-l-4 border-l-gray-400 bg-white py-3 mb-5'>
          <h2 className='text-lg font-bold'>
            1. Quality assurance is the one fundamental quality to which we have
            the utmost regard and attention and will not compromise.
          </h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12'>
          <div>
            {/* Vertical Accent */}
            <div className='flex items-start gap-4'>
              <div>
                <p className='text-gray-700 leading-8'>
                  In order to guarantee a long-lasting quality culture, our goal
                  is to globalize, standardize, and streamline QC systems. Every
                  step of the manufacturing, analysis, and storage processes is
                  observed by our quality assurance department. Under the
                  ongoing scrutiny of quality considerations, these
                  professionals, who are qualified, execute periodic examination
                  and sampling at each phase of the process, starting from raw
                  materials and continuing through to intermediate and completed
                  pharmaceutical formulations.
                </p>

                <p className='text-gray-700 leading-8 mt-4'>
                  We commit to a single quality standard. We supervise its
                  application in a number of areas, especially technical
                  operations, quality assurance, and research & development. All
                  of the QMS’s quality system components are covered in the
                  quality manual as they relate to each of our business
                  segments. To guarantee that patients receive consistently
                  high-quality products, we employ best practices.
                </p>
              </div>
            </div>
          </div>
          <Card className={`p-4 shadow-sm`}>
            <div className='relative w-full h-100'>
              <Image
                src={Image1}
                alt={"image_1"}
                fill
                className='object-cover rounded-md'
                placeholder='blur'
              />
            </div>
          </Card>
        </div>

        <div className='pl-3 border-l-4 border-l-gray-400 bg-white py-3 mb-5'>
          <h2 className='text-lg font-bold'>
            2. Over the years, innovation and quality have been the cornerstones
            of our success.
          </h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12'>
          <Card className={`p-4 shadow-sm`}>
            <div className='relative w-full h-80'>
              <Image
                src={Image2}
                alt={"image_2"}
                fill
                className='object-cover rounded-md'
                placeholder='blur'
              />
            </div>
          </Card>
          <div>
            {/* Vertical Accent */}
            <div className='flex items-start gap-4'>
              <div>
                <p className='text-gray-700 leading-8'>
                  We consistently give our clients the best medication
                  available, and we have done a tremendous job of fostering a
                  WHO GMP culture across the entire organization. Our commitment
                  is to excellence. The application of quality control measures
                  complies with WHO GMP guidelines.
                </p>

                <p className='text-gray-700 leading-8 mt-4'>
                  We manufacture our items in state-of-the-art facilities that
                  meet the strictest quality requirements. From the process of
                  choosing raw materials to the commercialization phase, we are
                  steadfastly committed to quality and precision. Our items are
                  made with premium raw materials that we exclusively get from
                  reliable suppliers as we committed “We Saves Lives”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualitySection
