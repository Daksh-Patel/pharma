"use client"

import BannerSection from "@/components/profile/banner"
import CompanyInfoSection from "@/components/profile/company-info"
import StandForSection from "@/components/profile/stand-for"
import WelcomeSection from "@/components/profile/welcome"
import React, { Suspense } from "react"

const ProfilePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerSection />

      <WelcomeSection />

      <StandForSection />

      <CompanyInfoSection />
    </Suspense>
  )
}

export default ProfilePage
