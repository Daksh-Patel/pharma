"use client"

import Link from "next/link"
import { CustomTooltip } from "./customTooltip"

export default function WhatsappFloat() {
  const phoneNumber = "911234567890" // change number
  const message = "Hello, I want to enquire"

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <CustomTooltip content='Chat on WhatsApp' side='left'>
        <Link
          href={whatsappURL}
          target='_blank'
          className='
            bg-[#25D366]
            hover:bg-[#20ba5a]
            w-14 h-14
            rounded-xl
            flex items-center justify-center
            shadow-lg hover:shadow-xl
            transition-all duration-300
            hover:scale-110
          '
        >
          {/* WhatsApp SVG */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            fill='white'
            className='w-7 h-7'
          >
            <path d='M16 .396C7.163.396 0 7.559 0 16.396c0 2.89.757 5.71 2.197 8.2L.057 32l7.58-2.087A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16.396C32 7.559 24.837.396 16 .396zm0 29.164c-2.548 0-5.045-.685-7.227-1.98l-.517-.307-4.5 1.238 1.202-4.386-.336-.538a13.39 13.39 0 0 1-2.048-7.19c0-7.41 6.016-13.426 13.426-13.426s13.426 6.016 13.426 13.426S23.41 29.56 16 29.56zm7.348-9.937c-.402-.201-2.376-1.173-2.744-1.306-.368-.134-.636-.201-.904.201-.268.402-1.038 1.306-1.273 1.574-.234.268-.469.302-.871.101-.402-.201-1.698-.626-3.235-1.995-1.195-1.067-2.003-2.385-2.237-2.787-.234-.402-.025-.619.176-.82.18-.179.402-.469.603-.703.201-.234.268-.402.402-.67.134-.268.067-.503-.033-.703-.101-.201-.904-2.177-1.239-2.98-.326-.783-.658-.676-.904-.689l-.771-.013c-.268 0-.703.101-1.071.503-.368.402-1.407 1.374-1.407 3.348s1.44 3.881 1.64 4.149c.201.268 2.833 4.327 6.869 6.064.96.414 1.709.661 2.293.846.964.306 1.843.263 2.537.159.774-.116 2.376-.971 2.711-1.908.335-.937.335-1.739.234-1.908-.1-.168-.368-.268-.77-.469z' />
          </svg>
        </Link>
      </CustomTooltip>
    </div>
  )
}
