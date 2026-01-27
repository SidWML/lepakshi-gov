// app/components/Home/HomePage.tsx
import Categories from "./Categories";
import Hero from "./Hero";
import NewsEvent from "./NewsEvents";
import Video from "./Video";
import Stats from "./Stats";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Hero />
      <Stats />
      <Categories />
      <NewsEvent />
      <Video />
    </div>
  );
}