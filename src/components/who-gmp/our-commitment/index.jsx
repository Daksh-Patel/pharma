"use client"

import React from "react"
import RegulatoryImg from "@/assets/images/Regulatory-Affairs.jpg"
import QualityImg from "@/assets/images/Regulatory-Affairs.jpg"
import VisionImg from "@/assets/images/Regulatory-Affairs.jpg"
import WhoGmpSection from "./whoGmpSection"

const OurCommitment = () => {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='container space-y-12'>
        {/* Our Commitment */}
        <WhoGmpSection
          title='Our Commitment to Excellence'
          paragraphs={[
            "At Gristy Pharma, quality is our top priority. We follow global standards and strict quality control at every step.",
            "We have a strong Quality Management System guiding our processes and ensuring high standards in every product.",
          ]}
        />

        {/* Approved Facilities */}
        <WhoGmpSection
          title='WHO-GMP Approved Pharmaceutical Facilities'
          paragraphs={[
            "Gristy Pharma was founded to provide innovative medicines and essential healthcare products with top-notch quality control.",
            "As one of India’s leading WHO-GMP certified companies, we have earned a strong reputation as a reliable pharma exporter.",
          ]}
        />

        {/* Manufacturing Facility */}
        <WhoGmpSection
          title='WHO-GMP Manufacturing Facility'
          paragraphs={[
            "Our WHO-GMP approved plant in Gujarat is built to meet global standards.",
            "Equipped with advanced HVAC systems and modern production technology, we maintain strict quality control at every stage.",
            "We manufacture tablets, capsules, syrups, powders, gels, creams, and ointments.",
          ]}
        />

        {/* Regulatory Affairs - With Image */}
        <WhoGmpSection
          title='Regulatory Affairs'
          paragraphs={[
            "Our Regulatory Affairs team has strong experience in handling global regulations.",
            "They manage product registrations and ensure compliance with international standards worldwide.",
          ]}
          image={RegulatoryImg}
        />

        {/* Quality Management - With Image */}
        <WhoGmpSection
          title='Quality Management'
          paragraphs={[
            "Delivering exceptional quality is at the core of our operations.",
            "We monitor strict quality control throughout the product life cycle, ensuring compliance and safety.",
            "Our commitment to Good Manufacturing Practices guarantees customer satisfaction.",
          ]}
          image={QualityImg}
        />

        {/* Assurance */}
        <WhoGmpSection
          title='Assurance'
          paragraphs={[
            "Our Quality Assurance team monitors every stage of production.",
            "Regular training ensures our team consistently upholds international safety and quality standards.",
          ]}
        />

        {/* Control */}
        <WhoGmpSection
          title='Control'
          paragraphs={[
            "Our Quality Control department uses precise testing methods and modern technology.",
            "Every aspect is closely monitored to deliver safe and reliable medicines.",
          ]}
        />

        {/* Policy */}
        <WhoGmpSection
          title='Policy'
          paragraphs={[
            "We are dedicated to continuous improvement.",
            "Our goal is 100% customer satisfaction by delivering consistent quality that meets global standards.",
          ]}
        />

        {/* Mission & Vision - With Image */}
        <WhoGmpSection
          title='Our Mission and Vision'
          paragraphs={[
            "Gristy Pharma is built on three pillars: customers, products, and employees.",
            "Our mission is to ensure profitable growth for our customers.",
            "Our vision is to be globally recognized as a reliable pharma export partner.",
          ]}
          image={VisionImg}
        />
      </div>
    </section>
  )
}

export default OurCommitment
