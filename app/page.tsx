import HomePageIntro from "./components/HomePageIntro";
import HomePageHero from "./components/HomePageHero";
import HomePageEssenceOfPhotography from "./components/HomePageEssenceOfPhotography";
import Footer from "./components/Footer";
import HomePageFollow from "./components/HomePageFollow";
import SignUpModal from "./components/UI/SignUpModal";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <HomePageIntro />
      <HomePageEssenceOfPhotography />
      <HomePageFollow />
      <SignUpModal />
      <Footer bg="bg-[#f5dec0]" />
    </>
  );
}
