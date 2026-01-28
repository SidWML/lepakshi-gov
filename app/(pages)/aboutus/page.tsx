import AboutUsPage from "@/app/components/AboutUs/About-us"
import { Suspense } from "react"

export default function Aboutus() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUsPage />
    </Suspense>
  )
}