import Image from "next/image";
import notFound from "../../../../public/notfound.png"
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