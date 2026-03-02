"use client"

import BannerSection from "@/components/contact/banner"
import ContactSection from "@/components/contact/contactSection"
import React, { Suspense } from "react"

const CareerPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerSection />

      <ContactSection />
    </Suspense>
  )
}

export default CareerPage
