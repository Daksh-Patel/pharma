"use client"

import Image from "next/image"
import Tag from "@/components/tag"

import GenericImage from "@/assets/images/generic-image.jpg"

const Feature = () => {
  return (
    <section className='py-16'>
      <div className='container space-y-12'>
        {/* Intro */}
        <div className='space-y-6'>
          <div>
            <p className='text-sm text-gray-500'>
              Advanced Generic Medicine Manufacturing Pharmaceutical Company
            </p>

            <h2 className='text-2xl font-bold text-primary'>
              Generic Medicine Manufacturing Company
            </h2>
          </div>

          {/* Two column layout */}
          <div className='grid md:grid-cols-2 gap-10 items-start'>
            {/* Left Content */}
            <div className='space-y-4 text-gray-600 leading-relaxed'>
              <p>
                Gristy Pharma is a leading generic medicine manufacturing
                company based in Ahmedabad, Gujarat. We have established a
                strong reputation in the field of generic pharmaceuticals and
                branded medicines.
              </p>

              <p>
                Our organization is certified by prestigious authorities
                including WHO-GMP, EU-GMP, and Ministry of Health placing us
                among the top pharmaceutical companies in India.
              </p>

              <p>
                With a reputation as a trusted generic pharmaceutical
                manufacturer in India, we pride ourselves on quality workmanship
                and timely delivery.
              </p>
            </div>

            {/* Right Image */}
            <div className='border p-2 rounded-md'>
              <div className='relative w-full h-80 rounded overflow-hidden'>
                <Image
                  src={GenericImage}
                  alt='Generic Medicine'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold text-primary'>
            Generic Drug Portfolio of Gristy Pharma
          </h3>

          <p className='text-gray-600 leading-relaxed'>
            Currently, we market over 650 branded products and 2700 generic
            formulations to consumers in more than 20 countries worldwide.
          </p>
        </div>

        {/* Generic Products */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary'>
            Generic Pharma Products Manufacturing
          </h3>

          {/* Highlight Box */}
          <div className='bg-gray-100 p-5 rounded-md text-gray-700'>
            Gristy Pharma proudly offers a portfolio of over 1500 pharmaceutical
            generic medicine products.
          </div>

          {/* Dosage Forms */}
          <p className='text-gray-600 font-medium'>
            The comprehensive list of dosage forms we manufacture includes:
          </p>

          <div className='flex flex-wrap gap-3'>
            <Tag text='Tablet' />
            <Tag text='Drops' />
            <Tag text='Ointment' />
            <Tag text='Capsule' />
            <Tag text='Sachet' />
            <Tag text='Lotion' />
            <Tag text='Powder' />
            <Tag text='Syrup' />
          </div>
        </div>

        {/* Why Partner Section */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary'>
            Why Partner with Gristy Pharma?
          </h3>

          <div className='bg-gray-100 p-5 rounded-md text-gray-700'>
            If you're looking for a reliable partner in the pharmaceutical
            industry, Gristy Pharma stands out for several reasons.
          </div>

          {/* Feature Table */}
          <div className='border rounded-md overflow-hidden'>
            {rows.map((row, i) => (
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
        </div>
      </div>
    </section>
  )
}

export default Feature

const rows = [
  {
    title: "Recognized Reputation",
    desc: "We are featured in top pharmaceutical magazines and reputable websites.",
  },
  {
    title: "Modern Packaging Technology",
    desc: "We utilize the latest packaging techniques to ensure safety and quality.",
  },
  {
    title: "Transparent Agreements",
    desc: "Our manufacturing agreements are clear and straightforward.",
  },
  {
    title: "Extensive Product Range",
    desc: "We cover a wide array of healthcare needs including dermatology and pediatrics.",
  },
  {
    title: "Dedicated Teams",
    desc: "Our divisions focus on different healthcare segments ensuring expertise.",
  },
  {
    title: "Skilled Research & Development",
    desc: "Our R&D teams work in fully equipped labs to develop high-quality generics.",
  },
  {
    title: "Cost-Effective Solutions",
    desc: "We manufacture in excise duty-free zones to make deals affordable.",
  },
  {
    title: "Regulatory Approvals",
    desc: "All medicines are FDA certified with approvals from DCGI and FSSAI.",
  },
  {
    title: "International Standards",
    desc: "Facilities certified by WHO and GMP ensuring global quality.",
  },
  {
    title: "Confidentiality Assured",
    desc: "We maintain strict confidentiality regarding clients' formulations.",
  },
]
