"use client"

import BannerSection from "@/components/nutraceuticals-manufacturing/banner"
import NutraceuticalManufacturing from "@/components/nutraceuticals-manufacturing/featuring"
import React, { Suspense } from "react"

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerSection />

      <NutraceuticalManufacturing />
    </Suspense>
  )
}

export default Page
