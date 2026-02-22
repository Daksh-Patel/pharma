import HomeBanner from "@/components/banner"
import { Suspense } from "react"

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeBanner />
    </Suspense>
  )
}
