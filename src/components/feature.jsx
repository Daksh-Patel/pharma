"use client"

import { CheckCircle } from "lucide-react"
import React from "react"

const Feature = ({ text }) => {
  return (
    <div className='flex items-start gap-3 border rounded-sm px-5 py-3'>
      <CheckCircle className='text-primary w-5 h-5 mt-1' />
      <p className='text-gray-700'>{text}</p>
    </div>
  )
}

export default Feature
