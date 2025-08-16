import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroCarouselProps {
  theme?: string;
  heroImages: string[];
}

export default function HeroCarousel({ theme, heroImages }: HeroCarouselProps) {
  return (
    <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="absolute inset-0 w-full h-full"
      >
        {heroImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Hero Slide ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className={`${
                theme === "light" ? "bg-black/10" : "bg-black/40"
              } absolute inset-0`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay content */}
      <div className="absolute z-10 text-center text-white max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
          Premium Shopping
          <span className="block bg-gradient-hero bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
          Discover luxury products with exceptional quality and unmatched
          elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/shop">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg"
            >
              <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Shop Now
            </Button>
          </Link>
          <Link to="/admin">
            <Button
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg border-white text-white hover:bg-white hover:text-black"
            >
              Admin Panel
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
