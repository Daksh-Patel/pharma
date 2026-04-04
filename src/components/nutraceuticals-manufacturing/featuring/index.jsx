"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/tailwind-components/ui/accordion"

import Image from "next/image"
import Feature from "@/components/feature"
import Tag from "@/components/tag"

import NutraImage from "@/assets/images/nutra.jpg"

const NutraceuticalManufacturing = () => {
  return (
    <section className='py-16'>
      <div className='container space-y-12'>
        {/* Intro */}
        <div className='space-y-6'>
          <div>
            <p className='text-sm text-gray-500'>
              Leading Nutraceutical Manufacturers in India
            </p>

            <h2 className='text-2xl font-bold text-primary'>
              Best Nutraceuticals Manufacturing Company
            </h2>
          </div>

          {/* Two column text */}
          <div className='grid md:grid-cols-2 gap-6 text-gray-600 leading-relaxed'>
            <p>
              At Gristy Pharma, we believe that good health starts with good
              nutrition. Unfortunately, many of us struggle to maintain a
              balanced diet due to busy lifestyles.
            </p>

            <p>
              As a leading nutraceutical manufacturer in India, we offer a
              comprehensive range of nutraceuticals for third-party
              manufacturing including liquid prenatal vitamins, Garcinia
              Cambogia, Vitamin D3 and Omega-3 supplements.
            </p>
          </div>

          {/* Highlight Box */}
          <div className='bg-gray-100 p-5 rounded-md text-gray-700'>
            If you're looking to launch a new nutraceutical product and need the
            best manufacturing partner in India, Gristy Pharma is here to help.
          </div>
        </div>

        {/* Image */}
        <div className='border p-2 rounded-md'>
          <div className='relative w-full h-96 md:h-112.5 lg:h-130 rounded overflow-hidden'>
            <Image
              src={NutraImage}
              alt='Nutraceutical Manufacturing'
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* Market Section */}
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold text-primary'>
            Nutraceutical Market Worldwide
          </h3>

          <p className='text-gray-600 leading-relaxed'>
            The global market for functional foods, nutraceuticals, and
            probiotics is rapidly expanding as consumers become more aware of
            their health and immunity.
          </p>
        </div>

        {/* Best Pharma Section */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary'>
            Best Pharma Company for Nutraceutical Products Manufacturing
          </h3>

          <p className='text-gray-600'>
            Ranked among the top nutraceutical manufacturers in India, Gristy
            Pharma boasts a skilled team focused on producing high-quality
            nutraceutical products.
          </p>

          {/* Feature Pills */}
          <div className='space-y-4'>
            <Feature text='Our manufacturing units are WHO-GMP certified.' />
            <Feature text='We offer a diverse portfolio with over 1000 products.' />
            <Feature text='Our pricing is competitive and affordable.' />
            <Feature text='We operate in an excise duty-free zone.' />
            <Feature text='We utilize advanced machinery for timely delivery.' />
            <Feature text='Our R&D team develops innovative products.' />
            <Feature text='Products are packaged with eye-catching designs.' />
          </div>
        </div>

        {/* Team Section */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary'>
            Our Team of Skilled Professionals Includes
          </h3>

          <div className='flex flex-wrap gap-3'>
            <Tag text='Packaging Experts' />
            <Tag text='Chemical Engineers' />
            <Tag text='Sales and Marketing Executives' />
            <Tag text='Quality Controllers' />
            <Tag text='Skilled Workforce' />
            <Tag text='Manufacturing Experts' />
            <Tag text='Global Exporters' />
          </div>
        </div>

        {/* Accordion */}
        <div>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>FSSAI Compliance</AccordionTrigger>

              <AccordionContent>
                At Gristy Pharma, we prioritize quality and safety by using
                FSSAI-approved ingredients in all our products.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2'>
              <AccordionTrigger>
                Quality Precautions for Safe Nutraceutical Manufacturing
              </AccordionTrigger>

              <AccordionContent>
                Our manufacturing units follow strict quality standards and
                regulatory compliance to ensure safe nutraceutical production.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default NutraceuticalManufacturing
