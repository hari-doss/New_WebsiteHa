import { Button } from "./ui/button";
import TwilightHeaderLogo from "../assets/TwilightHeaderLogo.svg";

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
              <img
              src={TwilightHeaderLogo}
              alt="Twilight Header Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-500 transition-colors">
              Home
            </a>
            <a href="/services" className="text-gray-700 hover:text-orange-500 transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
              Verticals
            </a>
            <a href="/technologies" className="text-gray-700 hover:text-orange-500 transition-colors">
              Technologies
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
              Twilife
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}