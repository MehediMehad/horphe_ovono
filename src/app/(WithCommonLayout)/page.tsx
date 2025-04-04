"use client";

import FeaturesSection from "@/components/modules/CommonLayout/Contact/LandingPage/FeaturesSection";
import HeroSection from "@/components/modules/CommonLayout/Contact/LandingPage/HeroSection";
import TasksSection from "@/components/modules/CommonLayout/Contact/LandingPage/TasksSection";

const HomePage = () => {

  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <TasksSection/>
    </div>
  );
};

export default HomePage;
