"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InnerAccordian from "../../faqs/components/InnerAccordian";

const Faqs = () => {
  const [activeInnerAccordion, setActiveInnerAccordion] = useState(0);

  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <h2 className="font-semibold text-xl lg:text-text-3xl xl:text-4xl sm:text-center mb-6 sm:mb-8 md:mb-8 xl:mb-10">
          Frequently Asked Questions
        </h2>

        <>
          {[
            "How to set up the DOR TV?",
            "The TV is delivered, when will the technician visit?",
            "Can I select the same technician for a subsequent visit?",
            "A visit was scheduled, but the technician is still unavailable",
            "How do I reschedule my appointment?",
            "Are there any online tutorials or videos that can assist me with the installation process?",
          ].map((question, idx) => (
            <InnerAccordian
              key={idx}
              index={idx}
              question={question}
              activeInnerAccordion={activeInnerAccordion}
              setActiveInnerAccordion={setActiveInnerAccordion}
            />
          ))}
        </>

        <p className="text-[#CDCDCD] mt-10 text-[12px] sm:text-sm xl:text-base leading-[1.3] mb-1 sm:mb-2 flex items-center justify-center sm:justify-start">
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
