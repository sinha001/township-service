import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[100vh] pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Professional towing truck service in Bangalore"
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
      </div>

      <div className="container flex justify-start m-10 relative z-10 mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-orange-400">Fast & Reliable</span> Towing Services in Bangalore
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Your trusted car towing partner in Karnataka and across India. Available 24/7 for emergency roadside
            assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full" asChild>
              <a href="tel:+918971985021" aria-label="Call now for towing services">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 8971 985 021
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full"
              asChild
            >
              <a href="#contact" aria-label="Get a quote for towing services">
                Get a Quote
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center bg-black/40 backdrop-blur-sm p-3 rounded-lg">
              <Clock className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
              <p className="text-white text-sm">24/7 Emergency Service</p>
            </div>
            <div className="flex items-center bg-black/40 backdrop-blur-sm p-3 rounded-lg">
              <MapPin className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
              <p className="text-white text-sm">All Bangalore Areas Covered</p>
            </div>
            <div className="flex items-center bg-black/40 backdrop-blur-sm p-3 rounded-lg">
              <Shield className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
              <p className="text-white text-sm">Safe & Secure Vehicle Transport</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

