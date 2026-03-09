"use client"

import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { useForm } from "react-hook-form"
import { Button } from "@/tailwind-components/ui/button"
import { Input } from "@/tailwind-components/ui/input"
import { Textarea } from "@/tailwind-components/ui/textarea"
import { Label } from "@/tailwind-components/ui/label"

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const subject = data.subject

    const body = `
          Name: ${data.firstName} ${data.lastName}
          Email: ${data.email}
          Phone: ${data.phone}
          Company: ${data.company}
          Message:
          ${data.message}
        `

    const mailtoLink = `mailto:info@gristypharma.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink

    reset()
  }

  return (
    <section className='py-20 bg-gray-100'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* LEFT SIDE */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-xl font-semibold'>Head Office - Ahmedabad</h2>
              <div className='title_underline' />
            </div>

            <div className='space-y-6 text-gray-700'>
              <h3 className='text-xl font-semibold text-black'>
                Gristy Pharma
              </h3>

              <div className='space-y-1'>
                <p className='font-bold'>Mr. Bhavesh</p>

                <div>
                  <Link href='tel:+918780867942' className='hover:underline'>
                    +91 87808 67942
                  </Link>{" "}
                  /{" "}
                  <Link href='tel:+919664667942' className='hover:underline'>
                    +91 96646 67942
                  </Link>
                </div>

                <div>
                  <Link
                    href='mailto:info@gristypharma.com'
                    className='inline-flex items-center gap-2 hover:text-primary'
                  >
                    <Mail size={18} />
                    info@gristypharma.com
                  </Link>
                </div>
              </div>

              <div className='space-y-2'>
                <p className='font-semibold'>Location</p>

                <div className='flex items-start gap-2'>
                  <MapPin size={18} className='mt-1' />
                  <span>
                    Gristy Pharma Pvt Ltd <br />
                    F-105, Shreem Maxima <br />
                    Near National Handloom, Opp. Angle Arcade <br />
                    Nikol, Ahmedabad
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className='bg-white p-8 shadow-md rounded-md'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              {/* Name */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label>Your Name</Label>
                  <Input
                    placeholder='First Name *'
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className='text-red-500 text-sm'>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Label>Last Name</Label>
                  <Input
                    placeholder='Last Name *'
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className='text-red-500 text-sm'>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className='space-y-2'>
                <Label>Email</Label>
                <Input
                  type='email'
                  placeholder='Email *'
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className='text-red-500 text-sm'>{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div className='space-y-2'>
                <Label>Subject</Label>
                <Input
                  placeholder='Subject *'
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                />
                {errors.subject && (
                  <p className='text-red-500 text-sm'>
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Company + Phone */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label>Company Name</Label>
                  <Input
                    placeholder='Company Name *'
                    {...register("company", {
                      required: "Company name is required",
                    })}
                  />
                  {errors.company && (
                    <p className='text-red-500 text-sm'>
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Label>Phone</Label>
                  <Input
                    placeholder='Phone Number *'
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter valid 10 digit phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className='text-red-500 text-sm'>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className='space-y-2'>
                <Label>Message</Label>
                <Textarea
                  placeholder='Your message *'
                  className='min-h-32'
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                {errors.message && (
                  <p className='text-red-500 text-sm'>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button type='submit' className='w-full'>
                SUBMIT NOW
              </Button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className='w-full h-125 mt-20'>
          <iframe
            src='https://www.google.com/maps?q=Ahmedabad&output=embed'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            loading='lazy'
            className='w-full h-full'
          />
        </div>
      </div>
    </section>
  )
}
