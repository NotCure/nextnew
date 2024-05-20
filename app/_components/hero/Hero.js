// Hero.js
"use client";
import HeroText from "./HeroText";
import HeroCards from "./HeroCards/HeroCards";

import EmblaCarousel from "./HeroCards/Caroussel";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const cardsData = [
  { number: "01", title: "Traffic", buttonText: "Visit" },
  { number: "02", title: "Theft", buttonText: "Explore" },
  { number: "03", title: "Requests", buttonText: "Check Out" },
  { number: "04", title: "appointments", buttonText: "Engage" },
  { number: "05", title: "Engagement", buttonText: "Engage" },
];

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <HeroText />

        <div className="sm:hidden pt-40">
          {" "}
          {/* sm:hidden hides on screens larger than small */}
          <EmblaCarousel slides={cardsData} />
        </div>
      </div>
    </>
  );
};

export default Hero;
