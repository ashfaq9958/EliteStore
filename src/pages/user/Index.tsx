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
import Header from "@/components/user/Header";
import Footer from "@/components/user/Footer";
import heroImage from "@/assets/hero-banner.jpg";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
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
                // variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Admin Panel
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-primary-foreground text-sm sm:text-base text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              <span className="font-medium">
                Free shipping on orders over $100
              </span>
            </div>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span className="font-medium">
                Use code: <strong>FREESHIP</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales & Deals */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Flash Sale */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="destructive" className="animate-pulse">
                    <Clock className="w-3 h-3 mr-1" />
                    Flash Sale
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Ends in 2h 15m
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Up to 60% Off</h3>
                <p className="text-muted-foreground mb-4">
                  Premium electronics and accessories
                </p>
                <Button variant="default" className="w-full">
                  Shop Flash Sale
                </Button>
              </CardContent>
            </Card>

            {/* Deal of the Day */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">
                    <Gift className="w-3 h-3 mr-1" />
                    Deal of the Day
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">Wireless Headphones</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">$89</span>
                  <span className="text-lg line-through text-muted-foreground">
                    $149
                  </span>
                  <Badge variant="outline">40% OFF</Badge>
                </div>
                <Button variant="default" className="w-full">
                  Claim Deal
                </Button>
              </CardContent>
            </Card>

            {/* Coupon Code */}
            <Card className="relative overflow-hidden bg-accent">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Exclusive Coupon</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">SAVE20</h3>
                <p className="text-muted-foreground mb-4">
                  Get 20% off your first order
                </p>
                <div className="flex gap-2">
                  <Input
                    value="SAVE20"
                    readOnly
                    className="font-mono text-center"
                  />
                  <Button variant="outline" size="sm">
                    Copy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose EliteStore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Carefully curated products with exceptional quality standards
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Free shipping on orders over $100 with express delivery
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
                <p className="text-muted-foreground">
                  Your data and payments are protected with enterprise-grade
                  security
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust EliteStore for their
            premium shopping needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Absolutely exceptional quality! The products exceeded my
                  expectations and the customer service was outstanding. Will
                  definitely shop here again."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                    SA
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Anderson</p>
                    <p className="text-sm text-muted-foreground">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Fast shipping, premium packaging, and the product quality is
                  unmatched. EliteStore has become my go-to for luxury items."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                    MJ
                  </div>
                  <div>
                    <p className="font-semibold">Michael Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The attention to detail is incredible. From the website
                  experience to the product delivery, everything is perfectly
                  executed."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                    EW
                  </div>
                  <div>
                    <p className="font-semibold">Emily Wilson</p>
                    <p className="text-sm text-muted-foreground">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold">4.9/5</span>
                <span>Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Brand Partners */}
            <div className="flex items-center justify-center h-12">
              <div className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent font-extrabold text-2xl tracking-tight">
                TechCorp
              </div>
            </div>
            <div className="flex items-center justify-center h-12">
              <div className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-bold text-xl">
                EliteDesign
              </div>
            </div>
            <div className="flex items-center justify-center h-12">
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-xl">
                LuxuryBrand
              </div>
            </div>

            {/* Media Mentions */}
            <div className="flex items-center justify-center h-12">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary shrink-0" />
                <span className="font-semibold">Forbes</span>
              </div>
            </div>
            <div className="flex items-center justify-center h-12">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-semibold">TechCrunch</span>
              </div>
            </div>
            <div className="flex items-center justify-center h-12">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-semibold">Wired</span>
              </div>
            </div>
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

      {/* <Footer /> */}
    </div>
  );
};

export default Index;
