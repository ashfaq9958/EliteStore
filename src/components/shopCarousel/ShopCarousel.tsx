import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ShopCarousel({ heroImages }) {
  const { theme } = useTheme();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="absolute inset-0 w-full h-full"
      >
        {heroImages.map((img: any, idx: number) => (
          <SwiperSlide key={idx} className="relative">
            {/* Background Image */}
            <img
              src={img.img}
              alt={`Hero Slide ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay for Readability */}
            <div
              className={`absolute inset-0 transition-colors duration-500 ${
                theme === "light" ? "bg-black/30" : "bg-black/50"
              }`}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg mb-4">
                {img.heading}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 max-w-2xl mb-8 leading-relaxed">
                {img.subHeading}
              </p>
              <Link to="/shop">
                <Button
                  variant="default"
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  {img.cta || "Shop Now"}
                </Button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
