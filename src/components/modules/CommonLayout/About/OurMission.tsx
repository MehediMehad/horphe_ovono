import { Users } from "lucide-react";
import Image from "next/image";

const OurMission = () => {
  return (
    <section className="">
    <div className="max-w-[1200px] px-4 lg:px-0 mx-auto py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            At HELPER, we believe that everyone has the power to make a
            difference in their community. Our mission is to create a
            platform that connects people who need assistance with those who
            are willing to help, fostering a sense of community and mutual
            support.
          </p>
          <p className="text-gray-600 mb-6">
            We're dedicated to making everyday tasks simpler, more
            accessible, and more human. By leveraging technology to
            facilitate real-world connections, we're building bridges
            between neighbors and creating opportunities for meaningful
            interactions.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <h3 className="font-semibold">Community First</h3>
              <p className="text-sm text-gray-600">
                Building stronger neighborhoods through connection
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl flex items-center justify-center">
          <div className="max-h-[600px]">
            <Image
              src="https://img.freepik.com/free-photo/man-engaged-household-tasks-scenery_23-2151741176.jpg?t=st=1744625400~exp=1744629000~hmac=b0f69a0833c96b030da8b97e30c732ca72e1d9c8cf8f1f3e4ca9c99e2b9ddbb1&w=740"
              alt="People helping each other"
              width={500}
              height={500}
              className="max-h-[600px] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default OurMission;