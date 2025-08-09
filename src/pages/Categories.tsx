import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Grid3X3,
  List,
  TrendingUp,
  Clock,
  DollarSign,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock category data
const featuredCategories = [
  {
    id: 1,
    name: "Smart Electronics",
    slug: "electronics",
    description: "Latest tech gadgets and devices",
    productCount: 245,
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop",
    trending: true,
    featured: true,
  },
  {
    id: 2,
    name: "Fashion & Style",
    slug: "fashion",
    description: "Trendy clothing and accessories",
    productCount: 389,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    trending: true,
    featured: true,
  },
  {
    id: 3,
    name: "Home & Living",
    slug: "home",
    description: "Transform your living space",
    productCount: 167,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    trending: false,
    featured: true,
  },
];

const allCategories = [
  ...featuredCategories,
  {
    id: 4,
    name: "Sports & Outdoors",
    slug: "sports",
    description: "Gear for active lifestyle",
    productCount: 156,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    trending: false,
    featured: false,
  },
  {
    id: 5,
    name: "Books & Media",
    slug: "books",
    description: "Knowledge and entertainment",
    productCount: 298,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    trending: false,
    featured: false,
  },
  {
    id: 6,
    name: "Health & Beauty",
    slug: "beauty",
    description: "Wellness and self-care",
    productCount: 234,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
    trending: true,
    featured: false,
  },
  {
    id: 7,
    name: "Toys & Games",
    slug: "toys",
    description: "Fun for all ages",
    productCount: 123,
    image:
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=300&fit=crop",
    trending: false,
    featured: false,
  },
  {
    id: 8,
    name: "Automotive",
    slug: "automotive",
    description: "Car accessories and tools",
    productCount: 89,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
    trending: false,
    featured: false,
  },
  {
    id: 9,
    name: "Pet Supplies",
    slug: "pets",
    description: "Everything for your furry friends",
    productCount: 145,
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
    trending: false,
    featured: false,
  },
];

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredCategories = allCategories
    .filter(
      (category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "popularity":
          return b.productCount - a.productCount;
        case "newest":
          return b.id - a.id;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const CategoryCard = ({
    category,
    featured = false,
  }: {
    category: (typeof allCategories)[0];
    featured?: boolean;
  }) => (
    <Link to={`/shop?category=${category.slug}`} className="group">
      <Card
        className={`overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 ${
          featured ? "ring-2 ring-primary/20" : ""
        }`}
      >
        <div className="relative overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2">
            {category.trending && (
              <Badge
                variant="secondary"
                className="bg-orange-500/90 text-white"
              >
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            )}
            {featured && (
              <Badge variant="secondary" className="bg-primary/90 text-white">
                Featured
              </Badge>
            )}
          </div>
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-foreground">
              {category.productCount} items
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {category.description}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );

  const CategoryListItem = ({
    category,
  }: {
    category: (typeof allCategories)[0];
  }) => (
    <Link to={`/shop?category=${category.slug}`} className="group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-elegant">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {category.trending && (
                <Badge
                  variant="outline"
                  className="border-orange-500 text-orange-500"
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
              <Badge variant="secondary">{category.productCount} items</Badge>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Categories</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header Section */}
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Shop by Category
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated collection of products across various
            categories. Find exactly what you're looking for with our organized
            shopping experience.
          </p>
        </div>

        {/* Featured Categories */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} featured />
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-12 p-6 bg-muted/40 rounded-xl border">
          <div className="flex-1 w-full max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="popularity">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Popularity
                    </div>
                  </SelectItem>
                  <SelectItem value="newest">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Newest
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-1 border rounded-md overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                className="rounded-none"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                className="rounded-none"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* All Categories */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              All Categories
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredCategories.length} categories found
            </span>
          </div>

          {filteredCategories.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                No categories found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or browse our featured
                categories above.
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {filteredCategories.map((category) =>
                viewMode === "grid" ? (
                  <CategoryCard key={category.id} category={category} />
                ) : (
                  <CategoryListItem key={category.id} category={category} />
                )
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
