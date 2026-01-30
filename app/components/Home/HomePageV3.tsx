// app/components/Home/HomePageV3.tsx - Clean, Professional, Modern Design
import HeroV3 from "./v3/HeroV3";
import StatsV3 from "./v3/StatsV3";
import CategoriesV3 from "./v3/CategoriesV3";
import VideoV3 from "./v3/VideoV3";
import NewsEventsV3 from "./v3/NewsEventsV3";
import LeadersV3 from "./v3/LeadersV3";

export default function HomePageV3() {
  return (
    <div className="min-h-screen">
      {/* Clean, Professional V3 Design */}
      <HeroV3 />
      <div className="bg-white">
        <StatsV3 />
      </div>
      <div className="bg-[#F5ECE3]">
        <CategoriesV3 />
      </div>
            <div className="bg-[#F5ECE3]">
        <NewsEventsV3 />
      </div>
      <div className="bg-white">
        <VideoV3 />
      </div>

      <LeadersV3 />
    </div>
  );
}
