import React from "react";
import TwilightFooterLogo from "../assets/TwilightFooterLogo.svg";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import Phone from "../assets/phone.svg";
import Mobile from "../assets/Mobile.svg";
import Email from "../assets/Email.svg";
import Location from "../assets/Location.svg";

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={TwilightFooterLogo}
                alt="Twilight Footer Logo"
                className="h-8 w-auto"
              />
            </div>

            <div className="flex space-x-4 mt-4">
              <a href="#">
                <img src={Facebook} alt="Facebook Logo" className="h-6 w-6" />
              </a>
              <a href="#">
                <img src={Linkedin} alt="Linkedin Logo" className="h-6 w-6" />
              </a>
              <a href="#">
                <img src={Instagram} alt="Instagram Logo" className="h-6 w-6" />
              </a>
            </div>
          </div>
{/* Development Center */}
<div>
 <h4 className="font-semibold text-white text-xs mb-2 uppercase tracking-wide">
  DEVELOPMENT CENTER
</h4>

  <div className="space-y-1 text-gray-300 text-sm leading-relaxed">
    <h5 className="font-medium text-white">
      Twilight IT Solutions Pvt Ltd
    </h5>
    <p>No. 88/2, Villianur Road,</p>
    <p>Reddiarpalayam,</p>
    <p>Oulgaret, Puducherry – 605010.</p>
  </div>
</div>


{/* Business Office */}
<div>
  <h4 className="font-semibold text-white text-xs mb-2 uppercase tracking-wide">
    BUSINESS OFFICE
  </h4>
  <div className="space-y-1 text-gray-300 text-sm leading-relaxed">
    <h5 className="font-medium text-white">
      Twilight IT Solutions Pvt Ltd.
    </h5>
    <p>A-19 & A-20, 12th Floor,</p>
    <p>Guindy Industrial Estate,</p>
    <p>SIDCO Industrial Estate, Guindy,</p>
    <p>Chennai, Tamil Nadu – 600032, India.</p>
  </div>
</div>


          {/* Contact Details */}
          <div className="space-y-4 text-gray-300 text-sm">
           <h4 className="font-semibold text-white text-xs mb-2 uppercase tracking-wide">
  CONTACT US
</h4>


            <div className="flex items-center space-x-4">
              <img src={Phone} alt="Phone Logo" className="h-4 w-4 mr-2" />
              <p>+91-(0413) 430-0110</p>
            </div>

            <div className="flex items-center space-x-4">
              <img src={Mobile} alt="Mobile Logo" className="h-4 w-4 mr-2" />
              <p>+91 7845665867</p>
            </div>

            <div className="flex items-center space-x-4">
              <img src={Email} alt="Email Logo" className="h-4 w-4 mr-2" />
              <p>sales@twilightitsolutions.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <img src={Location} alt="Location Logo" className="h-4 w-4 mr-2" />
              <p>
              No.88/2, Villianur Road,<br />
              Reddiarpalayam, Oulgaret,<br />
              Puducherry – 605010.
              </p>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2025 Twilight Software. All rights reserved.</p>
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Disclaimer
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Privacy Statement
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Sitemap
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Raise a Grievance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
