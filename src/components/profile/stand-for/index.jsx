import React from "react"
import HealthcareAudience from "./healthcareAudience"

const StandForSection = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='pl-3 border-l-3 py-3 mb-6'>
          <h2 className='text-2xl font-bold text-primary'>Who We Stand For</h2>
        </div>

        <HealthcareAudience />
      </div>
    </section>
  )
}

export default StandForSection
