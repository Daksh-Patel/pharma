"use client"

import BannerSection from "@/components/quality-policy/banner"
import QualitySection from "@/components/quality-policy/quality-section"
import React, { Suspense } from "react"

const PolicyPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerSection />

      <QualitySection />
    </Suspense>
  )
}

export default PolicyPage
