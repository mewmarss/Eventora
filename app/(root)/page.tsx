import Hero from "@/components/LandingPage/Hero";
import Dashboard from "@/components/LandingPage/Dashboard";
import Features from "@/components/LandingPage/Features";
import Pricing from "@/components/LandingPage/Pricing";
import Mockup from "@/components/LandingPage/Mockup";
import Footer from "@/components/shared/Footer";
import Scroll from "@/components/LandingPage/Scroll";

export default function Home() {
  return (
    <Scroll>
      <main className="flex flex-col h-screen items-center">
        <section className="flex-1 flex-col max-w-5xl">
          <Hero />
          <Dashboard />
          <div id="features">
            <Features />
          </div>
          <div id="pricing">
            <Pricing />
          </div>
          <div id="contact">
            <Mockup />
          </div>
        </section>
        <Footer />
      </main>
    </Scroll>
  );
}
