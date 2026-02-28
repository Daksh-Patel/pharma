"use client"

import BannerSection from "@/components/leadership/banner"
import MarketingSection from "@/components/leadership/marketing"
import React, { Suspense } from "react"

const ProfilePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerSection />

      <MarketingSection />
    </Suspense>
  )
}

export default ProfilePage
