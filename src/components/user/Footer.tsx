import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">EliteStore</h3>
            <p className="text-muted-foreground">
              Your premium destination for luxury products with exceptional
              quality and unmatched elegance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ashfaqahmad99/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="transition-transform hover:scale-110"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>

              <a
                href="https://www.instagram.com/yusufkhan.845/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="transition-transform hover:scale-110"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="transition-transform hover:scale-110"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="transition-transform hover:scale-110"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/cart"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Cart
              </Link>
              <Link
                to="/checkout"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Checkout
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Help Center
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Returns & Exchanges
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Shipping Info
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Size Guide
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <form
              className="flex gap-2 items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                required
              />
              <Button variant="premium" size="sm" type="submit">
                Subscribe
              </Button>
            </form>

            <div className="space-y-3 pt-4">
              <h5 className="font-medium">Contact Info</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91-8077718530</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>support@elitestore.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Premium Street, Luxury City, LC 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="text-center md:text-left">
            &copy; {currentYear} EliteStore. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
