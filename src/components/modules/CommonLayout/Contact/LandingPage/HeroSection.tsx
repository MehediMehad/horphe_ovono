import Image from "next/image";
import HeroSectionImg from "../../../../../../public/Rectangle1.png";
import GooglePlay from "../../../../../../public/GooglePlay.png";
import Apple from "../../../../../../public/apple.png";

export default function HeroSection() {
  return (
    <section className="w-full py-8 md:pt-24 lg:pt-24 overflow-hidden mt-[73px]">
      <div className="max-w-[1200px] px-4 lg:px-0 mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col justify-center space-y-4] md:w-[50%]">
            <div>
              <p className="text-[#0C0C0C] text-sm md:text-[18px] leading-[120%] tracking-[-1.5%] font-medium">
                HELPER - Empowering Communities, One Task at a Time
              </p>
              <h1 className="font-semibold text-4xl md:text-[54px] leading-[110%] tracking-[-2%] align-middle">
                Find reliable helpers anything, anytime and anywhere!
              </h1>

              <p className="text-[#3D3D3D] mt-4 text-sm md:text-[18px] font-normal leading-[140%] tracking-[-1.5%] max-w-[513px]">
                Connecting needers with helpers for any task fast and hassle
                free. Enjoy secure, reliable, and on demand assistance whenever
                you need it!
              </p>
            </div>

            <div className="space-y-2 hidden md:block mt-8">
              <p className="text-[#3D3D3D] text-sm md:text-[18px] font-normal leading-[140%] tracking-[-1.5%] max-w-[513px]">
                Download on
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="inline-block">
                  <Image
                    src={GooglePlay}
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-12 w-auto"
                  />
                </a>
                <a href="#" className="inline-block">
                  <Image
                    src={Apple}
                    alt="Download on App Store"
                    width={135}
                    height={40}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-center lg:justify-between flex-1 relative">
            <div className="relative w-full md:max-h-[629px] rounded-3xl overflow-hidden">
              <Image
                src={HeroSectionImg}
                alt="HELPER App Interface"
                width={585}
                height={629}
                className="md:object-cover h-[500px] md:h-[629px] w-full"
              />
            </div>
            <div className="space-y-2 md:hidden">
              <p className="text-[#3D3D3D] text-sm md:text-[18px] font-normal leading-[140%] tracking-[-1.5%] max-w-[200px] md:max-w-[513px]">
                Download on
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="inline-block">
                  <Image
                    src={GooglePlay}
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="md:h-12 w-auto"
                  />
                </a>
                <a href="#" className="inline-block">
                  <Image
                    src={Apple}
                    alt="Download on App Store"
                    width={135}
                    height={40}
                    className="md:h-12 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
