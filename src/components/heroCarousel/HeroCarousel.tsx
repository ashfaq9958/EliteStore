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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            {/* {img === heroImage2 && (
              <img src={sale} className="absolute -left-60 w-[40%] top-0" />
            )} */}
            <div
              className={`${
                theme === "light" ? "bg-black/10" : "bg-black/40"
              } absolute inset-0`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay content */}
      <div className="absolute z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Premium Shopping
          <span className="block bg-gradient-hero bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Discover luxury products with exceptional quality and unmatched
          elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/shop">
            <Button variant="hero" size="lg">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Button>
          </Link>
          <Link to="/admin">
            <Button
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Admin Panel
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
