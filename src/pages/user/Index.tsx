import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Star,
  Truck,
  Shield,
  Check,
  Tag,
  Gift,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-banner.jpg";
import heroImage2 from "@/assets/banner2.jpg";
import heroImage3 from "@/assets/banner.jpg";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import HeroCarousel from "@/components/heroCarousel/HeroCarousel";

const Index = () => {
  const { theme } = useTheme();

  const images = [heroImage, heroImage2];

  const slidingImage = [
    {
      heading: "Premium Shopping",
      secondHeading: "Experience",
      primarySubHeading:
        "Discover luxury products with exceptional quality and unmatched elegance",
      secondarySubHeading: "on premium collections. Limited time only!",
      img: heroImage,
      firstCta: "Shop Now",
      secondCta: "Admin Panel",
    },
    {
      heading: "Exclusive Prestige",
      secondHeading: "Savings",
      primarySubHeading: "50% OFF",
      secondarySubHeading: "• Premium Collections • Limited Time",
      img: heroImage2,
      firstCta: "Shop the Sale",
      secondCta: " View Deals",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroCarousel theme={theme} heroImages={slidingImage} />
      {/* Free Shipping Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-2 sm:py-3">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-primary-foreground text-xs sm:text-sm md:text-base text-center sm:text-left">
            {/* Free Shipping */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Truck className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              <span className="font-medium">
                Free shipping on orders over{" "}
                <span className="font-semibold">$100</span>
              </span>
            </div>

            {/* Divider (hidden on mobile) */}
            <span className="hidden sm:inline text-primary-foreground/70">
              |
            </span>

            {/* Promo Code */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              <span className="font-medium">
                Use code: <strong className="tracking-wide">FREESHIP</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales & Deals */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Flash Sale */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                  <Badge variant="destructive" className="animate-pulse">
                    <Clock className="w-3 h-3 mr-1" />
                    Flash Sale
                  </Badge>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    Ends in 2h 15m
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Up to 60% Off
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Premium electronics and accessories
                </p>
                <Button
                  variant="default"
                  className="w-full text-sm sm:text-base py-2 sm:py-3"
                >
                  Shop Flash Sale
                </Button>
              </CardContent>
            </Card>

            {/* Deal of the Day */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Badge variant="secondary" className="text-xs sm:text-sm">
                    <Gift className="w-3 h-3 mr-1" />
                    Deal of the Day
                  </Badge>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Wireless Headphones
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg sm:text-2xl font-bold text-primary">
                    $89
                  </span>
                  <span className="text-sm sm:text-lg line-through text-muted-foreground">
                    $149
                  </span>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    40% OFF
                  </Badge>
                </div>
                <Button
                  variant="default"
                  className="w-full text-sm sm:text-base py-2 sm:py-3"
                >
                  Claim Deal
                </Button>
              </CardContent>
            </Card>

            {/* Coupon Code */}
            <Card className="relative overflow-hidden bg-accent">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="font-semibold text-sm sm:text-base">
                    Exclusive Coupon
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">SAVE20</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Get 20% off your first order
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    value="SAVE20"
                    readOnly
                    className="font-mono text-center text-sm sm:text-base"
                  />
                  <Button variant="outline" size="sm" className="sm:w-auto">
                    Copy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 px-3 sm:px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Why Choose EliteStore
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Premium Quality */}
            <Card>
              <CardContent className="p-6 sm:p-8 text-center">
                <Star className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Premium Quality
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Carefully curated products with exceptional quality standards
                </p>
              </CardContent>
            </Card>

            {/* Fast Shipping */}
            <Card>
              <CardContent className="p-6 sm:p-8 text-center">
                <Truck className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Fast Shipping
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Free shipping on orders over $100 with express delivery
                </p>
              </CardContent>
            </Card>

            {/* Secure Shopping */}
            <Card>
              <CardContent className="p-6 sm:p-8 text-center">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Secure Shopping
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Your data and payments are protected with enterprise-grade
                  security
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-muted/50">
        <div className="container mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust EliteStore for their
            premium shopping needs
          </p>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial Card */}
            <Card>
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  "Absolutely exceptional quality! The products exceeded my
                  expectations and the customer service was outstanding. Will
                  definitely shop here again."
                </p>
                <div className="flex items-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3 text-xs sm:text-sm">
                    SA
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Sarah Anderson
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Card */}
            <Card>
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  "Fast shipping, premium packaging, and the product quality is
                  unmatched. EliteStore has become my go-to for luxury items."
                </p>
                <div className="flex items-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3 text-xs sm:text-sm">
                    MJ
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Michael Johnson
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Card */}
            <Card>
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  "The attention to detail is incredible. From the website
                  experience to the product delivery, everything is perfectly
                  executed."
                </p>
                <div className="flex items-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3 text-xs sm:text-sm">
                    EW
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Emily Wilson
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="text-center mt-10 sm:mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm md:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                <span className="font-semibold">4.9/5</span>
                <span>Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>
                  <span className="font-semibold">2,500+</span> Verified Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners & Media Mentions */}
      <section className="py-16 px-4 border-t">
        <div className="container mx-auto">
          <h2 className="text-center text-muted-foreground text-sm font-semibold mb-8 uppercase tracking-widest">
            Trusted by Leading Brands & Featured In
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-80">
            {/* Brand Partners */}
            {["TechCorp", "EliteDesign", "LuxuryBrand"].map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-12 transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent font-extrabold text-lg md:text-xl tracking-tight">
                  {brand}
                </div>
              </div>
            ))}

            {/* Media Mentions */}
            {[
              { name: "Forbes" },
              { name: "TechCrunch" },
              { name: "Wired" },
            ].map((media, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-12 transition-opacity duration-300 hover:opacity-100"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-semibold">{media.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Join over{" "}
              <span className="font-semibold text-primary">50,000+</span>{" "}
              satisfied customers worldwide
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
