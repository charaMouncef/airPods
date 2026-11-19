import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Models from "./components/Models";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useState, useEffect, useCallback } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderFinish = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);
   useEffect(() => {
     if (!loaded) return;

     const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
     return () => cancelAnimationFrame(frame);
   }, [loaded]);

   if (!loaded) {
     return <Loader onFinish={handleLoaderFinish} />;
   }
  return (
    <main className="bg-[#f5f5f7]">
      <Navbar />
      <Hero />
      <Hero2 />
      <Models />
      <Features />
      <Footer />
    </main>
  );
}

export default App;
