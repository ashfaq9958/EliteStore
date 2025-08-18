import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import headphone from "@/assets/headphone.jpg";
import jacket from "@/assets/jacket.jpg";
import glasses from "@/assets/sunglasses.jpg";
import watch from "@/assets/watch.jpg";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [product, setProduct] = useState<any>(null);
  const { id } = useParams();

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
      stock: 45,
      description:
        "Experience crystal-clear sound with deep bass and active noise cancellation. Perfect for travel, work, and everyday listening.",
      features: [
        "Active Noise Cancellation",
        "Bluetooth 5.2 Connectivity",
        "Built-in Microphone for Calls",
        "Comfortable Over-Ear Design",
      ],
      sizes: [],
      colors: ["Black", "Silver", "Blue"],
      specifications: {
        Weight: "250g",
        "Battery Life": "30 hours",
        "Charging Time": "2 hours",
        "Frequency Response": "20Hz - 40kHz",
        Impedance: "32 ohms",
      },
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
      stock: 20,
      description:
        "Crafted from premium genuine leather, this timeless jacket offers style, comfort, and durability for all occasions.",
      features: [
        "100% Genuine Leather",
        "Breathable Lining",
        "Slim-Fit Tailoring",
        "Durable Zippers and Buttons",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Brown"],
      specifications: {
        Material: "Genuine Leather",
        "Lining Material": "Polyester",
        Weight: "1.2kg",
        Fit: "Slim Fit",
        Care: "Dry Clean Only",
      },
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
      stock: 60,
      description:
        "Stay on top of your health with advanced fitness tracking, heart rate monitoring, and sleek design for everyday wear.",
      features: [
        "Heart Rate & Sleep Monitoring",
        "Water Resistant (5 ATM)",
        "GPS Tracking",
        "Customizable Watch Faces",
      ],
      sizes: [],
      colors: ["Black", "Silver", "Rose Gold"],
      specifications: {
        Weight: "80g",
        "Battery Life": "7 days",
        "Charging Time": "1.5 hours",
        Display: "1.4-inch AMOLED",
        Connectivity: "Bluetooth, GPS",
      },
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
      stock: 35,
      description:
        "Elevate your look with UV-protected designer sunglasses that blend modern style with ultimate eye protection.",
      features: [
        "100% UV Protection",
        "Scratch-Resistant Lenses",
        "Lightweight Frame",
        "Includes Carry Case & Cloth",
      ],
      sizes: ["One Size"],
      colors: ["Black", "Gold", "Tortoise"],
      specifications: {
        Weight: "120g",
        Material: "Polycarbonate Lenses, Metal Frame",
        Protection: "UV400",
        FrameWidth: "140mm",
        LensWidth: "58mm",
      },
    },
  ];

  useEffect(() => {
    const found = products.find((item) => String(item.id) === id);
    setProduct(found || null);
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">Product not found...</p>
      </div>
    );
  }

  console.log(product);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>{" "}
          {" / "}
          <Link to="/shop" className="hover:text-primary">
            Shop
          </Link>{" "}
          {" / "}
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-500 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <Separator />
            </div>

            {/* Price & Stock */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <Badge className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              )}
              <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                {product.stock > 5 ? "In Stock" : `Only ${product.stock} left!`}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Options */}
            <div className="space-y-4">
              {product.sizes.length > 0 && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <label className="text-sm font-medium mb-2 block">Color</label>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        selectedColor === color
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Quantity
                </label>
                <Select
                  value={quantity.toString()}
                  onValueChange={(value) => setQuantity(parseInt(value))}
                >
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4 flex-wrap">
                <Button variant="cart" size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button variant="premium" size="lg" className="w-full">
                Buy Now
              </Button>

              <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
                <span>🔒 Secure Payment</span>
                <span>💳 Visa / MasterCard / PayPal</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">
                      On orders over $100
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">2 Year Warranty</p>
                    <p className="text-xs text-muted-foreground">
                      Full coverage
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">30-Day Returns</p>
                    <p className="text-xs text-muted-foreground">
                      Hassle-free returns
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b"
                        >
                          <span className="font-medium">{key}</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Customer Reviews
                  </h3>
                  <p className="text-muted-foreground">
                    Reviews coming soon...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
