import dynamic from "next/dynamic";
import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import MultiSliders from "./components/MultiSliders";
import MoviesSlider from "./components/MoviesSlider";
import Subscription from "./components/Subscription";
import Features from "./components/Features";
import Faqs from "./components/Faqs";
import Footer from "@/app/components/Footer";
import WelcomeText from "./components/WelcomeText";

const Explore = dynamic(() => import("./components/Explore"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <MultiSliders />
      <MoviesSlider />
      <Subscription />
      <Features />
      <Faqs />
      <WelcomeText />
      <Footer />
    </>
  );
}
