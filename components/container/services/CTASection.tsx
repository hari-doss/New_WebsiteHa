import React from 'react';
import { Button } from '../../ui/button';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import exampleImage from '../../../assets/services/5ba26a2deac1f9cf05a20aa73bd5f8e2f0015e00.png';

export function CTASection() {
  return (
    <section className="pt-48 pb-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-8 lg:p-12 flex items-center justify-between relative overflow-visible" style={{backgroundColor: '#FFE2D4'}}>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Let's future-proof your business with enterprise-grade software
            </h2>
            <p className="text-gray-700 mb-8">
              Start Your Transformation Now
            </p>
            <Button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 text-lg mx-[0px] my-[3px] py-[20px] px-[16px]">
              Get Started →
            </Button>
          </div>
          
          <div className="hidden lg:block absolute right-8 bottom-0">
            <div className="relative">
              <ImageWithFallback 
                src={exampleImage}
                alt="Professional business woman"
                className="w-80 h-[420px] object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}