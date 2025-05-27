'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800',
      title: 'Premium Electronics',
      description: 'Discover our latest collection of high-end gadgets',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800',
      title: 'Smart Devices',
      description: 'Transform your home with smart technology',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=800',
      title: 'New Arrivals',
      description: 'Check out our newest products',
    },
  ]

  const ads = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      title: 'Premium Headphones',
      description: 'Up to 40% off',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
      title: 'Smart Watches',
      description: 'New Collection',
    },
  ]

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Slider Column */}
        <div className="lg:col-span-8">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="w-full h-[400px] rounded-2xl overflow-hidden"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-white/90">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Ads Column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="relative h-[190px] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={ad.image}
                alt={ad.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">{ad.title}</h3>
                <p className="text-white/90">{ad.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner 