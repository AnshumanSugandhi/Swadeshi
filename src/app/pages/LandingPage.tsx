import  Navbar  from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ImpactBar } from "../components/ImpactBar";
import { CraftCategories } from "../components/CraftCategories";
import { FeaturedArtisans } from "../components/FeaturedArtisans";
import { DigitalPassport } from "../components/DigitalPassport";
// import { Footer } from "../components/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactBar />
      <CraftCategories />
      <FeaturedArtisans />
      <DigitalPassport />
      {/* <Footer /> */}
    </div>
  );
}
