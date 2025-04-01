import { ScrollSpy } from "./ui/scrollspy";


export function Seo() {

  return (
    <section className="py-5 bg-gray-50">
      <div className="max-w-4xl mx-auto prose prose-lg text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">
          Professional Towing Services in Bangalore
        </h2>
        <p className="text-gray-700">
          Welcome to <strong>Towing Services Bangalore</strong>, your reliable
          partner for all vehicle towing and roadside assistance needs in
          Bangalore and across Karnataka. With our fleet of modern towing
          vehicles and experienced team, we provide prompt, safe, and efficient
          towing services for all types of vehicles.
        </p>
      </div>

      <ScrollSpy/>      

      <div className="max-w-4xl mx-auto prose prose-lg text-center mt-10 mb-10">
        <p>
          For immediate assistance with towing services in Bangalore, call us at{" "}
          <a href="tel:+918197315590" className="text-orange-500 font-medium">
            8197 315 590
          </a>
          . Our team is available 24/7 to help you get back on the road quickly
          and safely.
        </p>
      </div>
    </section>
  );
}
