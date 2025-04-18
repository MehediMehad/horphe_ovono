import Link from "next/link"
import Image from "next/image"
import GooglePlay from "../../../../../../public/GooglePlay.png";
import Apple from "../../../../../../public/apple.png";
import { Facebook, Instagram, Mail } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-100">
      <div className="max-w-[1200px] px-4 md:px-0 mx-auto">
        {/* Main Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="font-bold text-xl">
              HELPER
            </Link>
            <div className="mt-3 flex items-center justify-center md:justify-start text-sm text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              <Link href="mailto:customerservices@helper-llc.com">customerservices@helper-llc.com</Link>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/#feature" className="hover:text-gray-600">
              Feature
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/why-us" className="hover:text-gray-600">
              Why Us
            </Link>
            <Link href="/#faqs" className="hover:text-gray-600">
              FAQ's
            </Link>
            <Link href="/contact-us" className="hover:text-gray-600">
              Contact Us
            </Link>
            <Link href="/careers" className="hover:text-gray-600">
              Careers
            </Link>
          </nav>

          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="#" className="inline-block">
              <Image
                src={GooglePlay}
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="#" className="inline-block">
              <Image
                src={Apple}
                alt="Download on App Store"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-600">© {currentYear} Helper. All rights reserved.</div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms and Conditions
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/helperllc"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/helper_llc/"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://x.com/Helper__1"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FaXTwitter  className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

