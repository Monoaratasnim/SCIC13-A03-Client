import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import PropertyCategories from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
     
     <WhyChooseUs />
     <HowItWorks />
     <Testimonials />
     <CTASection />
    </>
  );
}