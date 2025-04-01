import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function About() {
  const features = [
    "Experienced and professional team",
    "Modern towing equipment",
    "Quick response time",
    "Affordable pricing",
    "Safe vehicle handling",
    "Coverage across Karnataka",
  ]

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/about.jpg"
              alt="Towing Services Bangalore professional team with tow truck"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">About Towing Services Bangalore</h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 10 years of experience, Towing Services Bangalore has been the trusted partner for vehicle
              towing and roadside assistance across Karnataka and beyond. We take pride in our prompt service,
              professional team, and commitment to customer satisfaction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
              <a href="#contact">Contact Us Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

