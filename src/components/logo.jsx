"use client"

import Image from "next/image"
import React from "react"
import LogoImage from "@/assets/images/Gristy_Pharma.jpg"

const Logo = () => {
  return (
    <Image
      src={LogoImage}
      alt='Gristy Pharma Logo'
      priority
      className='w-24 sm:w-28 md:w-32 lg:w-36 h-auto'
    />
  )
}

export default Logo
