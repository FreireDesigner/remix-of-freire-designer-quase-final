import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AllModels from "@/components/AllModels";
import BenefitsBar from "@/components/BenefitsBar";
import Materials from "@/components/Materials";
import ExclusiveModels from "@/components/ExclusiveModels";
import PartnerBrands from "@/components/PartnerBrands";
import InstagramSection from "@/components/InstagramSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <Categories />
        <FeaturedProducts />
        <AllModels />
        <BenefitsBar />
        <WaveDivider variant="blue-to-white" />
        <ExclusiveModels />
        <Materials />
        <WaveDivider variant="white-to-blue" />
        <PartnerBrands />
        <WaveDivider variant="blue-to-white" />
        <InstagramSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
