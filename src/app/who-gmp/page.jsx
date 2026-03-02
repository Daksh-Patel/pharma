"use client"

import BannerSection from "@/components/who-gmp/banner"
import OurCommitment from "@/components/who-gmp/our-commitment"
import React, { Suspense } from "react"

const WhoGmpPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerSection />

      <OurCommitment />
    </Suspense>
  )
}

export default WhoGmpPage
