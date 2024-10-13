"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Explore = () => {
  const swiperRef = useRef<any>();
  const [swiperIndex, setSwiperIndex] = useState(0);
  return (
    <section className="relative pt-10 md:pt-14 lg:pt-16 xl:pt-[76px] pb-12 md:pb-16 lg:pb-[86px] xl:pb-[105px]">
      <div className="container">
        <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 text-center">
          Explore the world of Dor
        </h1>
        <p className="text-[#D1D1D1] text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-center mb-8 md:mb-12 xl:mb-20">
          Choose from bundled subscriptions custom-made for your viewing
          pleasure
        </p>

        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={2}
          pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              pagination: true,
              slidesPerView: 1.2,
            },
            768: {
              pagination: false,
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="border border-[#333333] rounded-xl text-center pt-6">
              <h6 className="gredientHeading text-[11px] sm:text-[12px] mb-1">
                Introductory Offer
              </h6>
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-1">
                Dor
              </h1>
              <p className="max-w-[173px] mb-7 sm:mb-[22px] mx-auto px-2 text-[12px] md:text-sm text-[#D1D1D1]">
                Available in 43” and 55” Starting at ₹9,999 only
              </p>
              <Link
                href={"#"}
                className="font-semibold text-[12px] sm:text-sm flex items-center gap-x-1 justify-center"
              >
                Buy on Flipkart
                <Image
                  src="/assets/images/home/right-chev.svg"
                  width="8"
                  height="12"
                  alt=""
                  className="w-2.5 h-auto"
                />
              </Link>
              <Image
                src="/assets/images/home/dor.png"
                width="550"
                height="374"
                alt=""
                className="w-auto h-[142px] sm:h-[200px] md:h-[240px] lg:h-[300px] mx-auto"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#333333] rounded-xl text-center pt-6">
              <h6 className="gredientHeading text-[11px] sm:text-[12px] mb-1">
                All-in-one Streaming
              </h6>
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-1">
                DorPlay
              </h1>
              <p className="max-w-[444px] mb-7 sm:mb-[22px] mx-auto px-2 text-[12px] md:text-sm text-[#D1D1D1]">
                20 OTTs, 200+ live premium and free channels, games and more. At
                just ₹499/month
              </p>
              <Link
                href={"#"}
                className="font-semibold text-[12px] sm:text-sm flex items-center gap-x-1 justify-center"
              >
                Get Subscribed
                <Image
                  src="/assets/images/home/right-chev.svg"
                  width="8"
                  height="12"
                  alt=""
                  className="w-2.5 h-auto"
                />
              </Link>
              <Image
                src="/assets/images/home/dor-play.png"
                width="550"
                height="374"
                alt=""
                className="w-auto h-[142px] sm:h-[200px] md:h-[240px] lg:h-[300px] mx-auto"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:hidden flex items-center justify-center mt-4">
        <div
          className={`mr-1 w-1.5 h-1.5 rounded-full cursor-pointer ${
            swiperIndex === 0 ? "bg-white" : "bg-[#5A5A5A]"
          } `}
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
            setSwiperIndex(0);
          }}
        ></div>
        <div
          className={`w-1.5 h-1.5 rounded-full cursor-pointer ${
            swiperIndex === 1 ? "bg-white" : "bg-[#5A5A5A]"
          } `}
          onClick={() => {
            swiperRef.current.swiper.slideNext();
            setSwiperIndex(1);
          }}
        ></div>
        <div>
          <div className="swiper-custom-pagination" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
