"use client"

import { ProductCategories } from "@/config/footerLink"
import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <footer className='w-full'>
      {/* Top Footer */}
      <div className='bg-[#304A2F] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10'>
          {/* CONTACT US */}
          <div className='relative md:pr-10 md:border-r md:border-white/20'>
            <FooterHeading title='CONTACT US' />

            <div className='space-y-6 mt-6 text-sm'>
              <div>
                <p className='font-semibold'>Mr. John Doe</p>
                <p className='text-white/80'>Director : Software Development</p>
                <p>
                  <span className='font-semibold'>M :</span>{" "}
                  <Link
                    href='tel:+911234567890'
                    className='hover:underline transition'
                  >
                    +91 12345 67890
                  </Link>{" "}
                  /{" "}
                  <Link
                    href='tel:+911234567890'
                    className='hover:underline transition'
                  >
                    +91 12345 67890
                  </Link>
                </p>
                <p>
                  <span className='font-semibold'>E :</span>{" "}
                  <Link
                    href='mailto:test@gmail.com'
                    className='hover:underline transition'
                  >
                    test@gmail.com
                  </Link>
                </p>
              </div>

              <div>
                <p className='font-semibold'>Mr. John Doe</p>
                <p className='text-white/80'>
                  Administration and Finance Department
                </p>
                <p>
                  <span className='font-semibold'>M :</span>{" "}
                  <Link
                    href='tel:+911234567890'
                    className='hover:underline transition'
                  >
                    +91 12345 67890
                  </Link>{" "}
                </p>
                <p>
                  <span className='font-semibold'>E :</span>{" "}
                  <Link
                    href='mailto:test@gmail.com'
                    className='hover:underline transition'
                  >
                    test@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* QUICK CONTACT */}
          <div className='relative md:px-10 md:border-r md:border-white/20'>
            <FooterHeading title='QUICK CONTACT' />

            <div className='space-y-5 mt-6 text-sm'>
              <div>
                <p className='font-semibold'>ADDRESS</p>
                <p className='text-white/80 leading-relaxed'>
                  123, 4th Floor, Skyline Business Center,
                  <br />
                  SG Highway, Satellite,
                  <br />
                  Ahmedabad-380015, Gujarat, India
                </p>
              </div>

              <div>
                <p className='font-semibold'>EMAIL</p>
                <p className='text-white/80'>
                  <Link
                    href='mailto:test@gmail.com'
                    className='hover:underline transition'
                  >
                    test@gmail.com
                  </Link>
                </p>
              </div>

              <div>
                <p className='font-semibold'>WEBSITE</p>
                <p className='text-white/80'>
                  <Link
                    href='https://www.google.com'
                    className='hover:underline transition'
                    target='_blank'
                  >
                    www.google.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* PRODUCT CATEGORIES */}
          <div className='md:pl-10'>
            <FooterHeading title='PRODUCT CATEGORIES' />

            <ul className='mt-6 space-y-2 text-sm text-white list-disc list-inside'>
              {ProductCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.href}
                    className='hover:underline transition font-medium'
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='bg-gray-200 text-gray-700 text-sm'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2'>
          <p className='uppercase'>
            COPYRIGHT © 2026{" "}
            <span className='font-semibold'>COMPANY NAME.</span> ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* Heading Component */
function FooterHeading({ title }) {
  return (
    <div className='relative pb-3'>
      <h3 className='font-semibold tracking-wide'>{title}</h3>

      {/* underline */}
      <div className='absolute left-0 bottom-0 h-0.5 w-full bg-white/30'>
        <div className='h-0.5 w-12 bg-[#28A745]'></div>
      </div>
    </div>
  )
}
