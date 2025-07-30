import HomePageIntro from "./components/HomePageIntro";
import HomePageHero from "./components/HomePageHero";
import HomePageEssenceOfPhotography from "./components/HomePageEssenceOfPhotography";
import Footer from "./components/Footer";
import ModalSharedLayout from "./components/UI/ModalSharedLayout";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <HomePageIntro />
      <HomePageEssenceOfPhotography />
      <ModalSharedLayout />
      <Footer />
    </>
  );
}
