"use client"

import BannerSection from "@/components/tablet-manufacturing/banner"
import Featuring from "@/components/tablet-manufacturing/featuring"
import React, { Suspense } from "react"

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerSection />

      <Featuring />
    </Suspense>
  )
}

export default Page
