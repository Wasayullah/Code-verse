import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedLanguages from "@/components/home/FeaturedLanguages";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedLanguages />
      <ApplicationsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
