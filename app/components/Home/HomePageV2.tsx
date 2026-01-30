// app/components/Home/HomePageV2.tsx - Professional Design
import HeroV2 from "./v2/HeroV2";
import StatsV2 from "./v2/StatsV2";
import CategoriesV2 from "./v2/CategoriesV2";
import MeetArtisans from "./MeetArtisans";
import NewsEvent from "./NewsEvents";
import Video from "./Video";

export default function HomePageV2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Professional Version with Clean Design */}
      <HeroV2 />
      <StatsV2 />
      <CategoriesV2 />
      <MeetArtisans />
      <NewsEvent />
      <Video />
    </div>
  );
}
