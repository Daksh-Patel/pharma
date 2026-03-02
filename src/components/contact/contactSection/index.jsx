"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Globe } from "lucide-react"
import { useForm } from "react-hook-form"
import { Button } from "@/tailwind-components/ui/button"
import { Input } from "@/tailwind-components/ui/input"
import { Textarea } from "@/tailwind-components/ui/textarea"
import { Label } from "@/tailwind-components/ui/label"

export default function ContactSection() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className='py-20 bg-gray-100'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* LEFT SIDE */}
          <div className='space-y-8'>
            {/* Heading */}
            <div>
              <h2 className='text-xl font-semibold'>Head Office - Ahmedabad</h2>
              <div className='title_underline' />
            </div>

            <div className='space-y-6 text-gray-700'>
              <h3 className='text-xl font-semibold text-black'>
                Gristy Pharmaceuticals
              </h3>

              {/* Contact Person */}
              <div className='space-y-1'>
                <p className='font-bold'>Mrs. John</p>
                <p>Director</p>

                {/* Phone */}
                <div>
                  <Link
                    href='tel:1234567890'
                    className='inline-flex items-center gap-2 hover:text-primary transition'
                  >
                    <Phone size={18} />
                    1234567890
                  </Link>
                </div>

                {/* Email */}
                <div>
                  <Link
                    href='mailto:test@gmail.com'
                    className='inline-flex items-center gap-2 hover:text-primary transition'
                  >
                    <Mail size={18} />
                    test@gmail.com
                  </Link>
                </div>
              </div>

              <div className='space-y-1'>
                <p className='font-bold'>Mrs. Doe</p>
                <p>Director</p>

                {/* Phone */}

                <div>
                  <Link
                    href='tel:1234567890'
                    className='inline-flex items-center gap-2 hover:text-primary transition'
                  >
                    <Phone size={18} />
                    1234567890
                  </Link>
                </div>

                {/* Email */}
                <div>
                  <Link
                    href='mailto:test@gmail.com'
                    className='inline-flex items-center gap-2 hover:text-primary transition'
                  >
                    <Mail size={18} />
                    test@gmail.com
                  </Link>
                </div>
              </div>

              {/* Location */}
              <div className='space-y-2'>
                <p className='font-semibold'>Location</p>

                <div className='flex items-start gap-2'>
                  <MapPin size={18} className='mt-1' />
                  <span>
                    705-706, 7th Floor, Skyline Tower, <br />
                    SG Highway, Ahmedabad - 380015, <br />
                    Gujarat, India
                  </span>
                </div>
              </div>

              {/* Website */}
              <div className='space-y-2'>
                <p className='font-semibold'>Website</p>

                <Link
                  href='https://example.com'
                  target='_blank'
                  className='inline-flex items-center gap-2 hover:text-primary transition'
                >
                  <Globe size={18} />
                  www.example.com
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className='bg-white p-8 shadow-md rounded-md'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              {/* First + Last Name */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label>Your Name</Label>
                  <Input placeholder='Your Name *' {...register("firstName")} />
                </div>

                <div className='space-y-2'>
                  <Label>Last Name</Label>
                  <Input placeholder='Last Name *' {...register("lastName")} />
                </div>
              </div>

              {/* Email */}
              <div className='space-y-2'>
                <Label>Your Email</Label>
                <Input
                  type='email'
                  placeholder='Your Email *'
                  {...register("email")}
                />
              </div>

              {/* Company + Phone */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label>Company Name</Label>
                  <Input placeholder='Company Name' {...register("company")} />
                </div>

                <div className='space-y-2'>
                  <Label>Phone Number</Label>
                  <Input placeholder='Phone Number' {...register("phone")} />
                </div>
              </div>

              {/* Message */}
              <div className='space-y-2'>
                <Label>Your Message</Label>
                <Textarea
                  placeholder='Message'
                  className='min-h-30'
                  {...register("message")}
                />
              </div>

              {/* Submit */}
              <Button type='submit'>SUBMIT NOW</Button>
            </form>
          </div>
        </div>

        <div className='w-full h-125 mt-20'>
          <iframe
            src='https://www.google.com/maps?q=Empire+State+Building,+New+York&output=embed'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full h-full'
          ></iframe>
        </div>
      </div>
    </section>
  )
}
