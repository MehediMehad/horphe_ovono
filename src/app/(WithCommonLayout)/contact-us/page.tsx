import ContactForm from "@/components/modules/CommonLayout/Contact/LandingPage/ContactForm";
import AppScreenshot from "../../../../public/AppScreenshot.png";

import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <main className="py-12 md:py-16 flex items-center justify-center min-h-screen">
        <div className="max-w-[1200px] px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Contact Form */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0C0C0C] ">
                Get in touch with us
              </h1>
              <p className="text-gray-600 mb-4 mt-2">
                Have questions or need support? We're here to help! Reach out to
                us anytime.
              </p>

              <ContactForm />
            </div>

            {/* Right Column - App Image */}
            <div className="order-first md:order-last">
              <div className="bg-[#0C0C0C] rounded-3xl flex items-center justify-center">
                <div className="relative mx-auto">
                  <Image
                    src={AppScreenshot.src}
                    alt="HELPER App Screenshot"
                    className="rounded-3xl w-full h-auto"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
