import HomeBanner from "@/components/home/banner"
import WelcomeSection from "@/components/home/welcome"
import NewArrivals from "@/components/home/new-arrival"
import { Suspense } from "react"
import Brochures from "@/components/home/brochures"
import OurRegisteredProduct from "@/components/home/registered-product"
import OurProduct from "@/components/home/our-product"
import GlobalPresence from "@/components/home/global-presence"

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeBanner />

      <WelcomeSection />

      <NewArrivals />

      <Brochures />

      <OurRegisteredProduct />

      <OurProduct />

      <GlobalPresence />
    </Suspense>
  )
}
