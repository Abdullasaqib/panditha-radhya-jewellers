import HeroSlider from "@/components/HeroSlider";
import HeadingSection from "@/components/Heading";
import FeaturedSection from "@/components/FH";
import TrustBadgesSection from "@/components/TB";
import NewsletterSection from "@/components/NL";
import ServicesSection from "@/components/OS";
import WhyChooseUs from "@/components/WCS";

export default function Home () {
  return (
    <main>
      <HeroSlider />
      <HeadingSection />
      <FeaturedSection />
      <ServicesSection />
      <WhyChooseUs />
      <TrustBadgesSection />
      <NewsletterSection />
    </main>
  );
}