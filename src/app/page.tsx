import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HomeAboutPreview from "@/components/home/HomeAboutPreview";
import HomeServicesPreview from "@/components/home/HomeServicesPreview";
import HomeProjectsPreview from "@/components/home/HomeProjectsPreview";
import HomeQualityPreview from "@/components/home/HomeQualityPreview";
import GlobalPresenceMap from "@/components/home/GlobalPresenceMap";
import Statement from "@/components/Statement";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HomeAboutPreview />
      <HomeServicesPreview />
      <HomeProjectsPreview />
      <GlobalPresenceMap />
      <HomeQualityPreview />
      <Statement />
      <CTA />
    </>
  );
}
