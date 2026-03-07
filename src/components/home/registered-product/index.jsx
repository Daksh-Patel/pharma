"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef, useState } from "react"

import ProductImage1 from "@/assets/images/cafixime.png"
import ProductImage2 from "@/assets/images/gristy_cv6251.png"
import ProductImage3 from "@/assets/images/cefpodoxime.png"
import ProductImage4 from "@/assets/images/methylcobalamin1.png"
import ProductImage5 from "@/assets/images/aceclofenac.png"
import ProductImage6 from "@/assets/images/esomeprazole.png"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  { image: ProductImage1, title: "Cefosty-Plus" },
  { image: ProductImage2, title: "Gristy-CV 625" },
  { image: ProductImage3, title: "GR POD" },
  { image: ProductImage4, title: "12Vita-MD" },
  { image: ProductImage5, title: "GM-Para SP" },
  { image: ProductImage6, title: "Esysty-DSR" },
]

export default function OurRegisteredProduct() {
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

  /* Update active dot when slide changes */
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
    <section className='py-20 bg-gray-100'>
      <div className='container mx-auto px-4'>
        {/* Title */}
        <h2 className='text-center mb-4 text-4xl font-bold'>
          Our <span className='text-primary'>Registered Products</span>
        </h2>

        <div className='title_center_underline mx-auto' />

        <div className='relative mt-10'>
          {/* Embla */}
          <div
            className='overflow-hidden max-w-325 mx-auto w-full'
            ref={emblaRef}
          >
            <div className='flex -mx-2'>
              {products.map((product, index) => (
                <div
                  key={index}
                  className='
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  md:flex-[0_0_33.33%]
                  lg:flex-[0_0_25%]
                  min-w-0
                  px-4
                  '
                >
                  <div className=''>
                    <div className='relative w-full h-60'>
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
            className='
            absolute -left-6 md:-left-10 lg:-left-14
            top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full border border-gray-300
            hidden items-center justify-center
            hover:bg-primary hover:text-white hover:border-primary
            transition-all
            xl:flex
            '
          >
            <ChevronLeft />
          </button>

          {/* NEXT */}
          <button
            onClick={scrollNext}
            className='
            absolute -right-6 md:-right-10 lg:-right-14
            top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full border border-gray-300
            hidden items-center justify-center
            hover:bg-primary hover:text-white hover:border-primary
            transition-all
            xl:flex
            '
          >
            <ChevronRight />
          </button>

          {/* DOTS */}
          <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3'>
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-primary w-8 md:w-10"
                    : "bg-foreground/30 hover:bg-foreground/50 w-2 md:w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
