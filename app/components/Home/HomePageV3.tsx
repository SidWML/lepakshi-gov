// app/components/Home/HomePageV3.tsx - Clean, Professional, Modern Design
import HeroV3 from "./v3/HeroV3";
import StatsV3 from "./v3/StatsV3";
import CategoriesV3 from "./v3/CategoriesV3";
import MeetArtisansV3 from "./v3/MeetArtisansV3";
import VideoV3 from "./v3/VideoV3";
import NewsEventsV3 from "./v3/NewsEventsV3";
import LeadersV3 from "./v3/LeadersV3";

export default function HomePageV3() {
  return (
    <div className="min-h-screen bg-white">
      {/* Clean, Professional V3 Design - Each section 100vh */}
      <HeroV3 />
      <StatsV3 />
      <CategoriesV3 />
      <MeetArtisansV3 />
      <VideoV3 />
      <NewsEventsV3 />
      <LeadersV3 />
    </div>
  );
}
