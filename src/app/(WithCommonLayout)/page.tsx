"use client";

import FeaturesSection from "@/components/modules/CommonLayout/Contact/LandingPage/FeaturesSection";
import HelperConnectSection from "@/components/modules/CommonLayout/Contact/LandingPage/HelperConnectSection";
import HeroSection from "@/components/modules/CommonLayout/Contact/LandingPage/HeroSection";
import TasksSection from "@/components/modules/CommonLayout/Contact/LandingPage/TasksSection";

const HomePage = () => {

  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <TasksSection/>
      <HelperConnectSection/>
    </div>
  );
};

export default HomePage;
