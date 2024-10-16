import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Faqs from "./components/Faqs";
import TopSection from "./components/TopSection";
import RaiseTicketPopup from "./components/RaiseTicketPopup";

const Service = () => {
  return (
    <>
      <RaiseTicketPopup />
      <Navbar />
      <TopSection />
      <Faqs />
      <Footer />
    </>
  );
};

export default Service;
