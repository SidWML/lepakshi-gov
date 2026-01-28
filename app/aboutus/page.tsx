import { Suspense } from "react"
import ClusterMapPage from "../../components/ClusterMap/cluster-map"
import AboutUsPage from "../components/AboutUs/About-us"

export default function Aboutus() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUsPage />
    </Suspense>
  )
}