"use client";

import FAQSection from "@/components/modules/CommonLayout/Contact/LandingPage/FAQSection";
import FeaturesSection from "@/components/modules/CommonLayout/Contact/LandingPage/FeaturesSection";
import Footer from "@/components/modules/CommonLayout/Contact/LandingPage/Footer";
import HelperConnectSection from "@/components/modules/CommonLayout/Contact/LandingPage/HelperConnectSection";
import HeroSection from "@/components/modules/CommonLayout/Contact/LandingPage/HeroSection";
import TasksSection from "@/components/modules/CommonLayout/Contact/LandingPage/TasksSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TasksSection />
      <HelperConnectSection />
      <FAQSection />
      <Footer/>
    </div>
  );
};

export default HomePage;
