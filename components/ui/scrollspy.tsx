"use client";

import { useEffect } from "react";

export function ScrollSpy() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll(".answer-section");
    const navLinks = document.querySelectorAll(".list-group-item");

    // Disable clicking on the nav links
    navLinks.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the default scrolling behavior
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        let activeId = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        });

        navLinks.forEach((item) => {
          const isActive = item.getAttribute("href") === `#${activeId}`;
          item.classList.toggle("bg-secondary-active", isActive); // Tailwind active class
          item.classList.toggle("text-primary", isActive); // Tailwind text-primary class
        });
      },
      {
        root: null, // Observe entire viewport
        rootMargin: "50px", // Adjust if needed
        threshold: 0, // Trigger when 20% of section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-8 w-full rounded-xl border p-6">
          {/* Left Section: ScrollSpy Navigation */}
          <div
            className="flex flex-col grow relative before:absolute before:left-[11px] before:top-0 before:bottom-0 before:border-l before:border-gray-200 gap-1 shrink-0 w-[125px]"
            data-scrollspy="true"
          >
            <a
              href="#item-1"
              className="list-group-item flex items-center rounded-lg pl-2.5 pr-2.5 py-2.5 gap-1.5 border border-transparent text-sm font-medium text-gray-700 hover:text-primary bg-white transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
              aria-disabled="true"
            >
              <span className="w-1.5 relative before:absolute before:top-0 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full bg-gray-700"></span>
              Emergency Towing
            </a>
            <a
              href="#item-2"
              className="list-group-item flex items-center rounded-lg pl-2.5 pr-2.5 py-2.5 gap-1.5 border border-transparent text-sm font-medium text-gray-700 hover:text-primary bg-white transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
              aria-disabled="true"
            >
              <span className="w-1.5 relative before:absolute before:top-0 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full bg-gray-700"></span>
              Why Choose Us?
            </a>
            <a
              href="#item-3"
              className="list-group-item flex items-center rounded-lg pl-2.5 pr-2.5 py-2.5 gap-1.5 border border-transparent text-sm font-medium text-gray-700 hover:text-primary bg-white transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
              aria-disabled="true"
            >
              <span className="w-1.5 relative before:absolute before:top-0 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full bg-gray-700"></span>
              Our Services
            </a>
            <a
              href="#item-4"
              className="list-group-item flex items-center rounded-lg pl-2.5 pr-2.5 py-2.5 gap-1.5 border border-transparent text-sm font-medium text-gray-700 hover:text-primary bg-white transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
              aria-disabled="true"
            >
              <span className="w-1.5 relative before:absolute before:top-0 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full bg-gray-700"></span>
              24/7 Assistance
            </a>
          </div>

          {/* Right Section: Scrollable Content */}
          <div
            className="scrollable-y flex flex-col gap-5 h-[300px] pr-2 overflow-auto"
            id="scrollable_1"
          >
            <div id="item-1" className="answer-section mb-6">
              <h4 className="text-xl font-bold">
                Emergency Towing Services in Bangalore
              </h4>
              <p>
                Vehicle breakdowns can happen anytime, anywhere. Our 24/7
                emergency towing service ensures you're never stranded on the
                road. Whether it's the middle of the night or during peak
                traffic hours, our team is always ready to assist you with
                professional towing services throughout Bangalore.
              </p>
            </div>
            <div id="item-2" className="answer-section mb-6">
              <h4 className="text-xl font-bold">
                Why Choose Our Towing Services?
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Quick Response Time:</strong> We understand the
                  urgency of roadside emergencies and strive to reach your
                  location as quickly as possible.
                </li>
                <li>
                  <strong>Professional Equipment:</strong> Our towing vehicles
                  are equipped with the latest technology to ensure safe
                  transportation of your vehicle.
                </li>
                <li>
                  <strong>Experienced Team:</strong> Our technicians are trained
                  to handle all types of vehicles with care and expertise.
                </li>
                <li>
                  <strong>Comprehensive Coverage:</strong> We serve all areas in
                  Bangalore including Koramangala, Indiranagar, Whitefield,
                  Electronic City, and more.
                </li>
                <li>
                  <strong>Affordable Rates:</strong> We offer competitive
                  pricing with no hidden charges for our towing services.
                </li>
              </ul>
            </div>
            <div id="item-3" className="answer-section mb-6">
              <h4 className="text-xl font-bold">Our Range of Services</h4>
              <p>
                At Towing Services Bangalore, we offer a wide range of services
                to address various roadside emergencies:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Car Towing:</strong> Safe and secure towing for all
                  car models
                </li>
                <li>
                  <strong>Luxury Vehicle Transport:</strong> Specialized towing
                  for high-end vehicles
                </li>
                <li>
                  <strong>Motorcycle Towing:</strong> Secure transportation for
                  two-wheelers
                </li>
                <li>
                  <strong>Long-Distance Towing:</strong> Reliable towing
                  services across Karnataka and beyond
                </li>
                <li>
                  <strong>Breakdown Recovery:</strong> Quick assistance for
                  vehicle breakdowns
                </li>
                <li>
                  <strong>Accident Recovery:</strong> Professional handling of
                  vehicles involved in accidents
                </li>
              </ul>
            </div>
            <div id="item-4" className="answer-section mb-6">
              <h4 className="text-xl font-bold">24/7 Roadside Assistance</h4>
              <p>
                Beyond towing, we offer comprehensive roadside assistance
                services including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Battery jump-start</li>
                <li>Flat tire change</li>
                <li>Fuel delivery</li>
                <li>Vehicle lockout assistance</li>
                <li>Minor mechanical repairs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
