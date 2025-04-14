"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

type Testimonial = {
  name: string
  role: string
  content: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Jennifer K.",
    role: "Needer",
    content:
      "HELPER has been a lifesaver for me as a busy parent. I've found reliable help for everything from furniture assembly to grocery delivery. The app is so easy to use and I always feel safe with the helpers who come to my home.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Marcus T.",
    role: "Helper",
    content:
      "I started helping on HELPER to earn extra income, but it's become so much more. I've met amazing people in my community and built a flexible work schedule that fits around my studies. The platform makes it easy to find tasks that match my skills.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sophia R.",
    role: "Needer & Helper",
    content:
      "The platform is so intuitive and secure. I use it both to find help and to offer my skills. It's created a wonderful sense of community in my neighborhood. I've even made friends with people I've helped or who have helped me!",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Robert J.",
    role: "Needer",
    content:
      "As someone with limited mobility, HELPER has given me back my independence. I can get assistance with tasks I struggle with, and the helpers are always respectful and professional. The verification process gives me peace of mind.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Aisha M.",
    role: "Helper",
    content:
      "Being a helper on this platform has been rewarding both financially and personally. I love being able to use my skills to help others, and the flexible schedule means I can work when it suits me. The payment system is also very reliable.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
//   const [api, setApi] = useState<any>()
//   const [current, setCurrent] = useState(0)

//   useEffect(() => {
//     if (!api) {
//       return
//     }

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap())
//     })
//   }, [api])

  return (
    <div className="relative px-10 md:px-16">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-none shadow-none">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                      <Image
                        src="https://img.freepik.com/free-photo/young-man-with-headset_1368-6731.jpg?uid=R102276235&ga=GA1.1.1232205255.1740826906&semt=ais_hybrid&w=740"
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div className="hidden md:block">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div> */}
      </Carousel>
    </div>
  )
}
