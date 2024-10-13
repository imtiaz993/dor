"use client";
import { useState } from "react";
import Image from "next/image";

const FaqsAccordion = ({ title = "FAQ", description = "FAQ Description" }: any) => {
  const [open, setOpen] = useState<boolean>();
  const handleTestomonial = () => {
    setOpen((prevOpen: any) => !prevOpen);
  };

  return (
    <>
      <div className="">
        <div
          className="py-3 border-b border-[#333333] !flex items-center justify-between cursor-pointer"
          onClick={handleTestomonial}
        >
          <p className="w-[calc(100-40px)] text-[12px] sm:text-sm xl:text-base leading-[1.5] text-[#F7F7F7]">
            {title}
          </p>
          <Image
            src="./assets/images/home/icons/keyboard_arrow_down.svg"
            width="24"
            height="24"
            alt=""
            className={`w-5 md:w-6 xl:w-6 h-auto ${open ? "hidden" : "block"}`}
          />
          <Image
            src="./assets/images/home/icons/keyboard_arrow_down.svg"
            width="24"
            height="24"
            alt=""
            className={`w-5 md:w-6 xl:w-6 h-auto rotate-180 ${
              open ? "block" : "hidden"
            }`}
          />
        </div>
        <div
          className={`text-[#ACACAC] text-[12px] sm:text-sm xl:text-base leading-[1.5] pt-2.5 pb-3 border-b border-[#333333] ${
            open ? "block" : "hidden"
          }`}
        >
          {description}
        </div>
      </div>
    </>
  );
};

export default FaqsAccordion;
