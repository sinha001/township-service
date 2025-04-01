"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Koramangala, Bangalore",
      rating: 5,
      text: "Excellent service! My car broke down on the highway and they arrived within 20 minutes. Very professional and careful with my vehicle. Highly recommended!",
    },
    {
      name: "Priya Patel",
      location: "Whitefield, Bangalore",
      rating: 5,
      text: "I've used Towing Services Bangalore twice now and both times they were prompt, professional and reasonably priced. Their staff is courteous and helpful.",
    },
    {
      name: "Arun Kumar",
      location: "Indiranagar, Bangalore",
      rating: 5,
      text: "Called them at 2 AM when my car wouldn't start after a late night at work. They arrived quickly and helped jump start my car. Great 24/7 service!",
    },
    {
      name: "Sita Rao",
      location: "Jayanagar, Bangalore",
      rating: 5,
      text: "I was stranded in the middle of the road during rush hour, and Ziptow came to my rescue quickly. Their team was professional and made sure my car was safely towed to the service center. Very reliable!",
    },
    {
      name: "Vikram Desai",
      location: "Malleshwaram, Bangalore",
      rating: 5,
      text: "Had an amazing experience with Ziptow! I needed a tow after my car broke down, and they arrived within 30 minutes. The driver was friendly and made sure everything went smoothly. Highly recommend them for fast and friendly service.",
    },
  ];

  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Don&apos;t just take our word for it. Here&apos;s what our satisfied customers
          have to say about our services.
        </p>
        <div className="relative w-full flex justify-center overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex w-full flex-shrink-0 justify-center gap-x-6"
              >
                {testimonials
                  .slice(
                    slideIndex * itemsPerPage,
                    (slideIndex + 1) * itemsPerPage
                  )
                  .map((testimonial, i) => (
                    <Card
                      key={i}
                      className="border-none shadow-md w-full max-w-sm"
                    >
                      <CardContent className="pt-6">
                        <div className="flex mb-4 justify-center">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="mb-4">&quot;{testimonial.text}&quot;</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-center border-t pt-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
