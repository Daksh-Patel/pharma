"use client"

import Image from "next/image"

import PharmaMainImage from "@/assets/images/trusted_pharma.png"
import PharmaSideImage from "@/assets/images/pharma-side.jpg"

const Feature = () => {
  return (
    <section className='py-16'>
      <div className='container space-y-12'>
        {/* Top Large Image */}
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

        {/* First Section */}
        <div className='space-y-6'>
          <h2 className='text-xl md:text-2xl font-bold text-primary border-l-4 border-primary pl-4'>
            Your Trusted Partner for High-Quality Pharmaceutical Third Party
            Manufacturing in India
          </h2>

          <div className='grid md:grid-cols-1 gap-8 items-start'>
            {/* Text */}
            <div className='space-y-4 text-gray-600 leading-relaxed'>
              <p>
                <strong>Gristy Pharma</strong> pharmaceutical contract
                manufacturing sites are WHO-GMP & EU-GMP Certified
                state-of-the-art manufacturing facilities located in Gujarat,
                India.
              </p>

              <p>
                Our organization is committed to continuously updating our
                facility to exceed customer satisfaction and comply with
                regulatory requirements.
              </p>
            </div>

            {/* Side Image */}
          </div>
        </div>

        {/* Manufacturing Section */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary border-l-4 border-primary pl-4'>
            Your Trusted Partner for High-Quality Pharmaceutical Third Party
            Manufacturing in India
          </h3>

          <p className='text-gray-600 leading-relaxed'>
            Currently, Gristy Pharma manufactures a wide range of medicines
            including antibiotics, antidiabetics, antipsychotics, vitamins and
            dermatological products.
          </p>
        </div>

        {/* Manufacturing Facility Table */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary'>
            Features of the Manufacturing Facilities
          </h3>

          <div className='border rounded-md overflow-hidden'>
            {facilityRows.map((row, i) => (
              <div
                key={i}
                className='grid md:grid-cols-[250px_1fr] border-b last:border-none'
              >
                <div className='bg-gray-50 p-4 font-semibold text-primary'>
                  {row.title}
                </div>

                <div className='p-4 text-gray-600'>{row.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-primary'>
            Certifications & Quality Assurance
          </h3>

          <div className='border rounded-md overflow-hidden'>
            {certificationRows.map((row, i) => (
              <div
                key={i}
                className='grid md:grid-cols-[250px_1fr] border-b last:border-none'
              >
                <div className='bg-gray-50 p-4 font-semibold text-primary'>
                  {row.title}
                </div>

                <div className='p-4 text-gray-600'>{row.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Professionals */}
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold text-primary border-l-4 border-primary pl-4'>
            Well-Experienced Professionals
          </h3>

          <p className='text-gray-600 leading-relaxed'>
            At <strong>Gristy Pharma</strong>, our core strength lies in our
            highly qualified team of industry leaders dedicated to generic
            medicines contract manufacturing.
          </p>
        </div>

        {/* Testing Section */}
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold text-primary border-l-4 border-primary pl-4'>
            Comprehensive Testing and Procedures
          </h3>

          <div className='bg-gray-100 p-5 rounded-md text-gray-700'>
            Along with providing you with the best pharmaceutical services,
            Gristy Pharma covers a wide spectrum of testing procedures to ensure
            the highest quality medicines.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature

const facilityRows = [
  {
    title: "Comprehensive Pest Control",
    desc: "Our facilities include an exhaustive pest control system to ensure complete freedom from insects and rodents.",
  },
  {
    title: "Clean Environment",
    desc: "Floors, walls, and ceilings are maintained to be free from dust and dirt.",
  },
  {
    title: "Advanced Water Systems",
    desc: "A fully-fledged DM water system is in place for quality production.",
  },
  {
    title: "Effective Management",
    desc: "Production and administration functions are supervised by the Factory & Managing Director.",
  },
]

const certificationRows = [
  {
    title: "Certifications",
    desc: "Gristy Pharma is certified by WHO-GMP and cGMP.",
  },
  {
    title: "ISO Standards",
    desc: "We are certified under ISO 14001:2015 & ISO 9001:2015.",
  },
  {
    title: "Quality Compliance",
    desc: "Our quality system complies with European & Indian Pharmacopoeias.",
  },
  {
    title: "International Standards",
    desc: "We adhere to internationally benchmarked quality and regulatory systems.",
  },
]
