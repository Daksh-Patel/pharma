"use client"

import { Card } from "@/tailwind-components/ui/card"

const audienceData = [
  {
    id: 1,
    title: "Patients",
    description: "Committed to improving health and quality of life.",
  },
  {
    id: 2,
    title: "Doctors",
    description: "Partnering to provide the best care possible.",
  },
  {
    id: 3,
    title: "Our Partners",
    description: "Collaborating to enhance healthcare access and innovation.",
  },
  {
    id: 4,
    title: "Hospitals Worldwide",
    description: "Supplying reliable products to support patient care.",
  },
  {
    id: 5,
    title: "Paramedics",
    description: "Equipping them with essential tools for emergency response.",
  },
]

export default function HealthcareAudience() {
  return (
    <section className='bg-gray-100'>
      <Card className='overflow-hidden border border-gray-300 rounded-md p-0 gap-0 shadow-none'>
        {audienceData.map((item, index) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 md:grid-cols-3 items-center 
                border-b border-gray-300
                ${index === audienceData.length - 1 ? "border-b-0" : ""}`}
          >
            {/* LEFT TITLE */}
            <div className='px-6 md:border-r border-gray-300 py-2'>
              <h3 className='text-primary font-bold text-lg'>{item.title}</h3>
            </div>

            {/* RIGHT DESCRIPTION */}
            <div className='md:col-span-2 px-6 text-gray-700 text-base py-2'>
              {item.description}
            </div>
          </div>
        ))}
      </Card>
    </section>
  )
}
