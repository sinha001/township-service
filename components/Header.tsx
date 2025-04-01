"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-2" : "bg-transparent text-black py-4"
      }`}
    >
      <div className="container mx-auto px-0 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-40 w-40 md:h-22 md:w-22">
            <Image src="/ZIPTOW.png" alt="Towing Services Bangalore Logo" fill className="object-contain" />
          </div>
          {!isMobile && (
            <div className="ml-3">
              <h1 className="text-xl font-bold text-primary">Ziptow Towing Services</h1>
              <p className="text-lg text-muted-foreground">Bangalore</p>
            </div>
          )}
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <Button size="sm" className="rounded-full" asChild>
              <a href="tel:+918197315590">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-10">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium py-2 hover:text-primary transition-colors ${isScrolled ? 'text-black' : 'text-white/[0.8]'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="mt-4" asChild>
                    <a href="tel:+918197315590">
                      <Phone className="h-4 w-4 mr-2" />
                      Call 8197 315 590
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium hover:text-primary transition-colors ${isScrolled ? 'text-black' : 'text-white/[0.8]'}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Button className="rounded-full" asChild>
              <a href="tel:+918197315590">
                <Phone className="h-4 w-4 mr-2" />
                8197 315 590
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
