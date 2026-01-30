import HomePage from "./components/Home/HomePage";
import HomePageV2 from "./components/Home/HomePageV2";
import HomePageV3 from "./components/Home/HomePageV3";
// import HomePageV2 from "./components/Home/HomePageV2";

export default function Page() {
  return (
    <>
      {/* <HomePage /> */}
      {/* Switch to v2 by uncommenting below and commenting above */}
      <HomePageV3 />
    </>
  );
}

