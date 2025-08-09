import React, { useEffect } from "react";
import hero from "@/assets/hero-banner.jpg";
import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Truck,
  Sparkles,
  Users,
  Star,
  Quote,
  BadgeCheck,
} from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PartnersCarousel from "@/components/about/PartnersCarousel";
import AboutStorySection from "@/components/about/Story";

const setSEO = () => {
  const title = "About EliteStore | Our Story & Team";
  const description =
    "Discover EliteStore's mission, values, team, milestones, and partners. Premium shopping with trust and innovation.";
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
  linkCanonical.setAttribute("href", `${window.location.origin}/about`);

  // Structured data (AboutPage + Organization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About EliteStore",
    url: `${window.location.origin}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "EliteStore",
      url: window.location.origin,
      logo: `${window.location.origin}/favicon.ico`,
      sameAs: [
        "https://facebook.com/elitestore",
        "https://twitter.com/elitestore",
        "https://instagram.com/elitestore",
        "https://www.linkedin.com/company/elitestore",
      ],
    },
  };
  const existing = document.getElementById("ld-about");
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "ld-about";
  script.text = JSON.stringify(jsonLd);
  document.head.appendChild(script);
};

const values = [
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Customer-first",
    desc: "We obsess over experiences that delight and empower.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Trust & Quality",
    desc: "Carefully curated products, transparent policies.",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Fast Delivery",
    desc: "Swift, reliable shipping from our global network.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Innovation",
    desc: "Continuously improving to bring you more value.",
  },
];

const team = [
  { name: "Alex Carter", role: "CEO", img: "/placeholder.svg" },
  { name: "Jamie Lee", role: "Head of Product", img: "/placeholder.svg" },
  { name: "Taylor Morgan", role: "Marketing Lead", img: "/placeholder.svg" },
  { name: "Riley Brooks", role: "Operations", img: "/placeholder.svg" },
];

const milestones = [
  {
    year: "2019",
    text: "EliteStore founded with a mission to elevate online shopping.",
  },
  { year: "2020", text: "Launched our first private-label collection." },
  { year: "2022", text: "Reached 1M+ happy customers globally." },
  { year: "2024", text: "Expanded same-day delivery to 20+ cities." },
];

const testimonials = [
  {
    name: "Jordan P.",
    text: "EliteStore sets the bar for quality and service.",
    rating: 5,
  },
  {
    name: "Morgan S.",
    text: "Fast shipping and beautiful packaging—love it!",
    rating: 5,
  },
  { name: "Casey R.", text: "Support team was incredibly helpful.", rating: 5 },
];

const partners = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const About: React.FC = () => {
  useEffect(() => {
    setSEO();
  }, []);

  return (
    <>
      <header className="relative">
        <div className="h-[280px] sm:h-[360px] w-full overflow-hidden">
          <img
            src={hero}
            alt="EliteStore hero banner"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/70" />
        <div className="container mx-auto px-4">
          <div className="absolute bottom-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <a href="/">Home</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              About EliteStore
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Crafting a premium shopping experience through design, trust, and
              innovation.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fade-in">
          {/* Mission Section */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We’re on a mission to elevate everyday shopping with a curated
              selection of premium products, delightful experiences, and
              world-class support. We believe in long-lasting quality,
              transparent values, and building a community of customers who
              truly love what they buy.
            </p>
          </div>

          {/* Values Card */}
          <Card className="border border-border/60 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">What We Value</CardTitle>
              <CardDescription>Principles that guide our work</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 sm:grid-cols-1  gap-5">
                {values.map((v) => (
                  <li key={v.title} className="flex gap-3 group items-center">
                    <span className="rounded-md p-2 bg-muted/50 group-hover:bg-muted transition-colors">
                      {v.icon}
                    </span>
                    <div>
                      <p className="font-semibold">{v.title}</p>
                      <p className="text-sm text-muted-foreground">{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Story */}
        <AboutStorySection />

        {/* Team */}
        <section className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">Meet the team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m) => (
              <Card key={m.name} className="hover-scale">
                <CardContent className="pt-6 text-center">
                  <Avatar className="mx-auto h-16 w-16">
                    <AvatarImage src={m.img} alt={`${m.name} profile photo`} />
                    <AvatarFallback>
                      {m.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <p className="mt-3 font-medium">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Milestones / Timeline */}
        <section className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">Milestones</h2>
          </div>
          <ol className="relative border-l pl-6">
            {milestones.map((ms) => (
              <li key={ms.year} className="mb-8">
                <div
                  className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-primary"
                  aria-hidden
                />
                <p className="text-sm text-muted-foreground">{ms.year}</p>
                <p className="mt-1 font-medium">{ms.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Testimonials */}
        <section className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-3">
            <BadgeCheck className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">What customers say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-muted-foreground">{t.text}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                    <Quote className="h-4 w-4" /> {t.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-2xl font-semibold">Trusted by leading brands</h2>
          <PartnersCarousel partners={partners} />
        </section>
      </main>
    </>
  );
};

export default About;
