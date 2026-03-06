"use client"

import { SocialsIcons } from "@/config/socialsIcons"
import Link from "next/link"

export default function SocialSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className='hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col'>
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

      {/* Mobile Bottom Bar */}
      <div className='md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50'>
        <div className='flex gap-3 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full shadow-lg'>
          {SocialsIcons.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target='_blank'
              className={`
                ${item.bg}
                w-10 h-10
                flex items-center justify-center
                text-white
                rounded-full
                shadow
              `}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
