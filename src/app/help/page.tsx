import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, HelpCircle, Scissors, ShoppingBag } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Help Center",
    description:
      "",
  }
  

export default function HelpPage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <HelpCircle className="h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight mb-2">Help Center</h1>
        <p className="text-muted-foreground max-w-2xl">
          Find answers to common questions about our salon services and products
        </p>
      </div>

      <Tabs defaultValue="faq" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
          <TabsTrigger value="services">Salon Services</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
              <AccordionContent>
                You can book an appointment through our website by visiting the booking page, calling our salon
                directly, or using our mobile app. We recommend booking at least 48 hours in advance for popular time
                slots.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
              <AccordionContent>
                We require at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to
                a cancellation fee of 50% of the service price.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer gift cards?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer digital and physical gift cards in various denominations. Gift cards can be purchased
                online or in-store and are valid for one year from the date of purchase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards, debit cards, cash, and mobile payment options including Apple Pay and
                Google Pay. We also offer installment payment options for larger purchases through our financing
                partners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What is your return policy for products?</AccordionTrigger>
              <AccordionContent>
                Unused products in their original packaging can be returned within 30 days of purchase with a receipt
                for a full refund. Opened products may be eligible for store credit at our discretion.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scissors className="mr-2 h-5 w-5" />
                  Haircut & Styling
                </CardTitle>
                <CardDescription>Professional haircuts and styling services for all hair types</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Women's Haircut & Style: $45-75</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Men's Haircut: $25-45</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Children's Haircut: $20-35</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Blowout & Styling: $35-55</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scissors className="mr-2 h-5 w-5" />
                  Color Services
                </CardTitle>
                <CardDescription>Professional color treatments for vibrant, long-lasting results</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Single Process Color: $65-95</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Highlights (Partial): $85-125</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Highlights (Full): $125-175</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Balayage/Ombre: $150-250</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Product Usage Guide
                </CardTitle>
                <CardDescription>How to get the most out of our professional salon products</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our salon carries only the highest quality professional hair and beauty products. Here are some
                  general guidelines for using our products effectively:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      Use a small amount of product - most professional products are concentrated and a little goes a
                      long way
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>For shampoos, focus on cleansing the scalp rather than the ends of your hair</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>For conditioners and masks, focus on mid-lengths to ends, avoiding the scalp</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>Heat protectants should be applied before using any hot tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Product Recommendations
                </CardTitle>
                <CardDescription>Personalized product recommendations for your hair type</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Not sure which products are right for you? Schedule a free 15-minute consultation with one of our
                  stylists for personalized product recommendations based on your:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Hair type and texture</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Scalp condition</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Hair concerns (dryness, frizz, damage, etc.)</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Styling preferences and routine</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-6">
          Our team is here to help. Contact us directly for personalized assistance.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
        >
          Contact Us
        </a>
      </div>
    </main>
  )
}

