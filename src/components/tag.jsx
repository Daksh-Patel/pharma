"use client"

import React from "react"

const Tag = ({ text }) => {
  return (
    <span className='border rounded-sm px-4 py-2 text-sm bg-gray-50'>
      {text}
    </span>
  )
}

export default Tag
