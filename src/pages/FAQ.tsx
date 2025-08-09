import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Shipping & Delivery",
      items: [
        {
          question: "How long does shipping take?",
          answer:
            "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) and overnight options are also available at checkout.",
        },
        {
          question: "Do you offer free shipping?",
          answer:
            "Yes! We offer free standard shipping on all orders over $50. Orders under $50 have a flat shipping rate of $5.99.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Absolutely! Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Currently, we ship to the United States and Canada. International shipping rates and delivery times vary by location.",
        },
      ],
    },
    {
      title: "Returns & Exchanges",
      items: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some items like personalized products are final sale.",
        },
        {
          question: "How do I start a return?",
          answer:
            "You can initiate a return through your account dashboard or contact our customer service team. We'll provide you with a prepaid return label for eligible items.",
        },
        {
          question: "When will I receive my refund?",
          answer:
            "Refunds are processed within 3-5 business days after we receive your returned item. The refund will appear on your original payment method within 5-10 business days.",
        },
        {
          question: "Can I exchange an item for a different size/color?",
          answer:
            "Yes! You can exchange items for a different size or color within 30 days. Simply select 'Exchange' when starting your return process.",
        },
      ],
    },
    {
      title: "Payment & Pricing",
      items: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your complete credit card information on our servers.",
        },
        {
          question: "Do you offer price matching?",
          answer:
            "We don't currently offer price matching, but we regularly run sales and promotions. Sign up for our newsletter to be the first to know about deals!",
        },
        {
          question: "Can I use multiple discount codes?",
          answer:
            "Only one discount code can be applied per order. The system will automatically apply the code that gives you the greatest savings.",
        },
      ],
    },
    {
      title: "Account & Orders",
      items: [
        {
          question: "How do I create an account?",
          answer:
            "Click 'Sign Up' at the top of any page and fill in your details. Having an account allows you to track orders, save favorites, and checkout faster.",
        },
        {
          question: "Can I modify or cancel my order?",
          answer:
            "Orders can be modified or cancelled within 1 hour of placement. After that, our fulfillment team begins processing and changes may not be possible.",
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer:
            "Click 'Forgot Password' on the login page and enter your email address. We'll send you a link to reset your password.",
        },
        {
          question: "Can I save items for later?",
          answer:
            "Yes! Click the heart icon on any product to add it to your wishlist. You can view your saved items in your account dashboard.",
        },
      ],
    },
    {
      title: "Product Information",
      items: [
        {
          question: "How do I know what size to order?",
          answer:
            "Each product page includes a detailed size chart. You can also check our general sizing guide in the footer under 'Size Guide'.",
        },
        {
          question: "Are your products authentic?",
          answer:
            "Yes, we only sell 100% authentic products directly from authorized distributors and brand partners.",
        },
        {
          question: "When will out-of-stock items be restocked?",
          answer:
            "Restock dates vary by product. You can sign up for restock notifications on any out-of-stock product page to be notified when it's available again.",
        },
        {
          question: "Do you offer product warranties?",
          answer:
            "Many of our products come with manufacturer warranties. Warranty information is available on individual product pages when applicable.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about shopping, shipping, returns,
            and more. Can't find what you're looking for? Contact our customer
            service team.
          </p>
        </section>

        {/* FAQ Categories */}
        <section className="grid gap-10 mb-20">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="w-full shadow-sm border-muted">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`${categoryIndex}-${itemIndex}`}
                    >
                      <AccordionTrigger className="text-left font-medium text-base">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Contact Section */}
        <section>
          <Card className="max-w-4xl mx-auto shadow-md border-muted">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl font-semibold">
                Still Need Help?
              </CardTitle>
              <p className="text-muted-foreground">
                Our customer service team is here to help you with any questions
                or concerns.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Support",
                    desc: "Get help via email within 24 hours",
                    action: "Send Email",
                  },
                  {
                    icon: Phone,
                    title: "Phone Support",
                    desc: "Mon-Fri 9AM-6PM EST",
                    action: "Call Now",
                  },
                  {
                    icon: MessageCircle,
                    title: "Live Chat",
                    desc: "Get instant help from our team",
                    action: "Start Chat",
                  },
                ].map(({ icon: Icon, title, desc, action }, idx) => (
                  <div
                    key={idx}
                    className="text-center p-6 border rounded-xl hover:shadow transition-all"
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-base mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{desc}</p>
                    <Button variant="outline" size="sm" className="rounded-md">
                      {action}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
