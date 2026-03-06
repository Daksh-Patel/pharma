"use client"

import Link from "next/link"
import React from "react"
import Logo from "../logo"
import HeaderMenu from "./header-menu"
import MobileMenu from "./mobile-menu"

const Header = () => {
  return (
    <header className='py-4 sticky w-full top-2 bg-white border-b z-50'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden xl:block'>
            <HeaderMenu />
          </div>

          {/* Mobile Menu */}
          <div className='xl:hidden'>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
