import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import TopSection from "@/components/TopSection";
import UploadSection from "@/components/UploadSection";
import PlaylistsSection from "@/components/PlaylistsSection";
import ProfileSection from "@/components/ProfileSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    home: useRef<HTMLDivElement>(null),
    catalog: useRef<HTMLDivElement>(null),
    top: useRef<HTMLDivElement>(null),
    upload: useRef<HTMLDivElement>(null),
    playlists: useRef<HTMLDivElement>(null),
    profile: useRef<HTMLDivElement>(null),
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="pt-16 pb-20 md:pb-0">
        <div ref={sectionRefs.home}>
          <HeroSection onNavigate={handleNavigate} />
        </div>

        <div ref={sectionRefs.catalog}>
          <CatalogSection />
        </div>

        <div ref={sectionRefs.top}>
          <TopSection />
        </div>

        <div ref={sectionRefs.playlists}>
          <PlaylistsSection />
        </div>

        <div ref={sectionRefs.upload}>
          <UploadSection />
        </div>

        <div ref={sectionRefs.profile}>
          <ProfileSection />
        </div>

        <footer className="border-t border-border/30 py-8 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-montserrat font-bold text-sm tracking-tight">
              VINYL<span className="text-primary">WAVE</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2025 VINYLWAVE. Музыка объединяет.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
