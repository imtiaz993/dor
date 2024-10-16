"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MultiSliders = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="pt-6 mb-10 sm:mb-0">
      <div className="container">
        <div className="py-2.5 px-6 bg-white rounded-[50px] flex items-start justify-center w-fit mx-auto mb-5">
          <Image
            src="/assets/images/home/dor-tv.svg"
            width="60"
            height="29"
            alt=""
            className="w-10 sm:w-14 md:w-16 lg:w-20 xl:w-[60px] h-auto"
          />
        </div>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6">
          A smart subscription for smarter entertainment
        </h2>
        <div className="flex items-center gap-x-1 xl:gap-x-6 gap-y-4 flex-wrap justify-center md:justify-between mb-6 md:mb-10">
          <div className="flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#E4F3FC]">
            <Image
              src="/assets/images/home/icons/photo_size_select_large.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Available in 43”
          </div>
          <div className="flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#E4F3FC]">
            <Image
              src="/assets/images/home/blur_on.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Cutting-edge QLED display
          </div>
          <div className="flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#E4F3FC]">
            <Image
              src="/assets/images/home/icons/live_tv.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            300+ live channels
          </div>
          <div className="flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#E4F3FC]">
            <Image
              src="/assets/images/home/icons/stream.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Subscription to 24+ OTTs
          </div>

          <div className="flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#E4F3FC]">
            <Image
              src="/assets/images/home/4k.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            4K UHD resolution
          </div>
          {!showAll && (
            <div
              className="ml-1 text-sm sm:hidden"
              onClick={() => {
                setShowAll(true);
              }}
            >
              +4 more
            </div>
          )}

          <div
            className={`${
              showAll ? "flex" : "hidden"
            } sm:flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#E4F3FC]`}
          >
            <Image
              src="/assets/images/home/icons/missing_controller.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Solar Remote
          </div>
          <div
            className={`${
              showAll ? "flex" : "hidden"
            } sm:flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#E4F3FC]`}
          >
            <Image
              src="/assets/images/home/icons/Vector.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Voice Search
          </div>
          <div
            className={`${
              showAll ? "flex" : "hidden"
            } sm:flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#E4F3FC]`}
          >
            <Image
              src="/assets/images/home/icons/surround_sound.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Dolby Digital Sound
          </div>
          <div
            className={`${
              showAll ? "flex" : "hidden"
            } sm:flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#E4F3FC]`}
          >
            <Image
              src="/assets/images/home/icons/mobile.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Companion App - watch content on-the-go
          </div>
        </div>
        <p className="text-center text-sm sm:text-base lg:text-lg xl:text-xl mb-2 md:mb-4">
          Starting from ₹999/month*
        </p>
        <div className="flex-col sm:flex-row flex items-center justify-center gap-x-6 mb-2">
          <Link
            href="#"
            className="w-full justify-center text-[12px] sm:text-sm lg:text-base font-semibold leading-[1.8] flex sm:w-fit items-center gap-x-2 py-2 px-4 bg-[#F6443C] rounded-[30px]"
          >
            Coming Soon
            <Image
              src="/assets/images/home/right-chev.svg"
              width="8"
              height="12"
              alt=""
              className="w-2.5 h-auto"
            />
          </Link>
        </div>
      
        <Image
          src="/assets/images/home/dor-mob.png"
          width="803"
          height="503"
          alt=""
          className="max-w-[300px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[778px] h-auto mx-auto hidden sm:block"
        />

        <Image
          src="/assets/images/home/dor-mob2.png"
          width="803"
          height="503"
          alt=""
          className="max-w-[320px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[778px] h-auto mx-auto sm:hidden"
        />
      </div>
    </section>
  );
};

export default MultiSliders;
