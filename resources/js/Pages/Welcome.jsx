import { Head, Link } from '@inertiajs/react';
import WelcomeContent from './Welcome/WelcomeContent';
import { Button } from '@/Components/ui/button';
import { Calculator, Calendar, ChevronRight, Clock, Mail, MapPin, MessageSquare, Phone, Scale, Shield, Star } from 'lucide-react';
import { Card, CardContent } from '@/Components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/ui/accordion';



const features = [
  {
    icon: Calendar,
    title: "Book Appointments",
    description: "Find top dentists near you",
    gradient: "from-primary to-primary/80",
  },
  {
    icon: Calculator,
    title: "Cost Estimator",
    description: "Get an instant price range",
    gradient: "from-accent to-accent/80",
  },
  {
    icon: MessageSquare,
    title: "Second Opinion",
    description: "Advice from verified experts",
    gradient: "from-info to-info/80",
  },
  {
    icon: Scale,
    title: "Compare Prices",
    description: "Make informed decisions",
    gradient: "from-success to-success/80",
  },
];

const faqs = [
  {
    question: "Is my data secure?",
    answer: "Yes, your data is fully encrypted and protected with industry-leading security standards. We use end-to-end encryption for all sensitive information and comply with HIPAA regulations to ensure your dental records and personal information remain private and secure.",
  },
  {
    question: "Can I cancel an appointment?",
    answer: "Yes you can cancel the appointment through our app.",
  },
  {
    question: "Do I need insurance?",
    answer: "Insurance is not required to use our services - we provide transparent pricing for all treatments so you can make informed decisions regardless of your insurance status.",
  },
];


export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>

 <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-2  ">
                <img className="h-15" src="/images/odw-logo-h.png" alt="Logo"   width='auto' />
             
            
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          {/* <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                Admin Portal
              </Button>
            </Link>
            <a href="#download">
              <Button size="sm">
                Download App
              </Button>
            </a>
          </div> */}
        </div>
      </header>


 {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            // src={heroDental} 
            alt="Happy family at dental clinic" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-1.5 text-sm font-medium shadow-sm">
                <Star className="h-4 w-4 text-warning" />
                <span className="text-muted-foreground">Trusted by 10,000+ patients</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Your Dental Care,{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Simplified!
                </span>
              </h1>
              
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Book appointments, compare costs, and get expert advice—all in one app.
              </p>
              
              {/* App Store Badges */}
              <div id="download" className="flex flex-wrap items-center gap-4">
                  <a href="https://apps.apple.com/in/app/onedentalworld/id6756610992" className="transition-transform hover:scale-105" target="_blank">
                  <img 
                    src="/images/common/get-it-on-apple.svg" 
                    alt="Download on the App Store" 
                    className="h-12"
                  />
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.onedentalworld" className="transition-transform hover:scale-105" target="_blank">
                  <img 
                    src="/images/common/get-it-on-google.png"
                      alt="Get it on Google Play" 
                  
                    className="h-12"
                  />
                </a>
              
              </div>
            </div>

            {/* App Mockup */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
                <img 
                             
                  src="/images/hero-option2.jpeg"
                  alt="DentalCare App Preview" 
                  className="relative h-[500px] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive dental care management at your fingertips
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                  <ChevronRight className="mt-4 h-5 w-5 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


 <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl rounded-3xl" />
                <img 
                  
                  alt="Dentist consultation" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Expert Care at Your Fingertips
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Connect with verified dental professionals for second opinions, treatment consultations, and personalized care recommendations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Shield className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Verified Experts</p>
                    <p className="text-sm text-muted-foreground">All dentists are licensed and verified</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Quick Response</p>
                    <p className="text-sm text-muted-foreground">Get answers within 24 hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Calculator className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Transparent Pricing</p>
                    <p className="text-sm text-muted-foreground">Know costs before your visit</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

 {/* Testimonial Section */}
      <section id="testimonials" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="relative overflow-hidden border-0 bg-card shadow-xl">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />
              <CardContent className="p-8 md:p-12">
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-warning text-warning" />
                  ))}
                </div>
                
                <blockquote className="mb-8 text-xl leading-relaxed text-foreground md:text-2xl">
                  "Booking an appointment was so easy! I got an instant cost estimate and even compared prices across clinics. The second opinion feature helped me feel confident about my treatment.{" "}
                  <span className="font-semibold text-primary">Highly recommended!</span>"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-xl font-bold text-primary-foreground">
                    D
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">David</p>
                    <p className="text-sm text-muted-foreground">Happy customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-xl border border-border bg-card px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
              <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    Haven't found an answer to your question?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Send us a message and we'll get back to you.
                  </p>
                </div>
                <Button className="shrink-0">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground md:p-12">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    Get in Touch
                  </h2>
                  <p className="mb-8 opacity-90">
                    Our offices are open all 7 days, 24 x 7 for emergencies available on call
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm opacity-70">Phone</p>
                        <p className="font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm opacity-70">Email</p>
                        <p className="font-medium">support@dentalcare.app</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm opacity-70">Address</p>
                        <p className="font-medium">123 Healthcare Ave, Medical District</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="flex flex-col justify-center p-8 md:p-12">
                  {/* <div className="mb-6 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">HIPAA Compliant</span>
                  </div> */}
                  
                  <div className="mb-6 flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">24/7 Emergency Support</span>
                  </div>
                  
                  <p className="mb-6 text-muted-foreground">
                    Download our app today and take control of your dental health.
                  </p>
                  
                  {/* App Store Badges */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a href="https://apps.apple.com/in/app/onedentalworld/id6756610992" className="transition-transform hover:scale-105">
                      <img 
                      src="/images/common/get-it-on-apple.svg" 
                        alt="Download on the App Store" 
                        className="h-10"
                      />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.onedentalworld" className="transition-transform hover:scale-105">
                      <img 
                        src="/images/common/get-it-on-google.png"
                        alt="Get it on Google Play" 
                        className="h-10"
                      />
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
               <img src="/images/odw-logo-h.png" alt="" className='h-14' />
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2025-26 OneDentalWorld. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
               App Support
              </Link>
            </div>
          </div>
        </div>
      </footer>

           

         

        </>
    );
}
