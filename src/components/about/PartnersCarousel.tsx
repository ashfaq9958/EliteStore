import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PartnersCarouselProps {
  partners: string[];
}

const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ partners }) => {
  return (
    <div className="relative">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {partners.map((src, idx) => (
            <CarouselItem
              key={idx}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <div className="h-20 flex items-center justify-center rounded-md border bg-card shadow-sm">
                <img
                  src={src}
                  alt={`Brand partner logo ${idx + 1}`}
                  loading="lazy"
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious aria-label="Previous brands" />
        <CarouselNext aria-label="Next brands" />
      </Carousel>
    </div>
  );
};

// Example usage with external logos
export default function PartnersCarouselExample() {
  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Spotify_logo_with_text.svg",
  ];

  return <PartnersCarousel partners={partners} />;
}
