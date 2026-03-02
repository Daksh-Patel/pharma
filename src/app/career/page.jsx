"use client"

import BannerSection from "@/components/career/banner"
import Opportunity from "@/components/career/opportunity"
import React, { Suspense } from "react"

const CareerPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerSection />

      <Opportunity />
    </Suspense>
  )
}

export default CareerPage
