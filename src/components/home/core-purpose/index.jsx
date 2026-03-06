"use client"

import React from "react"
import {
  CheckCircle2,
  Globe,
  Award,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react"
import { Card, CardContent } from "@/tailwind-components/ui/card"

const PurposeLists = [
  {
    icon: Users,
    title: "Customers",
    description: "Our mission is to ensure profitable growth for our customers",
  },
  {
    icon: Award,
    title: "Products",
    description:
      "Delivering exceptional quality that meets the highest global standards",
  },
  {
    icon: TrendingUp,
    title: "Employees",
    description:
      "Empowering our team to drive innovation and excellence every day",
  },
]

export default function CorePurposeSection() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Core Pillars Section */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>
              Our Core Purpose & Future Vision
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Gristy Pharma is built on three pillars: customers, products, and
              employees
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {PurposeLists.map((pillar, index) => (
              <Card
                key={index}
                className='group hover:shadow-2xl transition-all duration-500 border-border bg-card hover:-translate-y-2 p-0'
              >
                <CardContent className='p-6'>
                  <div className='w-16 h-16 rounded-md border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <pillar.icon className='w-8 h-8 text-black' />
                  </div>
                  <h3 className='text-2xl font-bold text-primary mb-3'>
                    {pillar.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Vision Statement */}
          <div className='bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl p-12 text-center'>
            <Globe className='w-16 h-16 text-primary mx-auto mb-6' />
            <h3 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>
              Our Vision
            </h3>
            <p className='text-xl lg:text-2xl text-foreground font-light leading-relaxed max-w-3xl mx-auto'>
              To be globally recognized as a{" "}
              <span className='text-primary font-semibold'>
                reliable pharma export partner
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Quality & Excellence Section */}
      <section className='py-20 bg-muted/30'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>
              Excellence in Every Detail
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Our commitment to quality drives everything we do
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-8'>
            {/* Passion for Excellence */}
            <Card className='group hover:shadow-2xl transition-all duration-500 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:-translate-y-1'>
              <CardContent className='p-10'>
                <div className='w-14 h-14 rounded-md border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <Shield className='w-7 h-7 text-black' />
                </div>
                <h3 className='text-2xl font-bold text-primary mb-4'>
                  Our Passion for Excellence
                </h3>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  At Gristy Pharma, quality is at the core of everything we do.
                  We adhere to global standards and implement stringent quality
                  control measures at every stage of our operations.
                </p>
                <div className='bg-primary/5 rounded-lg p-4 border border-primary/10'>
                  <p className='text-sm text-foreground font-medium'>
                    Our robust Quality Management System (QMS) governs all
                    processes, ensuring consistency, compliance, and excellence
                    in every product we deliver.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Regulatory Assistant */}
            <Card className='group hover:shadow-2xl transition-all duration-500 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:-translate-y-1'>
              <CardContent className='p-10'>
                <div className='w-14 h-14 rounded-md border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <Globe className='w-7 h-7 text-black' />
                </div>
                <h3 className='text-2xl font-bold text-primary mb-4'>
                  Regulatory Excellence
                </h3>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  Our Regulatory Affairs team brings extensive expertise in
                  navigating global regulatory frameworks.
                </p>
                <div className='space-y-3'>
                  <div className='flex items-start gap-3'>
                    <CheckCircle2 className='w-5 h-5 text-primary mt-1 flex-shrink-0' />
                    <p className='text-sm text-foreground'>
                      Oversee product registrations across diverse markets
                      worldwide
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <CheckCircle2 className='w-5 h-5 text-primary mt-1 flex-shrink-0' />
                    <p className='text-sm text-foreground'>
                      Ensure full compliance with international standards
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Excellence Framework - Full Width */}
            <Card className='lg:col-span-2 group hover:shadow-2xl transition-all duration-500 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:-translate-y-1'>
              <CardContent className='p-10'>
                <div className='flex flex-col lg:flex-row gap-8 items-start'>
                  <div className='w-14 h-14 rounded-md border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                    <Award className='w-7 h-7 text-black' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold text-primary mb-4'>
                      Quality Excellence Framework
                    </h3>
                    <p className='text-muted-foreground leading-relaxed mb-6'>
                      Delivering exceptional quality lies at the heart of our
                      operations. We implement rigorous quality control measures
                      throughout the entire product lifecycle, ensuring the
                      highest standards of safety, compliance, and reliability.
                    </p>
                    <div className='bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20'>
                      <p className='text-foreground font-medium mb-2'>
                        Good Manufacturing Practices (GMP)
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Our steadfast adherence to Good Manufacturing Practices
                        (GMP) reflects our commitment to excellence and
                        consistently guarantees customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
