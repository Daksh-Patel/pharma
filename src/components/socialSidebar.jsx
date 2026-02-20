"use client"

import { SocialsIcons } from "@/config/socialsIcons"
import Link from "next/link"

export default function SocialSidebar() {
  return (
    <div className='fixed left-0 top-1/2 -translate-y-1/2 z-50'>
      <div className='flex flex-col'>
        {SocialsIcons.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            target='_blank'
            className={`
              ${item.bg}
              w-12 h-12
              flex items-center justify-center
              text-white
              hover:w-14
              transition-all duration-300
              shadow-md
            `}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  )
}
