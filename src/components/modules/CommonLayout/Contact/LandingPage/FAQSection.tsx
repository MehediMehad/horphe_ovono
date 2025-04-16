"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How do I request a helper?",
    answer:
      "Simply sign up as a Needer, describe your task, and submit a request. Helpers nearby will see it and accept.",
  },
  {
    question: "Are the helpers verified?",
    answer:
      "Yes! We conduct an identification check and address verification.",
  },
  {
    question: "How is payment handled?",
    answer:
      "Payments are processed securely through our platform. You can add your preferred payment method in the app, and you'll only be charged once the task is completed to your satisfaction.",
  },
  {
    question: "Can I schedule a task for later?",
    answer:
      "The helper platform is in real time help.",
  },
  {
    question: "What if no helper accepts my request?",
    answer:
      "If your request isn't accepted within a reasonable time, you can adjust the task details or price to make it more attractive. Our system will also suggest improvements to increase your chances of finding a helper.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faqs" className="w-full mt-14 md:mt-[100px] md:mb-14 mb-10 bg-white">
      <div className="max-w-[1200px] h-[590px] md:h-[550px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 px-4 md:px-4 lg:px-0">
          {/* Left column - Title */}
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works – FAQs</h2>
            <p className="text-gray-600">
              Got questions? We've got answers! Find everything you need to know about using the app.
            </p>
          </div>

          {/* Right column - FAQ items */}
          <div className="md:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-[#0C0C0C] rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium text-base md:text-lg">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

