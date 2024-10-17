import Image from "next/image";
import React from "react";

const SelfHelpVideos = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container border-b border-[#333333]">
        <div className=" mb-6 sm:mb-8 md:mb-8 xl:mb-10">
          <h2 className="font-semibold text-xl xl:text-3xl">
            Self-help videos for Dor
          </h2>
          <p className="mt-2 text-sm text-[#ACACAC]">
            Explainer videos to help with commonly-faced issues
          </p>
        </div>
        <div className="flex overflow-auto gap-x-5 pb-10">
          <div className="min-w-[140px]">
            <div className="relative">
              <p className="absolute top-4 left-5 inline-block border border-[#F7F7F7] rounded-full py-1 px-2 text-[10px] text-[#F7F7F7]">
                Onboarding
              </p>
              <Image
                src="/assets/icons/support/video.png"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-[340px] h-auto"
              />
            </div>
            <p className="text-[#ACACAC] text-xs mt-2.5">
              How do I create an account?
            </p>
          </div>
          <div className="min-w-[140px]">
            <div className="relative">
              <p className="absolute top-4 left-5 inline-block border border-[#F7F7F7] rounded-full py-1 px-2 text-[10px] text-[#F7F7F7]">
                Onboarding
              </p>
              <Image
                src="/assets/icons/support/video.png"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-[340px] h-auto"
              />
            </div>
            <p className="text-[#ACACAC] text-xs mt-2.5">
              How do I create an account?
            </p>
          </div>
          <div className="min-w-[140px]">
            <div className="relative">
              <p className="absolute top-4 left-5 inline-block border border-[#F7F7F7] rounded-full py-1 px-2 text-[10px] text-[#F7F7F7]">
                Onboarding
              </p>
              <Image
                src="/assets/icons/support/video.png"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-[340px] h-auto"
              />
            </div>
            <p className="text-[#ACACAC] text-xs mt-2.5">
              How do I create an account?
            </p>
          </div>
          <div className="min-w-[140px]">
            <div className="relative">
              <p className="absolute top-4 left-5 inline-block border border-[#F7F7F7] rounded-full py-1 px-2 text-[10px] text-[#F7F7F7]">
                Onboarding
              </p>
              <Image
                src="/assets/icons/support/video.png"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-[340px] h-auto"
              />
            </div>
            <p className="text-[#ACACAC] text-xs mt-2.5">
              How do I create an account?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfHelpVideos;
