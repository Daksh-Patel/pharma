"use client"

import ReuseBannerSection from "@/components/reuse-banner"
import { productCategories } from "@/config/productCategories"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ProductsLayout({ children }) {
  const pathname = usePathname()

  // Extract slug
  const slug = pathname.split("/")[2]

  // Find matching category
  const currentCategory = productCategories.find((cat) => cat.slug === slug)

  // Decide title
  const bannerTitle = currentCategory ? currentCategory.title : "Our Products"

  return (
    <>
      <ReuseBannerSection title={bannerTitle} />

      <section className='py-20'>
        <div className='container flex gap-10'>
          {/* LEFT SIDEBAR */}
          <div className='w-1/4 sticky top-32 h-fit bg-gray-100 p-6 rounded-lg'>
            <h2 className='text-xl font-bold mb-6'>Product Categories</h2>

            <ul className='space-y-2'>
              {productCategories.map((cat) => {
                const active = pathname.includes(cat.slug)

                return (
                  <li key={cat.slug}>
                    <Link
                      href={`/products/${cat.slug}`}
                      className={`block px-4 py-3 rounded-md transition ${
                        active
                          ? "bg-primary text-white"
                          : "bg-white hover:bg-gray-200"
                      }`}
                    >
                      {cat.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className='w-3/4'>{children}</div>
        </div>
      </section>
    </>
  )
}
