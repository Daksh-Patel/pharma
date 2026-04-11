"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/tailwind-components/ui/accordion"
import React from "react"
import TabletImage from "@/assets/images/tablet_manufacturing.png"
import Image from "next/image"
import Feature from "@/components/feature"
import Tag from "@/components/tag"

const Featuring = () => {
  return (
    <section className='py-16'>
      <div className='container space-y-12'>
        {/* Image */}
        <div className='border p-2 rounded-md'>
          <div className='relative w-full h-87.5 md:h-112.5 lg:h-130 rounded overflow-hidden'>
            <Image
              src={TabletImage}
              alt='Tablet Manufacturing'
              fill
              className='object-cover'
              placeholder='blur'
            />
          </div>
        </div>

        {/* Heading */}
        <div className='space-y-4'>
          <p className='text-sm text-gray-500'>
            Leading the Way in Pharmaceutical Tablet Excellence Across India
          </p>

          <h2 className='text-2xl font-bold text-primary'>
            Premier Tablet Manufacturing Pharmaceutical Facility
          </h2>

          <p className='text-gray-600 leading-relaxed'>
            Gristy Pharma is a top name in India’s pharmaceutical industry,
            renowned for manufacturing, marketing, distributing, and sourcing
            high-quality pharmaceutical products. As a trusted leader in capsule
            production, we offer a diverse range of tablets including pills,
            Capsules, and orally disintegrating tablets.
          </p>

          <p className='text-gray-600 leading-relaxed'>
            We specialize in producing and supplying a broad range of
            pharmaceutical medicines, tablets, and capsules. Our products are
            crafted in WHO-GMP/EU-GMP-certified facilities ensuring the highest
            standards.
          </p>
        </div>

        {/* Section */}
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold text-primary'>
            Top Pharma Tablet Manufacturer & Supplier in India
          </h3>

          <p className='text-gray-600'>
            As a well-known tablet and capsule manufacturer in India, Gristy
            Pharma offers an extensive range of pharmaceutical products
            delivering high-quality and effective drug solutions tailored to
            diverse needs.
          </p>
        </div>

        {/* Features */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary'>
            Leading Pharma Tablet Manufacturer & Supplier
          </h3>

          <p className='text-gray-600'>
            Our dedicated research team ensures the development of safe and
            effective drugs for consumers.
          </p>

          <div className='space-y-4'>
            <Feature text='Produce tablets that are durable, effective, and resistant to breaking.' />

            <Feature text='Ensure each tablet is uniform in drug content and weight.' />

            <Feature text='Provide bioavailable tablet solutions designed for treatment requirements.' />
          </div>
        </div>

        {/* Infrastructure */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary'>
            Modern Infrastructure Systems and Quality Methods Adopted
          </h3>

          <p className='text-gray-600'>
            We utilize sterilized machinery in the manufacturing and packaging
            processes to ensure our medicines are pure and safe.
          </p>

          <div className='flex flex-wrap gap-3'>
            <Tag text='Tablet Thickness' />
            <Tag text='Tablet Hardness' />
            <Tag text='Friability Test' />
            <Tag text='Tablet Diameter' />
            <Tag text='Weight Variations' />
            <Tag text='Content Uniformity Test' />
            <Tag text='Disintegration Test' />
            <Tag text='Dissolution Test' />
          </div>
        </div>

        {/* Accordion */}
        <div>
          <h3 className='text-xl font-semibold text-primary mb-6'>
            Best Pharma Tablet Manufacturing Company in India
          </h3>

          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Quality Manufacturing</AccordionTrigger>
              <AccordionContent>
                We maintain strict quality control standards ensuring
                pharmaceutical-grade tablet manufacturing processes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2'>
              <AccordionTrigger>On-Time Delivery</AccordionTrigger>
              <AccordionContent>
                Our optimized supply chain ensures timely delivery across
                domestic and international markets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-3'>
              <AccordionTrigger>Cost-Efficient Production</AccordionTrigger>
              <AccordionContent>
                We use modern technology and optimized processes to deliver
                cost-effective pharmaceutical production.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Featuring
