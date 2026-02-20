"use client"
import Link from "next/link"
import React from "react"
import Logo from "../logo"
import HeaderMenu from "./header-menu"

const Header = () => {
  return (
    <header className='py-4'>
      <div className='container'>
        <div className='flex items-center justify-between space-x-4'>
          <Link href={"/"}>
            <Logo />
          </Link>

          <HeaderMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
