"use client"

import Image from "next/image"
import Image1 from "@/assets/images/logo-kinegic.png"
import Image2 from "@/assets/images/mission-icon.jpg"
import Image3 from "@/assets/images/vision.jpg"
import Image4 from "@/assets/images/why-image.jpg"
import Image5 from "@/assets/images/sales.jpg"
import { Card } from "@/tailwind-components/ui/card"

const sections = [
  {
    id: 1,
    title: "KINEGIC LIFESCIENCE – KEY PARTNERS",
    image: Image1,
    content:
      "Kinegic Lifescience are key partners in our network, sharing our dedication to quality and innovation. By combining resources and expertise, we enhance our service offerings and adapt to the diverse needs of clients across industries. Together, we uphold high standards and deliver meaningful solutions worldwide.",
  },
  {
    id: 2,
    title: "MISSION",
    image: Image2,
    content:
      "Our goal is to enhance lives by providing access to quality medications today, paving the way for a happier, healthier, and more prosperous tomorrow for our patients.",
  },
  {
    id: 3,
    title: "VISION",
    image: Image3,
    content:
      "Our vision is to ensure access to affordable, top-quality medicines for all, produced through exceptional manufacturing practices, to enhance lives globally.",
  },
  {
    id: 4,
    title: "WHY SAVIOUR",
    image: Image4,
    content:
      "Gristy Pharma stands out in the industry because we are committed to quality, affordability, and community health. Our experienced team ensures that every product meets the highest standards.",
  },
  {
    id: 5,
    title: "SALES GROWTH",
    image: Image5,
    content:
      "Gristy Pharma has seen impressive sales growth over the past few years, driven by our expanding product range and strategic collaborations.",
  },
]

export default function CompanyInfoSection() {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='container'>
        {sections.map((item, index) => (
          <div
            key={item.id}
            className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12'
          >
            {/* IMAGE */}
            <Card
              className={`p-4 shadow-sm ${index % 2 !== 0 ? "lg:order-2" : ""}`}
            >
              <div className='relative w-full h-75'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover rounded-md'
                />
              </div>
            </Card>

            {/* CONTENT */}
            <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
              {/* Vertical Accent */}
              <div className='flex items-start gap-4'>
                <div>
                  <h2 className='text-2xl lg:text-3xl font-bold text-primary mb-4 '>
                    {item.title}
                  </h2>

                  <p className='text-gray-700 leading-8'>{item.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className='pl-3 border-l-3 border-l-gray-400 bg-white py-3 rounded-md'>
          <p className='text-base font-bold'>
            Gristy Pharma is not only dedicated to developing its own products
            but is also actively seeking partnerships with multinational
            companies to bring innovative solutions that meet the community’s
            needs.
          </p>
        </div>
      </div>
    </section>
  )
}
