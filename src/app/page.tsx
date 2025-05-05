import React from "react";

import SectionContainer from "@/components/layout/SectionContainer";
import AboutSection from "@/components/pages/home/AboutSection";
import CallToActionSection from "@/components/pages/home/CallToActionSection";
import HeroGeneratorSection from "@/components/pages/home/HeroGeneratorSection";

/**
 * Home page component.
 * Renders the main sections of the homepage.
 *
 * @returns {React.JSX.Element} The rendered homepage.
 */
function Home(): React.JSX.Element {
  return (
    <SectionContainer>
      <HeroGeneratorSection />

      <AboutSection />

      <CallToActionSection />
    </SectionContainer>
  );
}

export default Home;
