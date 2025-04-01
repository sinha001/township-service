import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhatsAppButton } from "@/components/Whatsapp-Button";
import { Areas } from "@/components/Areas";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Seo } from "@/components/SEO";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <Hero/>
      <Services/>
      <About/>
      <Areas/>
      <Testimonials/>
      <Faq/>
      <Contact/>
      <Seo/>
      <Footer/>
      <WhatsAppButton/>
    </main>  
    );
}
