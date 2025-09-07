import React from 'react';
import checkmarkIcon from 'figma:asset/d882a253e1fd1201b66f00312a9a47e639d8a9e2.png';
import office from '../assets/office.svg'
import twilightminilogo from '../assets/twilightminilogo.svg';
export function WhySection() {
  const benefits = [
    "Comprehensive tech stack covering web, mobile, cloud, and intelligent systems",
    "Domain expertise across healthcare, fintech, and retail", 
    "Agile methodologies with DevOps acceleration",
    "Proven delivery models for MVPs, enterprise apps, and product scaling",
    "Strong emphasis on performance, security, and future readiness"
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            <img 
              src={office} 
              alt="Office" 
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div>
          <div className="mb-8 flex items-center gap-4">
              <img
                            src={twilightminilogo}
                            alt="twilightminilogo"
                            className="h-12 w-12"
                          />

  <div>
    <div className="text-lg font-semibold text-gray-500">Why</div>

    <h2 className="text-3xl font-bold text-gray-900">
      Twilight IT Solutions
    </h2>
  </div>
</div>


            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <img 
                      src={checkmarkIcon} 
                      alt="Checkmark" 
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}