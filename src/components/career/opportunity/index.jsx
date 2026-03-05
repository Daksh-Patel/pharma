"use client"

import { Button } from "@/tailwind-components/ui/button"
import ResumeForm from "./resumeForm"

export default function Opportunity() {
  return (
    <section className='py-20'>
      <div className='container grid grid-cols-1 lg:grid-cols-2 gap-16'>
        {/* Left Content */}
        <div className='space-y-6'>
          <h2 className='text-2xl font-semibold'>
            Opportunity • Development • People & Culture
          </h2>

          <div className='title_underline' />

          <p className='text-gray-600 leading-relaxed'>
            At Gristy Pharma, we put people first. We value individuals and
            offer a dynamic work atmosphere that facilitates growth on both
            personal and professional fronts.
          </p>

          <Button className='w-full'>gristy@pharma.com</Button>
        </div>

        {/* Right Form */}
        <div>
          <h2 className='text-2xl font-semibold mb-2'>Submit your resume</h2>
          <div className='title_underline' />

          <ResumeForm />
        </div>
      </div>
    </section>
  )
}
