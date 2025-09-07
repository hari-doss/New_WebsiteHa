import { Button } from "./ui/button";
import HeroLeftBannerImg from "../assets/HeroLeftBannerImage.svg";
import HeroRightBannerImage from "../assets/HeroRightBannerImage.svg";

export function HeroSection() {
  return (
    <section className="w-full bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Left Hero Image */}
        <img
          src={HeroLeftBannerImg}
          alt="Hero Left Banner"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 h-80 w-auto hidden md:block"
        />

        {/* Right Hero Image */}
        <img
          src={HeroRightBannerImage}
          alt="Hero Right Banner"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 h-80 w-auto hidden md:block"
        />

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Powering Digital Innovation
            <br />
            <span className="text-[rgba(34,34,34,1)]">with world-class Technology</span>
          </h1>

          <p className="text-lg text-[rgba(34,34,34,1)] mb-8 max-w-3xl mx-auto leading-relaxed">
           At Twilight IT Solutions, we combine technical depth with domain expertise to deliver smart, scalable, and future-ready digital solutions. Whether you're building enterprise systems, customer-facing platforms, or intelligent mobile apps, our engineers leverage the right technologies to match your vision with execution.
 
          </p>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">
            Explore our Stack 
          </Button>
        </div>
      </div>
    </section>
  );
}
