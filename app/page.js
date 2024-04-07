// 1. Logo, navigation bar, login/signup
// 2. Hero
//     1. Image
//     2. Video
// 3. As Featured in/Used by
// 4. How it works
// 5. Key Features (how it benefit you, what is the benefit)
// 6. List of Features(card)(full features)
// 7. FAQs
// 8. CTA
// 9. Footer
// 10. 404 pag

// import Image from "next/image";

import NavBarLanding from "@/app/_components/ui/NavBarLanding";

import Hero1 from "@/app/_components/Hero1";
import Hero2 from "@/app/_components/Hero2";
import Featured from "./_components/Featured";
import FooterBasic from "./_components/FooterBasic";
import UsedBy from "./_components/TrustedBy";
import HowItWorks from "./_components/HowItWorks";
import Pricing from "./_components/Pricing1";
import Pricing1 from "./_components/Pricing1";
export default function Home() {
  return (
    <>
      <NavBarLanding />
      <Hero1 />
      {/* <Hero2 /> */}
      <UsedBy />
      <Featured />
      <HowItWorks />
      {/* Features */}
      <Pricing1 />
      <FooterBasic />
    </>
  );
}
