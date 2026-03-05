"use client"

import BannerSection from "@/components/generic-medicine/banner"
import Feature from "@/components/generic-medicine/featuring"
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
