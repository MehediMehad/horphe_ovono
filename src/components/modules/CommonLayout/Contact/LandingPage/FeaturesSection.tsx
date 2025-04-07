import Image from "next/image";
import RequestDetailsScreen from "../../../../../../public/RequestDetailsScreen.png";
import LiveTrackingScreen from "../../../../../../public/LiveTrackingScreen.png";

export default function FeaturesSection() {

  return (
    <section id="feature" className="w-full mt-5 md:mt-20">
      <div className="max-w-[1200px] px-4 lg:px-0 md:max-h-[1200px] mx-auto">
        <div className="grid gap-6 md:grid-cols-2 mb-6">

          {/* Live Tracking Screen */}
          <div className="bg-[#EBEBEB] rounded-3xl text-[#0C0C0C]">
            <div className="flex flex-col items-center justify-center py-6">
              <h2 className="font-semibold text-[2rem] md:text-[3rem] leading-[100%] tracking-[-1%] text-center">
              Reliable Helpers
              </h2>
              <p className="font-medium text-[#5C5C5C] text-[18px] mt-3 leading-[120%] tracking-[-1.5%] text-center max-w-[364px]">
              Find the right helper, request instantly, and get tasks done—All without the hassle!
              </p>
            </div>
            <div className="relative max-w-[422px] mx-auto bg-stone-600 rounded-t-[20px]">
              <Image
                src={LiveTrackingScreen}
                alt="Live tracking screen showing helper's location"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Request Details Screen */}
          <div className="bg-[#EBEBEB] rounded-3xl text-[#0C0C0C]">
            <div className="flex flex-col items-center justify-center py-6">
              <h2 className="font-semibold text-[2rem] md:text-[3rem] leading-[100%] tracking-[-1%] text-center">
                Earn more by helping
              </h2>
              <p className="font-medium text-[#5C5C5C] text-[18px] mt-3 leading-[120%] tracking-[-1.5%] text-center max-w-[364px]">
                Sign up now and start receiving help requests from needers
                nearby!
              </p>
            </div>
            <div className="relative max-w-[422px] mx-auto bg-stone-600 rounded-t-[20px]">
              <Image
                src={RequestDetailsScreen}
                alt="Live tracking screen showing helper's location"
                width={560}
                height={560}
              />
            </div>
          </div>
        </div>

        {/* Video Section with Custom Play Button */}
        <div className="relative w-full aspect-[16/9] md:aspect-[22/10] rounded-3xl overflow-hidden">
        <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/EW_BZiZ1Es8?si=y45rK1SKnkRPjahM"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
        </div>
      </div>
    </section>
  );
}
