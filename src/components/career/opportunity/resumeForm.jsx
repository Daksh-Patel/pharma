"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/tailwind-components/ui/button"
import { Input } from "@/tailwind-components/ui/input"
import { Textarea } from "@/tailwind-components/ui/textarea"
import { Label } from "@/tailwind-components/ui/label"

const ResumeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='bg-gray-100 p-8 rounded-md shadow-sm'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        {/* Name */}
        <div className='space-y-2'>
          <Label>Your Name</Label>
          <Input
            placeholder='Your Name *'
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className='text-sm text-red-500'>{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className='space-y-2'>
          <Label>Your Email</Label>
          <Input
            type='email'
            placeholder='Your Email *'
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className='text-sm text-red-500'>{errors.email.message}</p>
          )}
        </div>

        {/* Phone + Qualification */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <Label>Phone Number</Label>
            <Input placeholder='Phone Number' {...register("phone")} />
          </div>

          <div className='space-y-2'>
            <Label>Qualification</Label>
            <Input placeholder='Qualification' {...register("qualification")} />
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

        {/* File Upload */}
        <div className='space-y-2'>
          <Label>Upload Resume</Label>
          <Input type='file' {...register("resume")} />
        </div>

        {/* Submit Button */}
        <Button type='submit' className='w-full'>
          SUBMIT NOW
        </Button>
      </form>
    </div>
  )
}

export default ResumeForm
