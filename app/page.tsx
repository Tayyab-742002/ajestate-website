import { HeroSection } from "@/components/home/hero-section";
import { ServicesParallaxSection } from "@/components/home/services-parallax";
import { AboutSnapshotSection } from "@/components/home/about-snapshopt";
import { HowItWorks } from "@/components/home/how-it-works";
import { TestimonialsSection } from "@/components/home/testimonials";
import { CTASection } from "@/components/ui/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AboutSnapshotSection />
        <ServicesParallaxSection />
        <HowItWorks />
        <TestimonialsSection />
        <CTASection />
      </main>

      {/* Footer will be added later */}
    </div>
  );
}
