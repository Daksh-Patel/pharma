"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useRef, useState, useEffect } from "react"

import ProductImage1 from "@/assets/images/cafixime.png"
import ProductImage2 from "@/assets/images/gristy_cv6251.png"
import ProductImage3 from "@/assets/images/cefpodoxime.png"
import ProductImage4 from "@/assets/images/methylcobalamin1.png"
import ProductImage5 from "@/assets/images/aceclofenac.png"
import ProductImage6 from "@/assets/images/esomeprazole.png"

import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/tailwind-components/ui/button"

const products = [
  { image: ProductImage1, title: "Cefosty-Plus" },
  { image: ProductImage2, title: "Gristy-CV 625" },
  { image: ProductImage3, title: "GR POD" },
  { image: ProductImage4, title: "12Vita-MD" },
  { image: ProductImage5, title: "GM-Para SP" },
  { image: ProductImage6, title: "Esysty-DSR" },
]

export default function NewArrivals() {
  const [index, setIndex] = useState(0)

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

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()
  const scrollTo = (i) => emblaApi?.scrollTo(i)

  return (
    <section className='py-14 md:py-20 bg-white'>
      <div className='container'>
        {/* Title */}
        <div className='text-center mb-4 text-3xl md:text-4xl font-bold'>
          New <span className='text-primary'>Arrivals</span>
        </div>

        <div className='title_center_underline mx-auto' />

        <div className='relative mt-10'>
          {/* Embla */}
          <div
            className='overflow-hidden max-w-325 mx-auto w-full'
            ref={emblaRef}
          >
            <div className='flex -mx-2'>
              {products.map((product, i) => (
                <div
                  key={i}
                  className='flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0 px-2'
                >
                  <div className='bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition'>
                    <div className='relative w-full h-60'>
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className='object-contain'
                      />
                    </div>

                    <h2 className='mt-2 text-lg font-bold text-center'>
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
            className='absolute -left-6 md:-left-10 lg:-left-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 hidden items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all xl:flex'
          >
            <ChevronLeft />
          </button>

          {/* NEXT */}
          <button
            onClick={scrollNext}
            className='absolute -right-6 md:-right-10 lg:-right-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 hidden items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all xl:flex'
          >
            <ChevronRight />
          </button>

          {/* DOTS */}
          <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3'>
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-primary w-8 md:w-10"
                    : "bg-foreground/30 hover:bg-foreground/50 w-2 md:w-3"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Read More */}
        {/* <div className='flex items-center justify-center'>
          <Button className='solidButton mt-16 rounded-sm' size='lg'>
            Read More <CircleChevronRight />
          </Button>
        </div> */}
      </div>
    </section>
  )
}
