"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlayBottomSplit from '@/components/sections/hero/HeroOverlayBottomSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardThirteen from '@/components/sections/feature/FeatureCardThirteen';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="plain"
      cardStyle="floating"
      primaryButtonStyle="outline"
      secondaryButtonStyle="outline"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="AutoHub"
          button={{
            text: "Browse Cars",
            href: "#products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlayBottomSplit
          title="Drive Your Dream Car Today"
          description="Discover our premium collection of luxury vehicles. From sports cars to family SUVs, find the perfect car with competitive pricing and exceptional service."
          buttons={[
            {
              text: "Browse Inventory",
              href: "#products"
            },
            {
              text: "Get Quote",
              href: "#contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765457942281-ruq5ylhl.jpg"
          imageAlt="Luxury sports car on scenic highway"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About AutoHub"
          description="We are a trusted automotive marketplace dedicated to connecting buyers with their perfect vehicle. With over 500 premium cars in stock, transparent pricing, and dedicated customer support, we make car buying simple and transparent."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Inventory"
          description="Browse our handpicked selection of premium vehicles available right now"
          tag="New Arrivals"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          gridVariant="three-columns-all-equal-width"
          containerStyle="default"
          products={[
            {
              id: "1",
              name: "2024 Tesla Model S",
              price: "$89,999",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765457943802-j30mq4vl.jpg"
            },
            {
              id: "2",
              name: "2023 BMW X5 Premium",
              price: "$72,500",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765457945829-mjr2jcip.jpg"
            },
            {
              id: "3",
              name: "2024 Ford F-150 Raptor",
              price: "$68,750",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765457947145-solrkl7b.jpg"
            }
          ]}
        />
      </div>

      <div id="categories" data-section="categories">
        <FeatureCardThirteen
          title="Vehicle Categories"
          description="Explore our wide range of vehicles across all major categories"
          tag="Find Your Type"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          containerStyle="default"
          features={[
            {
              id: "01",
              title: "Sedans",
              description: "Sleek and efficient sedans perfect for daily commuting and long drives"
            },
            {
              id: "02",
              title: "SUVs",
              description: "Spacious SUVs ideal for families and adventure seekers"
            },
            {
              id: "03",
              title: "Trucks",
              description: "Powerful trucks for work and weekend adventures"
            },
            {
              id: "04",
              title: "Sports Cars",
              description: "High-performance coupes for the ultimate driving experience"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Customers Say"
          description="Hear from satisfied buyers who found their perfect car with AutoHub"
          tag="Customer Stories"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Michael Johnson, Chicago",
              date: "Date: 15 November 2024",
              title: "Perfect car buying experience",
              quote: "The entire process was smooth and transparent. AutoHub helped me find the perfect Tesla within my budget. Their team was knowledgeable and supportive throughout.",
              tag: "Tesla Model S",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765457955393-s1blz0jk.jpg"
            },
            {
              id: "2",
              name: "Sarah Williams, Los Angeles",
              date: "Date: 12 November 2024",
              title: "Excellent service and fair pricing",
              quote: "I was amazed at how quickly I found my dream BMW X5. The team went above and beyond to ensure I got the best deal possible. Highly recommend!",
              tag: "BMW X5",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765457956657-zpv4h51i.jpg"
            },
            {
              id: "3",
              name: "Robert Chen, Seattle",
              date: "Date: 08 November 2024",
              title: "Best truck buying experience ever",
              quote: "Found my Ford F-150 faster than expected. AutoHub's transparent pricing and no-pressure approach made this the best car purchase I've ever made.",
              tag: "Ford F-150",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765457957901-cmlnkxsu.jpg"
            },
            {
              id: "4",
              name: "Jennifer Martinez, Miami",
              date: "Date: 05 November 2024",
              title: "Outstanding customer support",
              quote: "From the first inquiry to delivery, AutoHub provided exceptional service. The team made sure everything was perfect. Worth every dollar!",
              tag: "Luxury Vehicle",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765457959055-7ne4go72.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Get answers to common questions about our vehicles and services"
          tag="Help & Support"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765457965726-uddncrxq.jpg"
          imageAlt="Professional car service center"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What warranty do you provide?",
              content: "All our vehicles come with a minimum 12-month warranty on major components. Extended warranties up to 5 years are available for additional peace of mind."
            },
            {
              id: "2",
              title: "Do you offer financing options?",
              content: "Yes, we partner with leading financial institutions to offer competitive financing rates. We can arrange financing for up to 84 months with approved credit."
            },
            {
              id: "3",
              title: "How do you price your vehicles?",
              content: "Our pricing is based on market value, vehicle condition, mileage, and features. All our prices are fully transparent with no hidden fees."
            },
            {
              id: "4",
              title: "Can I trade in my current vehicle?",
              content: "Absolutely! We offer competitive trade-in valuations. Bring your vehicle in for an inspection and we'll provide a fair market offer."
            },
            {
              id: "5",
              title: "What is your return policy?",
              content: "We offer a 7-day money-back guarantee if you're not completely satisfied with your purchase. No questions asked."
            },
            {
              id: "6",
              title: "How long does delivery take?",
              content: "We offer same-day pickup for local customers and delivery within 3-5 business days for vehicles purchased online."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have questions about our vehicles or ready to make your purchase? Contact our team today and we'll help you find the perfect car."
          useInvertedBackground="noInvert"
          mediaPosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765457967149-jhiina3l.jpg"
          imageAlt="Modern car dealership showroom"
          buttonText="Send Inquiry"
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "preferredCar",
              type: "text",
              placeholder: "Vehicle of Interest",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us more about what you're looking for...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="AutoHub"
          copyrightText="© AutoHub Automotive, Inc. 2025"
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Our Team",
                  href: "#team"
                },
                {
                  label: "Careers",
                  href: "#careers"
                }
              ]
            },
            {
              title: "Vehicles",
              items: [
                {
                  label: "Featured Cars",
                  href: "#products"
                },
                {
                  label: "Browse All",
                  href: "#inventory"
                },
                {
                  label: "Compare",
                  href: "#compare"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "#faq"
                },
                {
                  label: "Contact Us",
                  href: "#contact"
                },
                {
                  label: "Warranty Info",
                  href: "#warranty"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "/terms"
                },
                {
                  label: "Cookie Policy",
                  href: "/cookies"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "Follow us on LinkedIn"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}