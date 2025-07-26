import HomePageIntro from "./components/HomePageIntro";
import HomePageHero from "./components/HomePageHero";
import HomePageEssenceOfPhotography from "./components/HomePageEssenceOfPhotography";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <HomePageIntro />
      <HomePageEssenceOfPhotography />
      <Footer />
    </>
  );
}
