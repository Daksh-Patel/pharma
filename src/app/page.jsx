import HomeBanner from "@/components/home/banner"
import WelcomeSection from "@/components/home/welcome"
import NewArrivals from "@/components/home/new-arrival"
import { Suspense } from "react"

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeBanner />

      <WelcomeSection />

      <NewArrivals />
    </Suspense>
  )
}
