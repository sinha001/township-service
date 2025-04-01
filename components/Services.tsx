import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Car, Wrench, Battery, PenToolIcon as Tools, Clock } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-orange-500" />,
      title: "Car Towing",
      description:
        "Professional towing for all types of cars, SUVs, and light vehicles across Bangalore and Karnataka.",
    },
    {
      icon: <Car className="h-10 w-10 text-orange-500" />,
      title: "Luxury Vehicle Transport",
      description: "Specialized equipment and trained staff for safe transportation of luxury and high-end vehicles.",
    },
    {
      icon: <Battery className="h-10 w-10 text-orange-500" />,
      title: "Battery Jump Start",
      description: "Quick battery jump start service to get you back on the road without unnecessary delays.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-orange-500" />,
      title: "Breakdown Assistance",
      description: "Immediate help for vehicle breakdowns including flat tires, engine issues, and other emergencies.",
    },
    {
      icon: <Tools className="h-10 w-10 text-orange-500" />,
      title: "Roadside Repairs",
      description: "On-the-spot minor repairs to fix common issues without the need for towing.",
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: "24/7 Emergency Service",
      description: "Round-the-clock assistance for all your emergency towing and roadside needs.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Towing Services in Bangalore</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of towing and roadside assistance services to keep you moving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4" aria-hidden="true">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

