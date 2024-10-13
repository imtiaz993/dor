import Image from "next/image";
import Link from "next/link";

const Subscription = () => {
  return (
    <section className="pt-8 sm:pt-10 lg:pt-14 xl:pt-[76px]">
      <div className="container">
        <div className="py-2.5 px-6 bg-white rounded-[50px] flex items-start justify-center w-fit mx-auto mb-5">
          <Image
            src="/assets/images/home/dor-play-logo.svg"
            width="95"
            height="41"
            alt=""
            className="w-[65px] sm:w-14 md:w-16 lg:w-20 xl:w-[95px] h-auto"
          />
        </div>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4">
          Unlimited entertainment. Unbeatable value.
        </h2>
        <div className="flex items-center gap-x-1 xl:gap-x-6 gap-y-4 flex-wrap justify-center md:justify-between mb-6 md:mb-10">
          <div className="flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#F7F7F7]">
            <Image
              src="/assets/images/home/stream.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            25+OTT apps
          </div>
          <div className="flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#F7F7F7]">
            <Image
              src="/assets/images/home/brain.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Gen AI-powered Search
          </div>
          <div className="flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#F7F7F7]">
            <Image
              src="/assets/images/home/design-for-mobile.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Designed for Mobile
          </div>
          <div className="flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#F7F7F7]">
            <Image
              src="/assets/images/home/4k.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Stream in 4K UHD
          </div>
          <div className="flex items-center gap-x-[2px] sm:gap-x-1 xl:gap-x-2 px-2 sm:px-3 md:px-3.5 xl:px-4 py-1 md:py-1.5 border border-white rounded-[4px] text-[11px] md:text-sm text-[#F7F7F7]">
            <Image
              src="/assets/images/home/personlised.svg"
              width="12"
              height="12"
              alt=""
              className="w-3 h-auto"
            />
            Personalised Content Discovery
          </div>
        </div>
        <p className="text-center text-[12px] mb-1 gredientHeading">
          Introductory Offer
        </p>
        <p className="text-center text-sm sm:text-base lg:text-lg xl:text-xl mb-2 md:mb-4">
          ₹499 for 3 months
        </p>
        <div className="flex-col sm:flex-row flex items-center justify-center gap-x-6 mb-2">
          <Link
            href="#"
            className="w-full justify-center text-[12px] sm:text-sm lg:text-base font-semibold leading-[1.8] flex sm:w-fit items-center gap-x-2 py-2 px-4 bg-[#F6443C] rounded-[30px]"
          >
            Subscribe Now
            <Image
              src="/assets/images/home/right-chev.svg"
              width="8"
              height="12"
              alt=""
              className="w-2.5 h-auto"
            />
          </Link>
          <Link
            href="#"
            className="text-[12px] sm:text-sm lg:text-base font-semibold leading-[1.8] flex w-fit items-center gap-x-2 py-2 px-4 rounded-[30px]"
          >
            Learn More
            <Image
              src="/assets/images/home/right-chev.svg"
              width="8"
              height="12"
              alt=""
              className="w-2.5 h-auto"
            />
          </Link>
        </div>
        <p className="text-sm text-center">*Monthly subscrition fee extra</p>
        <Image
          src="/assets/images/home/subscribe.png"
          width="1581"
          height="725"
          alt=""
          className="max-w-[360px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[734px] h-auto mx-auto"
        />
      </div>
    </section>
  );
};

export default Subscription;
