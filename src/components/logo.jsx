"use client"

import Image from "next/image"
import React from "react"
import LogoImage from "@/assets/images/Gristy_Pharma.jpg"

const Logo = () => {
  return (
    <Image
      src={LogoImage}
      alt='Gristy Pharma Logo'
      width={120} // adjust size
      height={40}
      priority
    />
  )
}

export default Logo
