
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Lightbulb, Palette, Code2, Rocket, Users, Zap, ChevronRight, Award, Clock, DollarSign } from "lucide-react";

export function Home() {
  const services = [
    {
      icon: Lightbulb,
      title: "MVP Development",
      description: "Launch your minimum viable product in 6-8 weeks with a scalable Bubble foundation.",
    },
    {
      icon: Code2,
      title: "Full Bubble Apps",
      description: "End-to-end development of production-ready web applications with custom logic.",
    },
    {
      icon: Zap,
      title: "Integrations & APIs",
      description: "Connect your Bubble app to any third-party service with seamless API integrations.",
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Custom UI/UX design that converts visitors into users with intuitive flows.",
    },
    {
      icon: Users,
      title: "Maintenance & Scaling",
      description: "Ongoing support, performance optimization, and scaling as your user base grows.",
    },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We dive deep into your vision, goals, and technical requirements." },
    { step: "02", title: "Design", description: "Wireframes and prototypes to validate the user experience." },
    { step: "03", title: "Build", description: "Agile development with weekly demos and continuous feedback." },
    { step: "04", title: "Launch", description: "Go live with confidence, backed by testing and optimization." },
  ];

  const caseStudies = [
    {
      title: "SaaS Marketplace Platform",
      description: "Multi-vendor marketplace with custom payment flows and subscription management.",
      result: "Launched in 8 weeks",
      metric: "$2.4M ARR",
    },
    {
      title: "Healthcare Booking System",
      description: "Patient scheduling, telehealth integration, and HIPAA-compliant data handling.",
      result: "40% faster booking",
      metric: "15K+ users",
    },
    {
      title: "Fintech Dashboard",
      description: "Real-time financial data visualization with custom reporting and analytics.",
      result: "$1.8M raised",
      metric: "3 months to MVP",
    },
  ];

  const testimonials = [
    {
      quote: "They turned our complex idea into a working product faster than we imagined. The Bubble expertise is unmatched.",
      author: "Sarah Chen",
      role: "CEO, TechStart",
    },
    {
      quote: "Professional, responsive, and technically brilliant. Our app has been running flawlessly since launch.",
      author: "Marcus Rodriguez",
      role: "Founder, GrowthLabs",
    },
    {
      quote: "The ROI was incredible. We validated our concept and secured funding within 4 months.",
      author: "Emily Park",
      role: "CTO, FinanceFlow",
    },
  ];

  const faq = [
    {
      question: "How long does a typical Bubble project take?",
      answer: "Most MVPs launch in 6-8 weeks. Full-featured applications typically take 3-4 months depending on complexity. We'll provide a detailed timeline during discovery.",
    },
    {
      question: "What's the cost of Bubble development?",
      answer: "Projects typically range from $15K-$80K+ depending on scope. We offer fixed-price packages for MVPs and custom quotes for larger applications. Book a call for a free estimate.",
    },
    {
      question: "Can you work with my existing Bubble app?",
      answer: "Absolutely. We offer app audits, refactoring, feature additions, and performance optimization for existing Bubble applications.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer flexible maintenance plans including bug fixes, feature updates, performance monitoring, and scaling support.",
    },
    {
      question: "What if I need features Bubble can't handle?",
      answer: "We can build custom plugins or integrate external APIs. For specific use cases, we can also recommend hybrid architectures that combine Bubble with custom code.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#f1ddc9] bg-gradient-to-br from-[#fff7ec] via-[#fffaf2] to-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-[#ff6b4a]/10 text-[#d94828] border-[#ff6b4a]/20 px-3 py-1">
              Bubble.io Certified Agency
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-[#26170e] sm:text-5xl lg:text-6xl">
              Build Your Vision with Bubble
              <span className="block text-[#d94828]">Development Experts</span>
            </h1>
            <p className="text-lg leading-relaxed text-[#6f5b4a] sm:text-xl">
              We turn ideas into production-ready web applications using Bubble.io. 
              Launch faster, iterate smarter, and scale confidently with our expert team.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild size="lg" className="bg-[#ff6b4a] text-white hover:bg-[#d94828] shadow-lg shadow-[#ff6b4a]/20">
                <Link to="#contact">
                  Book a Free Call
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#e7cdb4] bg-white text-[#26170e] hover:bg-[#fff7ec]">
                <Link to="#work">View Our Work</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-6 text-sm text-[#6f5b4a]">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#d94828]" />
                <span>6-8 week MVPs</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#d94828]" />
                <span>50+ apps launched</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-[#d94828]" />
                <span>$50M+ raised by clients</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-gradient-to-l from-[#ff6b4a]/5 to-transparent" />
      </section>

      {/* Trust Bar */}
      <section className="border-b border-[#f1ddc9] bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-center text-sm font-medium text-[#6f5b4a] mb-8">Trusted by founders and teams at</p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6 items-center opacity-60">
            <div className="flex justify-center">
              <div className="h-8 w-32 bg-[#6f5b4a]/20 rounded" />
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-32 bg-[#6f5b4a]/20 rounded" />
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-32 bg-[#6f5b4a]/20 rounded" />
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-32 bg-[#6f5b4a]/20 rounded" />
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-32 bg-[#6f5b4a]/20 rounded" />
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-32 bg-[#6f5b4a]/20 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-b border-[#f1ddc9] bg-[#faf8f4] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#26170e] sm:text-4xl">
              Everything You Need to Launch
            </h2>
            <p className="mt-4 text-lg text-[#6f5b4a]">
              From concept to launch, we provide comprehensive Bubble development services.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-[#f1ddc9] bg-white hover:border-[#ff6b4a]/30 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff6b4a]/10">
                        <IconComponent className="h-5 w-5 text-[#d94828]" />
                      </div>
                      <CardTitle className="text-xl text-[#26170e]">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#6f5b4a]">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-b border-[#f1ddc9] bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#26170e] sm:text-4xl">
              Our Proven Process
            </h2>
            <p className="mt-4 text-lg text-[#6f5b4a]">
              A streamlined approach that gets your product to market fast.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-start">
                  <div className="text-5xl font-bold text-[#ff6b4a]/20 mb-3">{step.step}</div>
                  <h3 className="text-xl font-semibold text-[#26170e] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6f5b4a]">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#f1ddc9] -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="border-b border-[#f1ddc9] bg-[#faf8f4] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#26170e] sm:text-4xl">
              Real Results, Real Impact
            </h2>
            <p className="mt-4 text-lg text-[#6f5b4a]">
              See how we've helped founders launch successful products.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-[#f1ddc9] bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#ff6b4a]/20 to-[#d94828]/10" />
                <CardHeader>
                  <CardTitle className="text-xl text-[#26170e]">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-[#6f5b4a]">{study.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#f1ddc9]">
                    <div>
                      <p className="text-xs text-[#6f5b4a]">Result</p>
                      <p className="text-sm font-semibold text-[#26170e]">{study.result}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#6f5b4a]">Impact</p>
                      <p className="text-sm font-semibold text-[#d94828]">{study.metric}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-[#f1ddc9] bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#26170e] sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-[#6f5b4a]">
              Don't just take our word for it.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-[#f1ddc9] bg-[#fffaf2]">
                <CardContent className="pt-6">
                  <p className="text-[#26170e] mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#ff6b4a]/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-[#d94828]">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#26170e]">{testimonial.author}</p>
                      <p className="text-xs text-[#6f5b4a]">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[#f1ddc9] bg-[#faf8f4] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#26170e] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-[#6f5b4a]">
              Everything you need to know about working with us.
            </p>
          </div>
          <Card className="border-[#f1ddc9] bg-white">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-[#26170e] hover:text-[#d94828]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#6f5b4a]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-gradient-to-br from-[#ff6b4a] to-[#d94828] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build Your App?
          </h2>
          <p className="text-lg text-white/90">
            Book a free 30-minute consultation to discuss your project and get a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Button asChild size="lg" className="bg-white text-[#d94828] hover:bg-[#f1ddc9] shadow-lg">
              <Link to="mailto:hello@bubbledev.agency">
                Schedule Your Free Call
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              <Link to="mailto:hello@bubbledev.agency">Email Us Directly</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
