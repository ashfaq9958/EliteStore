import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroCarousel({ theme, heroImages }) {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="absolute inset-0 w-full h-full"
      >
        {heroImages.map((img, idx) => (
          <SwiperSlide key={idx} className="relative">
            {/* Background Image */}
            <img
              src={img.img}
              alt={`Hero Slide ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Overlay */}
            <div
              className={`${
                theme === "light" ? "bg-black/10" : "bg-black/50"
              } absolute inset-0`}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="max-w-2xl sm:max-w-3xl lg:max-w-5xl mx-auto">
                {/* Heading */}
                {img.heading === "Exclusive Prestige" ? (
                  <h1 className=" gap-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-3 sm:mb-6 text-white drop-shadow-lg">
                    {img.heading}
                    <span className="block bg-gradient-hero bg-clip-text text-transparent">
                      {img.secondHeading}
                    </span>
                  </h1>
                ) : (
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-3 sm:mb-6 text-white drop-shadow-lg">
                    {img.heading}
                    <span className="block bg-gradient-hero bg-clip-text text-transparent">
                      {img.secondHeading}
                    </span>
                  </h1>
                )}

                {/* Sub Heading */}
                {img.heading !== "Exclusive Prestige" ? (
                  <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-10 text-white/90 leading-relaxed">
                    {img.primarySubHeading}
                  </p>
                ) : (
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-10 text-white/90 leading-relaxed">
                    Up to{" "}
                    <span className="font-bold text-yellow-400">
                      {img.primarySubHeading}
                    </span>{" "}
                    {img.secondarySubHeading}
                  </p>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
                  <Link to="/shop">
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg shadow-lg"
                    >
                      <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      {img.firstCta}
                    </Button>
                  </Link>

                  <Link to="/admin">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all shadow-lg"
                    >
                      {img.secondCta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
