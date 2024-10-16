import Image from "next/image";
import Link from "next/link";
import OSSpline from "./OSSpline";

const Features = () => {
  return (
    <section className="pt-8 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 pb-8 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-36 relative">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 xl:gap-x-20 items-center justify-between">
          <div className="px-20 sm:px-0 py-8 sm:p-0">
            <OSSpline />
          </div>
          <div className="pt-[450px] sm:pt-0 max-w-[466px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#F7F7F7] sm:text-left font-semibold leading-[1.2] mb-4">
              An operating system designed for the future of Smart TVs
            </h2>
            <ul className="mb-6">
              <li className="flex items-center gap-x-2 text-[12] md:font-sm text-[#F7F7F7] mb-3">
                <Image
                  src="/assets/images/home/icons/crowdsource.svg"
                  width="13"
                  height="13"
                  alt=""
                  className="w-auto h-auto"
                />
                An Indian indigenous AOSP based TV OS
              </li>
              <li className="flex items-center gap-x-2 text-[12] md:font-sm text-[#F7F7F7] mb-3">
                <Image
                  src="/assets/images/home/icons/key.svg"
                  width="13"
                  height="13"
                  alt=""
                  className="w-auto h-auto"
                />
                Single sign-on across OTT apps
              </li>
              <li className="flex items-center gap-x-2 text-[12] md:font-sm text-[#F7F7F7] mb-3">
                <Image
                  src="/assets/images/home/icons/newspaper.svg"
                  width="13"
                  height="13"
                  alt=""
                  className="w-auto h-auto"
                />
                Unified Content Environment across OTT and Live TV
              </li>
              <li className="flex items-center gap-x-2 text-[12] md:font-sm text-[#F7F7F7] mb-3">
                <Image
                  src="/assets/images/home/personlised.svg"
                  width="13"
                  height="13"
                  alt=""
                  className="w-auto h-auto"
                />
                Personalized recommendations 
              </li>
              <li className="flex items-center gap-x-2 text-[12] md:font-sm text-[#F7F7F7] mb-3">
                <Image
                  src="/assets/images/home/icons/school.svg"
                  width="13"
                  height="13"
                  alt=""
                  className="w-auto h-auto"
                />
                Best-in-class content search 
              </li>
              <li className="flex items-center gap-x-2 text-[12] md:font-sm text-[#F7F7F7] mb-3">
                <Image
                  src="/assets/images/home/icons/monitor.svg"
                  width="13"
                  height="13"
                  alt=""
                  className="w-auto h-auto"
                />
                One stop destination for News and Sports 
              </li>
              <li className="flex items-center gap-x-2 text-[12] md:font-sm text-[#F7F7F7] mb-3">
                <Image
                  src="/assets/images/home/icons/contact_emergency.svg"
                  width="13"
                  height="13"
                  alt=""
                  className="w-auto h-auto"
                />
                Customised profiles for everyone
              </li>
            </ul>
            <Link
              href="#"
              className="text-[12px] sm:text-sm lg:text-base font-semibold leading-[1.8] flex justify-center sm:justify-start sm:w-fit items-center gap-x-2 py-2 px-4 bg-[#F6443C] rounded-[30px]"
            >
              Contact Us
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
      </div>
    </section>
  );
};

export default Features;
