// app/components/Home/HomePage.tsx
import Categories from "./Categories";
import Hero from "./Hero";
import NewsEvent from "./NewsEvents";
import Video from "./Video";
import Stats from "./Stats";
import MeetArtisans from "./MeetArtisans";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5DEB3] via-[#FFE4B5] to-[#F5DEB3]">
      <Hero />
      <Stats />
      <Categories />
      <MeetArtisans />
      <NewsEvent />
      <Video />
    </div>
  );
}