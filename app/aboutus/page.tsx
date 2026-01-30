import { Suspense } from "react"
import HeritagePage from "@/components/Heritage/heritage"

export default function Aboutus() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeritagePage />
    </Suspense>
  )
}