import Footer from "./components/Footer";
import HomePageEssenceOfPhotography from "./components/home/HomePageEssenceOfPhotography";
import HomePageFollow from "./components/home/HomePageFollow";
import HomePageHero from "./components/home/HomePageHero";
import HomePageIntro from "./components/home/HomePageIntro";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <HomePageIntro />
      <HomePageEssenceOfPhotography />
      <HomePageFollow />
      <Footer bg="bg-[#f5dec0]" />
    </>
  );
}
