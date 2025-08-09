import * as React from "react";
import story1 from "@/assets/about-story-1.jpg";
import story2 from "@/assets/about-story-2.jpg";

const AboutStorySection: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
        <div className="relative overflow-hidden rounded-lg shadow">
          <img
            src={story1}
            alt="Artisan craftsmanship at EliteStore"
            className="h-72 w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" aria-hidden />
        </div>
        <article className="space-y-3">
          <h2 className="text-2xl font-semibold">Our story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded with a passion for exceptional design and thoughtful details, EliteStore brings together premium products and
            a seamless shopping experience. What began as a small curation has grown into a global destination, guided by craftsmanship,
            sustainability, and a relentless focus on our customers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We partner with trusted makers and emerging brands to offer items that last, delight, and perform. Every collection is
            reviewed by our team to ensure it meets our standards for quality and value.
          </p>
        </article>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
        <article className="space-y-3 order-2 md:order-1">
          <h3 className="text-xl font-semibold">Looking ahead</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our vision is a world where shopping is inspiring, effortless, and responsible. We invest in innovations that make shipping
            faster, packaging greener, and support smarter—without compromising on style.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As we grow, our commitment remains the same: elevate everyday life through better products and experiences.
          </p>
        </article>
        <div className="relative overflow-hidden rounded-lg shadow order-1 md:order-2">
          <img
            src={story2}
            alt="Modern warehouse and logistics at EliteStore"
            className="h-72 w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
