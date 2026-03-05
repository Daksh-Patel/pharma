"use client"

import BannerSection from "@/components/pharma-focus/banner"
import Feature from "@/components/pharma-focus/featuring"
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
