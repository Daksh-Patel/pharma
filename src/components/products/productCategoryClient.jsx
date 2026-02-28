"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

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
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ])

  const scrollPrev = () => {
    emblaApi?.scrollPrev()
  }

  const scrollNext = () => {
    emblaApi?.scrollNext()
  }

  return (
    <div>
      {/* SLIDER */}
      <div className='relative overflow-hidden rounded-lg mb-8'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {category.bannerImages.map((img, i) => (
              <div key={i} className='flex-[0_0_100%] relative h-87.5'>
                <Image src={img} alt='banner' fill className='object-cover' />
              </div>
            ))}
          </div>
        </div>

        {/* PREV BUTTON */}
        <button
          onClick={scrollPrev}
          className='absolute left-5 top-1/2 -translate-y-1/2 z-30
          w-14 h-14 rounded-full
          bg-black/30 hover:bg-black/50
          backdrop-blur-md
          flex items-center justify-center'
        >
          <svg width='24' height='24' stroke='white' fill='none'>
            <path d='M15 19l-7-7 7-7' strokeWidth='2' />
          </svg>
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={scrollNext}
          className='absolute right-5 top-1/2 -translate-y-1/2 z-30
          w-14 h-14 rounded-full
          bg-black/30 hover:bg-black/50
          backdrop-blur-md
          flex items-center justify-center'
        >
          <svg width='24' height='24' stroke='white' fill='none'>
            <path d='M9 5l7 7-7 7' strokeWidth='2' />
          </svg>
        </button>
      </div>

      {/* TITLE */}
      <h2 className='text-2xl font-bold text-primary mb-6'>{category.title}</h2>

      {/* TABLE */}
      <Table className={"max-h-100 overflow-auto"}>
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

      <Button className={"mt-5 flex w-full ml-auto max-w-40"}>
        Send Inquiry <Send />
      </Button>
    </div>
  )
}
