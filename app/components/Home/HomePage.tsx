// app/components/Home/HomePage.tsx
import Categories from "./Categories";
import Hero from "./Hero";
import NewsEvent from "./NewsEvents";
import Video from "./Video";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div className="mt-8 md:mt-12">
        <Categories />
      </div>
      <div className="mt-8 md:mt-12">
        <NewsEvent />
      </div>
      <div className="mt-8 md:mt-12">
        <Video />
      </div>
    </div>
  );
}