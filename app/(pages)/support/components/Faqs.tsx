"use client";

import FAQAccordian from "../../../components/FAQAccordian";

const Faqs = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <h2 className="font-semibold text-xl lg:text-text-3xl xl:text-4xl mb-6 sm:mb-8 md:mb-8 xl:mb-10">
          Frequently Asked Questions
        </h2>
        <FAQAccordian />
      </div>
    </section>
  );
};

export default Faqs;
