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
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
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

            {/* Overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-500 ${
                theme === "light" ? "bg-black/30" : "bg-black/50"
              }`}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-3 sm:mb-4">
                {img.heading}
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-md sm:max-w-xl md:max-w-2xl mb-6 sm:mb-8 leading-relaxed">
                {img.subHeading}
              </p>
              <Link to="/shop">
                <Button
                  variant="ghost"
                  size="lg"
                  className="px-6 sm:px-8 border py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform"
                >
                  <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
