import { useState } from "react";
import { Search, Filter, Grid, List, ShoppingCart, Heart } from "lucide-react";
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
import { Link } from "react-router-dom";
import c4 from "@/assets/carosuel/c4.jpg";
import c2 from "@/assets/carosuel/c2.jpg";
import c3 from "@/assets/carosuel/c3.jpg";
import c6 from "@/assets/carosuel/c6.jpg";
import c1 from "@/assets/carosuel/c1.jpg";
import HeroCarousel from "@/components/heroCarousel/HeroCarousel";
import ShopCarousel from "@/components/shopCarousel/ShopCarousel";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "/placeholder.svg",
    category: "Electronics",
    rating: 4.8,
    reviews: 234,
    sale: true,
  },
  {
    id: 2,
    name: "Luxury Leather Jacket",
    price: 599.99,
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
    category: "Electronics",
    rating: 4.7,
    reviews: 89,
    sale: true,
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 189.99,
    image: "/placeholder.svg",
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

  // const images = [c4, c5, c7, c6];
  const image = [
    {
      heading: "Effortless Style, Everyday Confidence",
      subHeading:
        "Discover versatile outfits that balance sharp tailoring with all-day ease—perfect for work, weekends, and beyond.",
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
      subHeading: "Fun, stylish, and comfy looks for every kid’s adventure.",
      img: c6,
      cta: "Shop Kids’ Collection",
    },
    {
      heading: "Redefine Your Wardrobe Today",
      subHeading:
        "Find the perfect balance of comfort, quality, and style with our handpicked menswear edit.",
      img: c3,
      cta: "Upgrade Your Look",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ShopCarousel heroImages={image} />
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        {/* <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div> */}
        {/* Page Header */}
        {/* <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Shop All Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated selection of high-quality, premium products
            designed to elevate your lifestyle.
          </p>
        </div> */}

        {/* Filters and Search */}
        {/* <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex gap-2">
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

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>

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
        </div> */}

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
              className="group overflow-hidden hover:shadow-card transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.sale && (
                  <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                    Sale
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-muted-foreground ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
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
    </div>
  );
};

export default Shop;
