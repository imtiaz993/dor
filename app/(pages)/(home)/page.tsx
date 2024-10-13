import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import MultiSliders from "./components/MultiSliders";
import MoviesSlider from "./components/MoviesSlider";
import Subscription from "./components/Subscription";
import Features from "./components/Features";
import Faqs from "./components/Faqs";
import Footer from "@/app/components/Footer";

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
      <Footer />
    </>
  );
}
