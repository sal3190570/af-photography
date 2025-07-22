import HomePageIntro from "./components/HomePageIntro";
import HomePageHero from "./components/HomePageHero";
import HomePageEssenceOfPhotography from "./components/HomePageEssenceOfPhotography";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <HomePageIntro />
      <HomePageEssenceOfPhotography />
    </>
  );
}
