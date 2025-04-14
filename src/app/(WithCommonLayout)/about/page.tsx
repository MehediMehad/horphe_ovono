import Image from "next/image";
import Link from "next/link";
import { Users, Clock, Shield, Award } from "lucide-react";
import Footer from "@/components/modules/CommonLayout/Contact/LandingPage/Footer";
import AboutHeroSection from "@/components/modules/CommonLayout/About/AboutHeroSection";
import OurMission from "@/components/modules/CommonLayout/About/OurMission";
import HowItWorks from "@/components/modules/CommonLayout/About/HowItWorks";
import Testimonials from "@/components/modules/CommonLayout/About/Testimonials";
import GooglePlay from "../../../../public/GooglePlay.png";
import Apple from "../../../../public/apple.png";

export default function AboutPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <AboutHeroSection />
      {/* Mission Section */}
      <OurMission />
      {/* How It Works */}
      <HowItWorks />

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] px-4 lg:px-0 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              These principles guide everything we do at HELPER, from product
              development to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in the power of human connection and mutual support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trust & Safety</h3>
              <p className="text-gray-600">
                We prioritize creating a secure environment for all our users.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We strive for excellence in every interaction and transaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">
                We're committed to being there when you need us, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600">
              The passionate individuals behind HELPER who are dedicated to our
              mission of empowering communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/young-stylish-handsome-man-suit-street_158538-10225.jpg?uid=R102276235&ga=GA1.1.1232205255.1740826906&semt=ais_hybrid&w=740"
                  alt="CEO"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-gray-500 mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                With over 15 years of experience in community development, Sarah
                leads our mission to connect and empower neighborhoods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/young-stylish-handsome-man-suit-street_158538-10225.jpg?uid=R102276235&ga=GA1.1.1232205255.1740826906&semt=ais_hybrid&w=740"
                  alt="CTO"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
              <p className="text-gray-500 mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                A tech innovator with a passion for creating platforms that
                solve real-world problems and bring people together.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/young-stylish-handsome-man-suit-street_158538-10225.jpg?uid=R102276235&ga=GA1.1.1232205255.1740826906&semt=ais_hybrid&w=740"
                  alt="COO"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">David Rodriguez</h3>
              <p className="text-gray-500 mb-3">COO</p>
              <p className="text-gray-600 text-sm">
                With a background in operations and community organizing, David
                ensures our platform runs smoothly and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-[#0C0C0C] text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <p className="text-gray-300">Active Users</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100K+</div>
              <p className="text-gray-300">Tasks Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8</div>
              <p className="text-gray-300">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <p className="text-gray-300">Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it—hear from the people who use
              HELPER every day.
            </p>
          </div>

        <Testimonials/>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto">
          <div className="bg-black text-white rounded-2xl p-8 md:p-12 text-center max-w-[1200px] px-4 lg:px-0 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to join our community?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need help with tasks or want to offer your assistance,
              HELPER connects you with your community.
            </p>
          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="#" className="inline-block">
              <Image
                src={GooglePlay}
                alt="Get it on Google Play"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <Link href="#" className="inline-block">
              <Image
                src={Apple}
                alt="Download on App Store"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
