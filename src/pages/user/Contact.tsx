import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Loader2,
} from "lucide-react";

import contactHero from "@/assets/contact-hero.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject is too short"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const setSEO = () => {
  const title = "Contact Us | EliteStore";
  const description =
    "Contact EliteStore for product questions, orders, or support. Reach us via email, phone, or the contact form.";
  document.title = title;

  const ensureTag = (selector: string, create: () => HTMLElement) => {
    let el = document.head.querySelector(selector) as HTMLElement | null;
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    return el;
  };

  const metaDesc = ensureTag('meta[name="description"]', () => {
    const m = document.createElement("meta");
    m.setAttribute("name", "description");
    return m;
  }) as HTMLMetaElement;
  metaDesc.setAttribute("content", description);

  const linkCanonical = ensureTag('link[rel="canonical"]', () => {
    const l = document.createElement("link");
    l.setAttribute("rel", "canonical");
    return l;
  }) as HTMLLinkElement;
  linkCanonical.setAttribute("href", `${window.location.origin}/contact`);

  // Structured data (ContactPage + Organization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact EliteStore",
    url: `${window.location.origin}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "EliteStore",
      url: window.location.origin,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@elitestore.com",
          telephone: "+1 (555) 123-4567",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      ],
    },
  };

  const existing = document.getElementById("ld-contact");
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "ld-contact";
  script.text = JSON.stringify(jsonLd);
  document.head.appendChild(script);
};

const Contact: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
    mode: "onTouched",
  });
  const { toast } = useToast();

  useEffect(() => {
    setSEO();
  }, []);

  const onSubmit = async (values: FormValues) => {
    try {
      // Simulate async submission
      await new Promise((res) => setTimeout(res, 800));
      toast({
        title: "Message sent",
        description: "Thanks! We’ll get back to you within 24 hours.",
      });
      form.reset();
    } catch (e) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <header className="relative">
        <div className="h-[260px] sm:h-[360px] w-full overflow-hidden">
          <img
            src={contactHero}
            alt="Contact EliteStore hero banner"
            className="h-full w-full object-cover scale-105"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="absolute bottom-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <a href="/">Home</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Contact</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              We’re here to help
            </h1>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Questions, orders, or feedback? Our friendly team is ready to
              assist you.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <section className="lg:col-span-2 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form and we’ll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    className="space-y-6"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={6}
                              placeholder="Write your message here..."
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            We typically respond within one business day.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm text-muted-foreground">
                        By submitting, you agree to our terms and privacy
                        policy.
                      </p>
                      <Button
                        type="submit"
                        className="hover-scale"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </section>

          {/* Contact details */}
          <aside className="space-y-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Contact details</CardTitle>
                <CardDescription>
                  Reach us directly via the channels below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="mailto:support@elitestore.com"
                  className="flex items-start gap-3 group"
                >
                  <span className="mt-1 rounded-md p-2 bg-muted">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      support@elitestore.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Email us anytime
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+15551234567"
                  className="flex items-start gap-3 group"
                >
                  <span className="mt-1 rounded-md p-2 bg-muted">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon–Fri, 9am–6pm
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <span className="mt-1 rounded-md p-2 bg-muted">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium">
                      123 Market Street, New York, NY
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Visit our flagship store
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-medium mb-2">Follow us</p>
                  <div className="flex items-center gap-3">
                    <a
                      aria-label="Facebook"
                      href="#"
                      className="rounded-md p-2 bg-muted hover:bg-accent transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      aria-label="Twitter"
                      href="#"
                      className="rounded-md p-2 bg-muted hover:bg-accent transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      aria-label="Instagram"
                      href="#"
                      className="rounded-md p-2 bg-muted hover:bg-accent transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      aria-label="LinkedIn"
                      href="#"
                      className="rounded-md p-2 bg-muted hover:bg-accent transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden animate-fade-in">
              <CardHeader>
                <CardTitle>Our location</CardTitle>
                <CardDescription>Find us on the map</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    title="EliteStore location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9990696749504!2d-73.98513012364094!3d40.7588961713801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d1f9b5fb%3A0x2f0e6a9b6a9f!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full rounded-md border"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Contact;
