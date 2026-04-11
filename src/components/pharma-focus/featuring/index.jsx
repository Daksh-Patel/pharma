"use client"

import PharmaMainImage from "@/assets/images/quality.png"
import Image from "next/image"

const Feature = () => {
  return (
    <section className='py-16'>
      <div className='container space-y-12'>
        <div className='border p-2 rounded-md'>
          <div className='relative w-full h-105 md:h-130 rounded overflow-hidden'>
            <Image
              src={PharmaMainImage}
              alt='Pharma Manufacturing'
              fill
              className='object-cover'
              placeholder='blur'
            />
          </div>
        </div>
        {/* Section 1 */}
        <div className='space-y-6'>
          <h2 className='text-xl md:text-2xl font-bold text-primary border-l-4 border-primary pl-4'>
            Your Trusted Partner for High-Quality Pharmaceutical Contract
            Manufacturing Solutions
          </h2>

          <div className='bg-gray-100 p-5 rounded-md text-gray-700 leading-relaxed'>
            <strong>Gristy Pharma</strong> offers reliable third-party
            manufacturing services for esteemed pharmaceutical companies across
            Africa, the Middle East, CIS, and Latin America.
          </div>
        </div>

        {/* Section 2 */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary border-l-4 border-primary pl-4'>
            Comprehensive Pharmaceutical Contract Manufacturing Services
          </h3>

          <div className='bg-gray-100 p-5 rounded-md text-gray-700 leading-relaxed'>
            We provide contract manufacturing for a wide variety of
            pharmaceutical dosage forms including aerosols, capsules, syrups,
            tablets, injections, ointments, and more.
          </div>
        </div>

        {/* Services Table */}
        <div className='space-y-6'>
          <p className='text-gray-700 font-medium'>
            Tailored to your needs, our services include:
          </p>

          <div className='border rounded-md overflow-hidden'>
            {services.map((row, i) => (
              <div
                key={i}
                className='grid md:grid-cols-[220px_1fr] border-b last:border-none'
              >
                <div className='bg-gray-50 p-4 font-semibold text-primary'>
                  {row.title}
                </div>

                <div className='p-4 text-gray-600'>{row.desc}</div>
              </div>
            ))}
          </div>

          <div className='bg-gray-100 p-5 rounded-md text-gray-700'>
            With our flexible approach, we seamlessly integrate into your
            pharmaceutical supply chain ensuring a strong partnership.
          </div>
        </div>

        {/* Economic Value */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary border-l-4 border-primary pl-4'>
            Economic Value of Strategic Alliance with Gristy Pharma
          </h3>

          <div className='bg-gray-100 p-5 rounded-md text-gray-700'>
            Partnering with <strong>Gristy Pharma</strong> offers numerous
            economic advantages that enhance your business operations and
            profitability.
          </div>

          {/* Benefits Table */}
          <div className='border rounded-md overflow-hidden'>
            {benefits.map((row, i) => (
              <div
                key={i}
                className='grid md:grid-cols-[260px_1fr] border-b last:border-none'
              >
                <div className='bg-gray-50 p-4 font-semibold text-primary'>
                  {row.title}
                </div>

                <div className='p-4 text-gray-600'>{row.desc}</div>
              </div>
            ))}
          </div>

          <div className='bg-gray-100 p-5 rounded-md text-gray-700'>
            By forming a strategic alliance with Gristy Pharma, you unlock
            significant economic value for your business success.
          </div>
        </div>

        {/* Future Section */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary border-l-4 border-primary pl-4'>
            Embracing the Future of Generic Medicine
          </h3>

          <p className='text-gray-600 leading-relaxed'>
            At <strong>Gristy Pharma</strong>, we are committed to staying ahead
            in the competitive landscape of generic medicine by expanding into
            advanced contract manufacturing.
          </p>

          <p className='text-gray-600 leading-relaxed'>
            Our vision is to evolve into a cutting-edge technology-driven
            pharmaceutical manufacturing company in India serving both domestic
            and international markets.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Feature

const services = [
  {
    title: "Raw Material Procurement",
    desc: "We source high-quality raw materials to ensure optimal product formulation.",
  },
  {
    title: "Production",
    desc: "Our state-of-the-art manufacturing facilities comply with industry standards.",
  },
  {
    title: "Quality Control",
    desc: "Rigorous testing ensures all products meet regulatory requirements.",
  },
  {
    title: "Packaging",
    desc: "Efficient packaging solutions ensure timely delivery.",
  },
  {
    title: "Shipping",
    desc: "Efficient shipping solutions to ensure timely delivery.",
  },
]

const benefits = [
  {
    title: "Consistent Delivery of High Quality Products",
    desc: "Our validated processes ensure a consistent supply of pharmaceuticals.",
  },
  {
    title: "Reduced Capital Investment",
    desc: "Collaborating with us minimizes investments in manufacturing facilities.",
  },
  {
    title: "Increased Net Profit and Income",
    desc: "Our efficient manufacturing solutions enhance your profitability.",
  },
  {
    title: "Focus on Core Capabilities",
    desc: "Outsource manufacturing and redirect resources to core business functions.",
  },
  {
    title: "Rigorous Quality Control",
    desc: "Every product undergoes thorough quality analysis before shipment.",
  },
  {
    title: "Timely Delivery Optimization",
    desc: "We optimize delivery timelines to ensure timely supply.",
  },
  {
    title: "WHO-GMP Certified Facilities",
    desc: "Our facilities are WHO-GMP certified ensuring high-quality production.",
  },
  {
    title: "State-of-the-Art Laboratories",
    desc: "Advanced microbiology and quality control laboratories ensure compliance.",
  },
]
