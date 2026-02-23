"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

import ProductImage1 from "@/assets/images/Cinnerine.jpeg"
import ProductImage2 from "@/assets/images/Gastroprazole-40.jpeg"
import ProductImage3 from "@/assets/images/KINRAB.jpeg"
import ProductImage4 from "@/assets/images/PIP-Injection.jpeg"
import ProductImage5 from "@/assets/images/Val-S-200-2.jpg"
import { ChevronLeft, ChevronRight, CircleChevronRight } from "lucide-react"
import { Button } from "@/tailwind-components/ui/button"

const products = [
  { image: ProductImage1, title: "Cinnerine" },
  { image: ProductImage2, title: "Gastroprazole-40" },
  { image: ProductImage3, title: "Kinrab" },
  { image: ProductImage4, title: "PIP Injection" },
  { image: ProductImage5, title: "Val-S 200" },
]

export default function NewArrivals() {
  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    }),
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay.current],
  )

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className='py-20 bg-gray-100'>
      <div className='container mx-auto px-4'>
        {/* Title */}
        <div className='text-center mb-4 text-5xl font-extrabold'>
          New <span className='text-primary'>Arrivals</span>
        </div>

        <div className='title_center_underline mx-auto' />

        <div className='relative mt-10'>
          {/* Embla */}
          <div
            className='overflow-hidden max-w-325 mx-auto w-full'
            ref={emblaRef}
          >
            <div className='flex gap-3'>
              {products.map((product, index) => (
                <div
                  key={index}
                  className='
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  md:flex-[0_0_33.33%]
                  lg:flex-[0_0_25%]
                  min-w-0
                  '
                >
                  <div className=''>
                    <div className='relative w-full h-67.5'>
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className='object-contain'
                      />
                    </div>

                    <h2 className='mt-4 text-lg font-bold text-center'>
                      {product.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PREV */}
          <button
            onClick={scrollPrev}
            className='absolute left-0 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full border border-gray-300
            flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all delay-75'
          >
            <ChevronLeft />
          </button>

          {/* NEXT */}
          <button
            onClick={scrollNext}
            className='absolute right-0 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full border border-gray-300
            flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all delay-75'
          >
            <ChevronRight />
          </button>
        </div>

        <div className='flex items-center justify-center'>
          <Button className={"solidButton mt-12 rounded-sm"} size='lg'>
            Read More <CircleChevronRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
