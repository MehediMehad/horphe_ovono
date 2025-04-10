import Image from "next/image";
import notFound from "../../../../public/notfound.png"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Helper App",
  description:
    "Explore career opportunities at Helper App. Currently, there are no available positions, but check back later for new openings.",
}
const CareersPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
            src={notFound}
            alt="No available position"
            width={87}
            height={87}
            className="mb-4"
        />
        <p className="font-semibold text-[1.5rem] text-[#3D3D3D]">No available position at this time</p>
      </div>
    );
  };
  
  export default CareersPage;