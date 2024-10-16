import Image from "next/image";
import React from "react";

const ResolveQuery = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container border-b border-[#333333]">
        <div className=" mb-6 sm:mb-8 md:mb-8 xl:mb-10">
          <h2 className="font-semibold text-xl xl:text-3xl">Resolve query</h2>
          <p className="mt-2 text-sm text-[#ACACAC]">
            Choose a category you need help with
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 pb-10">
          <div className="p-4 border border-[#333333] rounded-lg flex items-center">
            <Image
              src="/assets/icons/support/credit_card.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="w-auto h-auto"
            />
            <p className="text-[#F7F7F7] ml-2">Subscription</p>
          </div>
          <div className="p-4 border border-[#333333] rounded-lg flex items-center">
            <Image
              src="/assets/icons/support/door_front.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="w-auto h-auto"
            />
            <p className="text-[#F7F7F7] ml-2">Onboarding</p>
          </div>
          <div className="p-4 border border-[#333333] rounded-lg flex items-center">
            <Image
              src="/assets/icons/support/account_circle.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="w-auto h-auto"
            />
            <p className="text-[#F7F7F7] ml-2">Account related</p>
          </div>
          <div className="p-4 border border-[#333333] rounded-lg flex items-center">
            <Image
              src="/assets/icons/support/group_add.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="w-auto h-auto"
            />
            <p className="text-[#F7F7F7] ml-2">New customer</p>
          </div>
          <div className="p-4 border border-[#333333] rounded-lg flex items-center">
            <Image
              src="/assets/icons/support/troubleshoot.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="w-auto h-auto"
            />
            <p className="text-[#F7F7F7] ml-2">Troubleshooting</p>
          </div>
          <div className="p-4 border border-[#333333] rounded-lg flex items-center">
            <Image
              src="/assets/icons/support/support_agent.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="w-auto h-auto"
            />
            <p className="text-[#F7F7F7] ml-2">Support</p>
          </div>
          <div className="p-4 border border-[#333333] rounded-lg flex items-center">
            <Image
              src="/assets/icons/support/sentiment_content.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="w-auto h-auto"
            />
            <p className="text-[#F7F7F7] ml-2">Content recommendation</p>
          </div>
          <div className="p-4 border border-[#333333] rounded-lg flex items-center">
            <Image
              src="/assets/icons/support/notifications.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="w-auto h-auto"
            />
            <p className="text-[#F7F7F7] ml-2">Notifications and alerts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResolveQuery;
