import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Need towing services or roadside assistance? Get in touch with us for quick help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input placeholder="Phone Number" type="tel" />
                </div>
              </div>
              <div>
                <Input placeholder="Email Address" type="email" />
              </div>
              <div>
                <Input placeholder="Vehicle Type" />
              </div>
              <div>
                <Textarea placeholder="Describe your issue or requirements" rows={4} />
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit Request</Button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-lg">+91 8197 315 590</p>
                  <p className="text-muted-foreground">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-lg">keerthykumar946@gmail.com</p>
                  <p className="text-muted-foreground">We&apos;ll respond as soon as possible</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Service Area</h4>
                  <p className="text-lg">Bangalore & Karnataka</p>
                  <p className="text-muted-foreground">Covering all major areas and highways</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-lg">24 hours / 7 days</p>
                  <p className="text-muted-foreground">Always available for emergencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

