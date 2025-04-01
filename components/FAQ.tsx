import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  const faqs = [
    {
      question: "How quickly can you reach my location in Bangalore?",
      answer:
        "We typically arrive within 20-30 minutes in most Bangalore areas. Our response time depends on your location and traffic conditions, but we prioritize emergency situations and strive to reach you as quickly as possible.",
    },
    {
      question: "What types of vehicles do you tow?",
      answer:
        "We tow all types of vehicles including cars, SUVs, luxury vehicles, motorcycles, and light commercial vehicles. Our fleet is equipped with various towing equipment to safely transport different vehicle types.",
    },
    {
      question: "Do you provide towing services outside Bangalore?",
      answer:
        "Yes, we provide towing services throughout Karnataka and can arrange long-distance towing across India. Additional charges may apply based on distance and requirements.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We operate 24 hours a day, 7 days a week, including all holidays. Our emergency towing services are always available whenever you need assistance.",
    },
    {
      question: "How much does towing cost in Bangalore?",
      answer:
        "Towing costs depend on several factors including distance, vehicle type, and specific requirements. We provide transparent pricing with no hidden charges. Call us for a quick quote based on your specific situation.",
    },
    {
      question: "Do you offer roadside assistance without towing?",
      answer:
        "Yes, we offer various roadside assistance services including battery jump-start, flat tire change, fuel delivery, and minor mechanical repairs without necessarily towing your vehicle.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-white-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our towing services in Bangalore.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Have more questions?{" "}
            <a href="#contact" className="text-orange-500 font-medium">
              Contact us
            </a>{" "}
            and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  )
}

