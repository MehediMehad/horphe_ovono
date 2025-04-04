import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, Mail, MapPin, Phone, MessageSquare, Instagram, Facebook, Twitter } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"
import ContactForm from "@/components/modules/CommonLayout/Contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "",
}

export default function ContactPage() {

  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <MessageSquare className="h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight mb-2">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl">
          Have questions or need to book an appointment? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ContactForm/>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us directly through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">info@salonemail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    123 Salon Street
                    <br />
                    Beauty City, BC 12345
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <div className="text-muted-foreground space-y-1 mt-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
              <CardDescription>Stay updated with our latest styles, products, and promotions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg overflow-hidden h-[250px] border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Street%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1679869181584!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}

