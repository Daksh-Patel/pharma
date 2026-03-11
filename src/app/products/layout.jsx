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

      <section className='py-12 md:py-16 lg:py-20'>
        <div className='container'>
          {/* MOBILE CATEGORY SCROLL */}
          <div className='lg:hidden mb-8 overflow-x-auto'>
            <div className='flex gap-3 min-w-max'>
              {productCategories.map((cat) => {
                const active = pathname.includes(cat.slug)

                return (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    className={`px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium transition ${
                      active
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {cat.title}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className='flex flex-col lg:flex-row gap-8 lg:gap-10'>
            {/* SIDEBAR */}
            <div className='hidden lg:block lg:w-1/4 sticky top-32 h-fit bg-gray-100 p-6 rounded-lg'>
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

            {/* CONTENT */}
            <div className='lg:w-3/4 w-full'>{children}</div>
          </div>
        </div>
      </section>
    </>
  )
}
