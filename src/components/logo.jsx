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
      className='w-20 sm:w-24 md:w-24 h-auto'
      placeholder='blur'
    />
  )
}

export default Logo
