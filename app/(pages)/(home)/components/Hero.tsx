import Image from "next/image";
import Link from "next/link";
import PartnersSlider from "./PartnersSlider";

const Hero = () => {
  return (
    <section className="hero sm:pb-8">
      <div className="container ">
        <div className="text-center sm:text-left pt-[100px] pb-[55px] sm:pb-[216px] max-w-[870px]">
          <h2 className="font-semibold text-[30px] sm:text-6xl lg:text-[64px] xl:text-7xl mb-48 sm:mb-6 text-white">
            Dor - India’s First Subscription TV
          </h2>
          <p className="text-sm sm:text-lg md:text-xl leading-[1.5] text-[#D1D1D1] mb-3">
            Dor 43" available for ₹999/month
          </p>
          <Link
            href="#"
            className="w-full justify-center text-[12px] sm:text-sm md:text-base font-semibold leading-[1.8] flex sm:w-fit items-center gap-x-2 py-2 px-4 bg-[#F6443C] rounded-[30px]"
          >
            Available exclusively on Flipkart
            <Image
              src="/assets/images/home/right-chev.svg"
              width="8"
              height="12"
              alt=""
              className="w-2 md:w-2.5 h-auto"
            />
          </Link>
        </div>
      </div>
      <PartnersSlider />
    </section>
  );
};

export default Hero;
