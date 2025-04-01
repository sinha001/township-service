import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function Areas() {
  const areas = [
    "Koramangala",
    "Indiranagar",
    "Whitefield",
    "Electronic City",
    "Marathahalli",
    "JP Nagar",
    "Bannerghatta Road",
    "MG Road",
    "Jayanagar",
    "BTM Layout",
    "HSR Layout",
    "Hebbal",
    "Yelahanka",
    "Kengeri",
    "Banashankari",
    "Malleshwaram",
    "Rajajinagar",
    "Basavanagudi",
    "Domlur",
    "Bellandur",
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Areas We Serve in Bangalore</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our towing services are available throughout Bangalore and surrounding areas. We provide quick response
            times to all these locations and more.
          </p>
        </div>

        <Card className="border-none shadow-md">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <MapPin className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Don&apos;t see your area? Don&apos;t worry! We cover all of Bangalore and surrounding regions. Call us at{" "}
            <a href="tel:+918197315590" className="text-orange-500 font-medium">
            8197 315 590
            </a>{" "}
            for assistance.
          </p>
        </div>
      </div>
    </section>
  )
}

