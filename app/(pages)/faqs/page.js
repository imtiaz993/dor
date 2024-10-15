import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FAQAccordian from "./components/FAQAccordian";
import NeedMoreHelp from "./components/NeedMoreHelp";

export const metadata = {
  title: "Welcome to Dor | Faq",
  description: "Your doorway to unlimited entertainment.",
};



const FAQ = () => {
  return (
    <div className="relative">
      <Navbar alwaysOnTop={true} />
      <div className="flex justify-center">
        <div className="w-[1184px] mt-[110px] mb-[148px] px-8">
          <p className="text-gray-50">
            <span className="text-gray-600">Support / </span>FAQs
          </p>
          <h2 className="mt-[20px] text-[30px] font-semibold leading-[38px] text-gray-50">
            Frequently Asked Questions
          </h2>
          <p className="text-[14px] mt-2 text-gray-400 mb-10">
            Some common queries about our product & services
          </p>
          <FAQAccordian />
          <NeedMoreHelp />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
