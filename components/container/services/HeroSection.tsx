import React from 'react';
import { Button } from '../../ui/button';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import laptopImage from '../../../assets/services/laptop.png';

export function HeroSection() {
  return (
    <section className="text-white py-0 pl-6 pr-0 relative overflow-hidden" style={{backgroundColor: '#000000'}}>
      <div className="max-w-none relative">
        <div className="max-w-2xl lg:max-w-xl relative z-10 py-20 pl-40">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Enterprise<br />
            Software Development
          </h1>
          <p className="text-lg text-[rgba(255,255,255,1)] mb-8 max-w-xl">
            Here AI into your applications to make them more predictive and accurate.
          </p>
          <Button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 text-lg py-[28px] px-[16px] py-[20px]">
            Get Started →
          </Button>
        </div>
        
        {/* Laptop image in the right corner */}
        <div className="absolute top-0 right-0 w-1/2 h-full lg:block">
          <ImageWithFallback 
            src={laptopImage}
            alt="Futuristic laptop with holographic interface"
            className="w-full h-full object-contain object-right"
          />
        </div>

      </div>
    </section>
  );
}