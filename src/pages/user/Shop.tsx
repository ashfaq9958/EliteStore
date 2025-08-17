import { useState } from "react";
import {
  Search,
  Filter,
  Grid,
  List,
  ShoppingCart,
  Heart,
  Star,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

import c2 from "@/assets/carosuel/c2.jpg";
import c3 from "@/assets/carosuel/c3.jpg";
import c4 from "@/assets/carosuel/c4.jpg";
import c6 from "@/assets/carosuel/c6.jpg";
import headphone from "@/assets/headphone.jpg";
import jacket from "@/assets/jacket.jpg";
import glasses from "@/assets/sunglasses.jpg";
import watch from "@/assets/watch.jpg";

import ShopCarousel from "@/components/shopCarousel/ShopCarousel";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: headphone,
    category: "Electronics",
    rating: 4.8,
    reviews: 234,
    sale: true,
  },
  {
    id: 2,
    name: "Luxury Leather Jacket",
    price: 599.99,
    image: jacket,
    category: "Fashion",
    rating: 4.9,
    reviews: 156,
    sale: false,
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 249.99,
    originalPrice: 329.99,
    image: watch,
    category: "Electronics",
    rating: 4.7,
    reviews: 89,
    sale: true,
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 189.99,
    image: glasses,
    category: "Accessories",
    rating: 4.6,
    reviews: 67,
    sale: false,
  },
];

const Shop = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const image = [
    {
      heading: "Effortless Style, Everyday Confidence",
      subHeading:
        "Discover smart, versatile looks for work, weekends, and beyond.",
      img: c2,
      cta: "Shop Men’s Collection",
    },
    {
      heading: "Elevate Your Reading Experience",
      subHeading: "Bring stories to life with our next-gen VR headsets.",
      img: c4,
      cta: "Explore Now",
    },
    {
      heading: "Trendy Comfort For Kids",
      subHeading: "Stylish. Comfy. Adventure-ready.",
      img: c6,
      cta: "Shop Kids’ Collection",
    },
    {
      heading: "Redefine Your Wardrobe Today",
      subHeading: "Handpicked menswear blending comfort, quality, and style.",
      img: c3,
      cta: "Upgrade Your Wardrobe",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel */}
      <ShopCarousel heroImages={image} />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Shop Our Premium Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore curated selections of high-quality, luxury products crafted
            for style, comfort, and performance.
          </p>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 justify-between items-center">
          {/* Search Bar */}
          <div className="w-full lg:w-1/3 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2 items-center">
            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>

            {/* Filters Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold">Categories</h4>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline">Electronics</Button>
                    <Button variant="outline">Fashion</Button>
                    <Button variant="outline">Accessories</Button>
                  </div>
                  <h4 className="font-semibold mt-6">Price Range</h4>
                  <Input type="range" />
                </div>
              </SheetContent>
            </Sheet>

            {/* View Toggle */}
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Discount Badge */}
                {product.originalPrice && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    -
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    %
                  </Badge>
                )}

                {/* Quick Actions */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  <Button size="icon" variant="secondary" className="shadow-md">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="shadow-md">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4 space-y-2">
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button variant="cart" className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      {/* <div className="fixed bottom-6 right-6">
        <Button size="lg" className="rounded-full shadow-lg">
          <ShoppingCart className="mr-2 h-5 w-5" /> View Cart
        </Button>
      </div> */}
    </div>
  );
};

export default Shop;
