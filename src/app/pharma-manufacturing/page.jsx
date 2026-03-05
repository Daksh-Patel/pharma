"use client"

import BannerSection from "@/components/pharma-manufacturing/banner"
import Feature from "@/components/pharma-manufacturing/featuring"
import React, { Suspense } from "react"

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerSection />

      <Feature />
    </Suspense>
  )
}

export default Page
