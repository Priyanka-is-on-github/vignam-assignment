"use client";

import HeroSection from "../components/hero/HeroSection";
import VideoSection from "../components/video/VideoSection";
import About from "../components/about/About";
import Navbar from "../components/common/Navbar";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900 ">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with 3D model */}
      <section id="hero" className="w-full">
        <HeroSection />
      </section>

      {/* Video Section */}

      <VideoSection />

      {/* About section */}
      <section id="about" className="w-full lg:py-16">
        <About />
      </section>
    </main>
  );
}
