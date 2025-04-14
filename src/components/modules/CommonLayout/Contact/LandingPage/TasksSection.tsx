import Image from "next/image";
import TasksSectionImg from "../../../../../../public/TasksSection.png";
import GooglePlay from "../../../../../../public/GooglePlay.png";
import Apple from "../../../../../../public/apple.png";
import RecentActivity from "../../../../../../public/RecentActivity.png";

export default function TasksSection() {
  return (
    <section className="w-full mt-5 md:mt-16">
      {/* Dark section - Making Tasks Easier */}
      <div className="bg-[#0C0C0C]">
        <div className="bg-[#0C0C0C] max-w-[1400px] px-4 lg:px-0 mx-auto w-full flex items-center py-14 md:h-[772px] text-white">
          <div className="w-full max-w-[1200px] px-4 md:px-0 mx-auto md:h-[580px] flex">
            <div className="w-full flex flex-col md:flex-row items-center gap-8 mx-auto">
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden max-w-md mx-auto md:mx-0">
                  <Image
                    src={TasksSectionImg}
                    alt="People loading items into a car"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:w-[30.4375rem]">
                  Making Tasks Easier for Everyone
                </h2>
                <p className="text-[#E9E9E9] mb-6 max-w-md mx-auto md:mx-0">
                  Finding reliable help should be simple and stress-free. Our
                  platform efficiently connects you with trusted helpers ready
                  to get the job done.
                </p>
                <div className="space-y-2 z-50 flex flex-col justify-center items-center md:items-start">
                  <p className="text-[16px] lg:text-[18px] font-normal leading-[140%] tracking-[-1.5%] max-w-[200px] md:max-w-[513px]">
                    Download on
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="inline-block">
                      <Image
                        src={GooglePlay}
                        alt="Get it on Google Play"
                        width={135}
                        height={40}
                        className="h-[48px] md:h-12 w-auto"
                      />
                    </a>
                    <a href="#" className="inline-block">
                      <Image
                        src={Apple}
                        alt="Download on App Store"
                        width={135}
                        height={40}
                        className="h-[48px] md:h-12 w-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Light section - Log in to see activity */}
      <div className="w-full max-w-[1400px] px-4 lg:px-0 mx-auto flex items-center pt-14 -mb-10 md:-mb-[100px] md:h-[610px] text-[#0C0C0C]">
        <div className="w-full max-w-[1200px] px-4 md:px-0 mx-auto md:h-[580px] flex">
          <div className="w-full flex flex-col md:flex-row-reverse items-center  gap-8 mx-auto">
            <div className="w-full md:w-1/2 flex justify-end">
              <div className="rounded-3xl overflow-hidden max-w-md mx-auto md:mx-0">
                <Image
                  src={RecentActivity}
                  alt="People loading items into a car"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="">
                {" "}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:w-[487px]">
                  Log in to see your recent activity
                </h2>
                <p className="text-[#3D3D3D] mb-6 max-w-md mx-auto md:mx-0">
                  Log in to view your recent activity and submit complaints
                  access only, no task requests or offers.
                </p>
                <div className="space-y-2 z-50 flex flex-col justify-center items-center md:items-start">
                  <p className="text-[16px] lg:text-[18px] font-normal leading-[140%] tracking-[-1.5%] max-w-[200px] md:max-w-[513px]">
                    Download on
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="inline-block">
                      <Image
                        src={GooglePlay}
                        alt="Get it on Google Play"
                        width={135}
                        height={40}
                        className="h-[48px] md:h-12 w-auto"
                      />
                    </a>
                    <a href="#" className="inline-block">
                      <Image
                        src={Apple}
                        alt="Download on App Store"
                        width={135}
                        height={40}
                        className="h-[48px] md:h-12 w-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
