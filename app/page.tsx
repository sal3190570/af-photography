import HomePageIntro from "./components/HomePageIntro";
import HomePageHero from "./components/HomePageHero";
import HomePageEssenceOfPhotography from "./components/HomePageEssenceOfPhotography";
import Footer from "./components/Footer";
import HomePageFollow from "./components/HomePageFollow";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <HomePageIntro />
      <HomePageEssenceOfPhotography />
      <HomePageFollow />
      <Footer />
    </>
  );
}
