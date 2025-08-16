import React from "react";
import PricingPageTitle from "../components/pricing/PricingPageTitle";
import PricingPageNewbornMaternity from "../components/pricing/PricingPageNewbornMaternity";
import Footer from "../components/Footer";
import PricingPageCouplesEngagement from "../components/pricing/PricingPageCouplesEngagment";

export default function page() {
  return (
    <>
      <PricingPageTitle />
      <PricingPageNewbornMaternity />
      <PricingPageCouplesEngagement />
      <Footer bg="bg-[#f5dec0]" />
    </>
  );
}
