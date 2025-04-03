import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, FileText } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "",
}

export default function PrivacyPage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <Shield className="h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground max-w-2xl">Last updated: March 26, 2025</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              At Carla + Curls, we respect your privacy and are committed to protecting your personal data. This privacy
              policy will inform you about how we look after your personal data when you visit our website and tell you
              about your privacy rights and how the law protects you.
            </p>
            <p>
              This privacy policy applies to all information collected through our website, mobile application, and/or
              any related services, sales, marketing, or events (collectively, the "Services").
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>We collect several types of information from and about users of our Services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Personal Information:</span> Name, email address, telephone number, postal
                address, and other identifiers by which you may be contacted online or offline.
              </li>
              <li>
                <span className="font-medium">Appointment Information:</span> Service history, stylist preferences,
                appointment dates and times, and service notes.
              </li>
              <li>
                <span className="font-medium">Payment Information:</span> Credit card details, billing address, and
                other payment details (note that payment information is processed by our secure payment processors).
              </li>
              <li>
                <span className="font-medium">Technical Information:</span> IP address, browser type and version, time
                zone setting, browser plug-in types and versions, operating system and platform, and other technology on
                the devices you use to access our Services.
              </li>
              <li>
                <span className="font-medium">Usage Information:</span> Information about how you use our website,
                products, and services.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>We use the information we collect about you for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, maintain, and improve our Services</li>
              <li>To process and manage your appointments and transactions</li>
              <li>To send you appointment reminders and service updates</li>
              <li>To personalize your experience and deliver content relevant to your interests</li>
              <li>To communicate with you about products, services, offers, and promotions</li>
              <li>To monitor and analyze trends, usage, and activities in connection with our Services</li>
              <li>To detect, prevent, and address technical issues and fraudulent activities</li>
              <li>To comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              Cookies and Tracking Technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We use cookies and similar tracking technologies to track activity on our Services and hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier.
            </p>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Essential Cookies:</span> Necessary for the operation of our website. They
                enable basic functions like page navigation and access to secure areas of the website.
              </li>
              <li>
                <span className="font-medium">Analytical/Performance Cookies:</span> Allow us to recognize and count the
                number of visitors and see how visitors move around our website. This helps us improve the way our
                website works.
              </li>
              <li>
                <span className="font-medium">Functionality Cookies:</span> Used to recognize you when you return to our
                website. This enables us to personalize our content for you and remember your preferences.
              </li>
              <li>
                <span className="font-medium">Targeting Cookies:</span> Record your visit to our website, the pages you
                have visited, and the links you have followed. We use this information to make our website and the
                advertising displayed on it more relevant to your interests.
              </li>
            </ul>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our Services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to request the deletion of your personal information</li>
              <li>The right to restrict the processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to the processing of your personal information</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided in the "Contact Us"
              section.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <div className="mt-4">
              <p className="font-medium">Carla + Curls</p>
              <p>Email: privacy@salonemail.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Salon Street, Beauty City, BC 12345</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

