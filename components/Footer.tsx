import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-3">
                <Image src="/ZIPTOW.png" alt="Towing Services Bangalore Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Towing Services</h3>
                <p className="text-sm text-gray-400">Bangalore</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for vehicle towing and roadside assistance across Karnataka and India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Car Towing</li>
              <li className="text-gray-400">Luxury Vehicle Transport</li>
              <li className="text-gray-400">Battery Jump Start</li>
              <li className="text-gray-400">Breakdown Assistance</li>
              <li className="text-gray-400">Roadside Repairs</li>
              <li className="text-gray-400">24/7 Emergency Service</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center mb-4">
              <Phone className="h-5 w-5 text-orange-500 mr-3" />
              <div>
                <p className="font-medium">Emergency Towing</p>
                <p className="text-gray-400">+91 8971 985 021</p>
              </div>
            </div>
            <p className="text-gray-400">Serving all areas in Bangalore including:</p>
            <p className="text-gray-400">
              Koramangala, Indiranagar, Whitefield, Electronic City, Marathahalli, JP Nagar, and more.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Towing Services Bangalore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

