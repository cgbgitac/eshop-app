'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1920&q=80',
    title: 'Latest Electronics',
    description: 'Discover cutting-edge gadgets and smart devices with exclusive launch offers',
  },
  {
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80',
    title: 'Fashion Collection',
    description: 'Elevate your style with our premium clothing and accessories',
  },
  {
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80',
    title: 'Sports & Fitness',
    description: 'Premium sports gear and fitness equipment for your active lifestyle',
  },
  {
    image: 'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?w=1920&q=80',
    title: 'Tech Essentials',
    description: 'Shop the latest laptops, smartphones, and accessories',
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] bg-gray-900 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover opacity-60"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {slide.description}
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold hover:scale-105 transform duration-200"
                  >
                    Shop Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 