"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { useRouter } from "next/navigation"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/tailwind-components/ui/table"

import { Button } from "@/tailwind-components/ui/button"
import { Send } from "lucide-react"

export default function ProductCategoryClient({ category }) {
  const router = useRouter()
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  const handleRouteContactUs = () => {
    router.push("/contact")
  }

  return (
    <div>
      {/* SLIDER */}
      <div className='relative overflow-hidden rounded-lg mb-6 md:mb-8'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {category.bannerImages.map((img, i) => (
              <div
                key={i}
                className='flex-[0_0_100%] relative h-52 sm:h-64 md:h-80 lg:h-[420px]'
              >
                <Image src={img} alt='banner' fill className='object-cover' />
              </div>
            ))}
          </div>
        </div>

        {/* PREV */}
        <button
          onClick={scrollPrev}
          className='absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-30
          w-9 h-9 md:w-12 md:h-12
          rounded-full
          bg-black/30 hover:bg-black/50
          backdrop-blur-md
          flex items-center justify-center'
        >
          <svg width='20' height='20' stroke='white' fill='none'>
            <path d='M15 19l-7-7 7-7' strokeWidth='2' />
          </svg>
        </button>

        {/* NEXT */}
        <button
          onClick={scrollNext}
          className='absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-30
          w-9 h-9 md:w-12 md:h-12
          rounded-full
          bg-black/30 hover:bg-black/50
          backdrop-blur-md
          flex items-center justify-center'
        >
          <svg width='20' height='20' stroke='white' fill='none'>
            <path d='M9 5l7 7-7 7' strokeWidth='2' />
          </svg>
        </button>
      </div>

      {/* TITLE */}
      <h2 className='text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6'>
        {category.title}
      </h2>

      {/* TABLE SCROLL WRAPPER */}
      <div className='w-full overflow-x-auto'>
        <Table className='min-w-[600px]'>
          <TableHeader>
            <TableRow>
              <TableHead>Sr No</TableHead>
              <TableHead>Generic Name</TableHead>
              <TableHead>Strengths</TableHead>
              <TableHead>Dosage Form</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {category.products.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.strength}</TableCell>
                <TableCell>{item.form}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* BUTTON */}
      <Button
        className='mt-6 w-full sm:w-auto sm:min-w-40'
        onClick={handleRouteContactUs}
      >
        Send Inquiry <Send className='ml-2 w-4 h-4' />
      </Button>
    </div>
  )
}
