import { DM_Sans  } from "next/font/google"
import Navbar from "@/components/modules/shared/Navbar";
import React from "react";

// Import the DM_Sans font
const dmSans = DM_Sans({
    subsets: ['latin'], // You can adjust subsets if needed
    weight: ['400', '500', '700'], // You can include other weights if you need
  });

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={dmSans.className}>  {/* Apply the font class globally */}
      <Navbar/>
      <main className="min-h-screen  mx-auto">{children}</main>
    </div>
  );
};

export default CommonLayout;
