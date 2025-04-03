import Navbar from "@/components/modules/shared/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar/>
      <main className="min-h-screen container mx-auto">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default CommonLayout;
