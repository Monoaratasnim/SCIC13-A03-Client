import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PropertyPriceChart from "@/components/home/PropertyPriceChart";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import LatestProperties from "@/components/home/LatestProperties";
export default function HomePage() {
  return (
    <>
      <Hero />
     <FeaturedProperties />
     <WhyChooseUs />
     <LatestProperties />
     <PropertyPriceChart />
     <HowItWorks />
     <Testimonials />
     <CTASection />
    </>
  );
}