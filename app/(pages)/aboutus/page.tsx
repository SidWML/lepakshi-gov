import AboutUsPage from "@/app/components/AboutUs/About-us"
import { Suspense } from "react"
//page for about us
export default function Aboutus() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUsPage />
    </Suspense>
  )
}