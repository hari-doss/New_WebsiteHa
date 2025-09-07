import React from 'react';

export function FeaturesSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mx-[354px] my-[0px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-[rgba(34,34,34,1)]">Smart</span>
          <span className="text-orange-500 mx-4">•</span>
          <span className="text-[rgba(34,34,34,1)]">Scalable</span>
          <span className="text-orange-500 mx-4">•</span>
          <span className="text-gray-900 font-light">Built for the </span>
          <span className="text-[rgba(34,34,34,1)]">Future</span>
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          We don't just build software—we engineer digital ecosystems that empower enterprises to thrive in a connected world. At Twilight IT Solutions, our enterprise software development services are designed to transform your business through innovation, speed, and seamless integration. Whether you're digitizing legacy systems or launching next-gen platforms, we help you drive growth with secure, scalable, and intelligent solutions.
        </p>
      </div>
    </section>
  );
}