import { ArrowRight, FileText, Shield } from "lucide-react";
import Link from "next/link";

export default function TermsConditionsOverView() {
  
  // Table of contents items
  const tocItems = [
    { id: "introduction", title: "1. Introduction" },
    { id: "definitions", title: "2. Definitions" },
    { id: "acceptance", title: "3. Acceptance of Terms" },
    { id: "description", title: "4. Description of Services" },
    { id: "payment", title: "5. Payment Terms" },
    { id: "cancellation", title: "6. Request, Quote, and Cancellation" },
    { id: "liability", title: "7. Limitations of Liability" },
    { id: "responsibilities", title: "8. User Responsibilities" },
    { id: "jurisdiction", title: "9. Jurisdiction and Governing Law" },
    { id: "amendments", title: "10. Amendments and Modifications" },
    { id: "miscellaneous", title: "11. Miscellaneous Provisions" },
  ];

  return (
    <>
      {/* Header Banner */}
      <div className="bg-[#0C0C0C] text-white py-12 mt-[76px]">
        <div className="container mx-auto max-w-5xl px-10 md:px-4">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="h-6 w-6" />
            <p className="text-sm uppercase tracking-wider text-gray-300">
              Legal Document
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Please read these terms carefully before using the HELPER platform.
            By accessing our services, you agree to be bound by these terms.
          </p>
          <div className="flex items-center mt-6 text-sm">
            <p className="text-gray-400">Last updated: April 2025</p>
            <span className="mx-3 text-gray-500">•</span>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1 text-gray-400" />
              <span className="text-gray-300">HELPER LLC</span>
            </div>
          </div>
        </div>
      </div>

      <main className="py-12 px-4 bg-gray-50">
        <div className=" mx-auto max-w-5xl">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Table of Contents - Sidebar */}
            <div className="md:col-span-3 hidden md:block">
              <div className="bg-white rounded-xl shadow-sm p-5 sticky top-24">
                <h3 className="font-bold text-lg mb-4 pb-2 border-b">
                  Contents
                </h3>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <p
                      key={item.id}
                      className="block py-2 px-3 text-sm rounded-lg transition-colors"
                    >
                      {item.title}
                    </p>
                  ))}
                </nav>
                <div className="mt-6 pt-4 border-t">
                  <Link
                    href="/privacy-policy"
                    className="flex items-center text-sm text-gray-600 hover:text-black"
                  >
                    View Privacy Policy
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-9">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  <section id="introduction" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b ">
                      1. Introduction
                    </h2>
                    <p>
                      1.1. These Terms and Conditions ("Terms") govern your use
                      of the HELPER LLC website and services. By accessing or
                      using our platform, you agree to be bound by these Terms.
                    </p>
                    <p>
                      1.2. HELPER LLC ("we", "us", or "our") operates an online
                      service that connects individuals in need of assistance
                      ("Needers") with individuals offering help ("Helpers").
                      The platform is designed for person-to-person assistance
                      and is similar in concept to other on-demand service
                      platforms.
                    </p>
                    <p>
                      1.3. Please read these Terms carefully. If you do not
                      agree with any provision herein, you should not use our
                      services.
                    </p>
                  </section>

                  <section id="definitions" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
                      2. Definitions
                    </h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">
                        <span className="font-medium">2.1. Needer:</span> An
                        individual who requests assistance through our platform.
                      </p>
                      <p className="mb-2">
                        <span className="font-medium">2.2. Helper:</span> An
                        individual who offers to assist a Needer through our
                        platform. Note that Helpers are not professional service
                        providers; they provide help as described by the Needer
                        and under the Needer's supervision.
                      </p>
                      <p className="mb-2">
                        <span className="font-medium">2.3. Tip:</span> The
                        payment made by a Needer to a Helper for providing
                        assistance.
                      </p>
                      <p className="mb-2">
                        <span className="font-medium">2.4. Service Fee:</span> A
                        non-refundable fee of $4.99 per order, charged when a
                        Needer cancels a request after it has been made.
                      </p>
                      <p>
                        <span className="font-medium">2.5. Platform:</span> The
                        HELPER LLC website and any associated applications or
                        services provided by HELPER LLC.
                      </p>
                    </div>
                  </section>

                  <section id="acceptance" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
                      3. Acceptance of Terms
                    </h2>
                    <p>
                      3.1. By registering for and/or using our Platform, you
                      acknowledge that you have read, understood, and agree to
                      be bound by these Terms.
                    </p>
                    <p>
                      3.2. Continued use of our services signifies your
                      acceptance of any modifications made to these Terms.
                    </p>
                  </section>

                  <section id="description" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
                      4. Description of Services
                    </h2>
                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        4.1. Service Overview:
                      </h3>
                      <p className="ml-4">
                        4.1.1. HELPER LLC provides an online platform that
                        facilitates the connection between Needers and Helpers.
                      </p>
                      <p className="ml-4">
                        4.1.2. Our service is intended for person-to-person
                        assistance only.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        4.2. Nature of Assistance:
                      </h3>
                      <p className="ml-4">
                        4.2.1. Helpers are not professional service providers;
                        they offer help based on their availability and
                        willingness.
                      </p>
                      <p className="ml-4">
                        4.2.2. All assistance provided by a Helper shall be
                        performed under the direct supervision and guidance of
                        the Needer.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-2">
                        4.3. Service Comparison:
                      </h3>
                      <p className="ml-4">
                        4.3.1. Although our service is analogous to on-demand
                        platforms like Uber in terms of connecting service
                        providers with customers, it is important to note the
                        non-professional nature of the Helpers on our platform.
                      </p>
                    </div>
                  </section>

                  <section id="payment" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
                      5. Payment Terms
                    </h2>
                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        5.1. Terminology:
                      </h3>
                      <p className="ml-4">
                        5.1.1. Instead of traditional "fees" or "fares,"
                        payments for services rendered through our Platform are
                        referred to as "Tips."
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        5.2. Payment Process:
                      </h3>
                      <p className="ml-4">
                        5.2.1. Payments are processed securely through our
                        Platform at the time of service.
                      </p>
                      <p className="ml-4">
                        5.2.2. The amount of the Tip is agreed upon between the
                        Needer and the Helper prior to the commencement of the
                        task.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-2">
                        5.3. Refund Policy:
                      </h3>
                      <p className="ml-4">
                        5.3.1. If a Helper fails to provide the agreed-upon
                        assistance, any Tip paid for that particular task shall
                        be refundable to the Needer, subject to the terms
                        outlined in Section 6.
                      </p>
                    </div>
                  </section>

                  <section id="cancellation" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
                      6. Request, Quote, and Cancellation Terms
                    </h2>
                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        6.1. Request Process:
                      </h3>
                      <p className="ml-4">
                        6.1.1. Before placing a request for assistance, the
                        Needer will have the opportunity to receive a quote
                        outlining the estimated Tip amount and other relevant
                        details.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        6.2. Cancellation Policy:
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="mb-2">
                          6.2.1. Once a request has been made, the Needer may
                          cancel the order; however, such cancellation will
                          incur a Service Fee of $4.99 per order.
                        </p>
                        <p>
                          6.2.2. The Service Fee is non-refundable regardless of
                          the circumstances surrounding the cancellation.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-2">
                        6.3. Refund Conditions:
                      </h3>
                      <p className="ml-4">
                        6.3.1. The Tip portion of the payment is refundable if
                        the Helper does not provide the agreed assistance.
                      </p>
                      <p className="ml-4">
                        6.3.2. Refunds will be processed in accordance with our
                        standard refund procedures and timelines.
                      </p>
                    </div>
                  </section>

                  <section id="liability" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
                      7. Limitations of Liability and Disclaimers
                    </h2>
                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        7.1. General Disclaimer:
                      </h3>
                      <p className="ml-4">
                        7.1.1. HELPER LLC provides the Platform "as is" without
                        any warranties, either express or implied.
                      </p>
                      <p className="ml-4">
                        7.1.2. We do not guarantee the accuracy, reliability, or
                        quality of the services provided by Helpers.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        7.2. Limitation of Liability:
                      </h3>
                      <p className="ml-4">
                        7.2.1. In no event shall HELPER LLC be liable for any
                        indirect, incidental, consequential, or punitive damages
                        arising from the use of our Platform or services.
                      </p>
                      <p className="ml-4">
                        7.2.2. This includes, but is not limited to, any lost
                        profits, lost revenue, or other financial losses, even
                        if HELPER LLC has been advised of the possibility of
                        such damages.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-2">
                        7.3. Risk Assumption:
                      </h3>
                      <p className="ml-4">
                        7.3.1. Both Needers and Helpers acknowledge that they
                        use the Platform at their own risk.
                      </p>
                      <p className="ml-4">
                        7.3.2. HELPER LLC is not responsible for any actions,
                        omissions, or negligence on the part of the users of our
                        Platform.
                      </p>
                    </div>
                  </section>

                  <section id="responsibilities" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
                      8. User Responsibilities and Restrictions
                    </h2>
                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        8.1. Responsibilities of the Needer:
                      </h3>
                      <p className="ml-4">
                        8.1.1. Provide a clear, accurate, and detailed
                        description of the task when making a request.
                      </p>
                      <p className="ml-4">
                        8.1.2. Understand that the Helper is a non-professional
                        and will perform tasks under your direct supervision.
                      </p>
                      <p className="ml-4">
                        8.1.3. Ensure that all communications and instructions
                        are respectful and unambiguous.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        8.2. Responsibilities of the Helper:
                      </h3>
                      <p className="ml-4">
                        8.2.1. Carefully read and fully understand the task
                        details provided by the Needer before accepting any
                        request.
                      </p>
                      <p className="ml-4">
                        8.2.2. Acknowledge that by accepting a request, you
                        assume full responsibility for completing the task as
                        described.
                      </p>
                      <p className="ml-4">
                        8.2.3. Maintain effective and prompt communication with
                        the Needer throughout the task.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-2">
                        8.3. General Restrictions:
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="mb-2">
                          8.3.1. Both Needers and Helpers agree to use the
                          Platform only for its intended purpose and in
                          compliance with all applicable laws.
                        </p>
                        <p>
                          8.3.2. Any fraudulent, abusive, or otherwise improper
                          use of the Platform may result in suspension or
                          termination of access.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="jurisdiction" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
                      9. Jurisdiction and Governing Law
                    </h2>
                    <p>
                      9.1. These Terms and any disputes arising from your use of
                      the Platform shall be governed by and construed in
                      accordance with the laws of the United States and Canada.
                    </p>
                    <p>
                      9.2. The exclusive jurisdiction for any legal proceedings
                      related to these Terms shall reside in the state of
                      Wyoming.
                    </p>
                    <p>
                      9.3. By using our Platform, you consent to the personal
                      jurisdiction and venue of courts located in Wyoming.
                    </p>
                  </section>

                  <section id="amendments" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
                      10. Amendments and Modifications
                    </h2>
                    <p>
                      10.1. HELPER LLC reserves the right to modify or amend
                      these Terms at any time.
                    </p>
                    <p>
                      10.2. Any changes to the Terms will be posted on the
                      Platform, and your continued use of our services
                      constitutes acceptance of those changes.
                    </p>
                    <p>
                      10.3. It is the responsibility of users to review these
                      Terms periodically for any updates.
                    </p>
                  </section>

                  <section id="miscellaneous" className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
                      11. Miscellaneous Provisions
                    </h2>
                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        11.1. Entire Agreement:
                      </h3>
                      <p className="ml-4">
                        11.1.1. These Terms constitute the entire agreement
                        between you and HELPER LLC regarding the use of our
                        Platform and supersede any prior agreements or
                        understandings.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        11.2. Severability:
                      </h3>
                      <p className="ml-4">
                        11.2.1. If any provision of these Terms is found to be
                        invalid or unenforceable, the remaining provisions shall
                        remain in full force and effect.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2">
                        11.3. No Waiver:
                      </h3>
                      <p className="ml-4">
                        11.3.1. Failure by HELPER LLC to enforce any provision
                        of these Terms shall not constitute a waiver of our
                        right to enforce such provision in the future.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-2">
                        11.4. Contact Information:
                      </h3>
                      <p className="ml-4">
                        11.4.1. For any questions or concerns regarding these
                        Terms, please contact HELPER LLC at the contact
                        information provided on our Platform.
                      </p>
                    </div>
                  </section>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 mt-8 flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">
                    Have questions about our terms?
                  </h3>
                  <p className="text-gray-600">
                    Our support team is here to help you understand our
                    policies.
                  </p>
                </div>
                <Link
                  href="/contact-us"
                  className="mt-4 md:mt-1 px-4 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
