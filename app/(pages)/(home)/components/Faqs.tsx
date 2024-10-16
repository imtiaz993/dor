"use client";

import Image from "next/image";
import Link from "next/link";
import FAQAccordian from "../../../components/FAQAccordian";

const Faqs = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <h2 className="font-semibold text-xl lg:text-text-3xl xl:text-4xl sm:text-center mb-6 sm:mb-8 md:mb-8 xl:mb-10">
          Frequently Asked Questions
        </h2>

        <>
        <FAQAccordian />
        </>
      
        <p className="text-[#CDCDCD] text-[12px] sm:text-sm xl:text-base leading-[1.3] mb-1 sm:mb-2 flex items-center justify-center sm:justify-start">
          Still have questions?
        </p>
        <Link
          href={"#"}
          className="text-[#F6443C] font-semibold text-[12px] sm:text-sm xl:text-base flex items-center gap-x-1 justify-center sm:justify-start"
        >
          Visit the help centre
          <Image
            src="./assets/images/home/right-chev-red.svg"
            width="9"
            height="13"
            alt=""
            className="w-2.5 h-auto"
          />
        </Link>
      </div>
    </section>
  );
};

export default Faqs;
