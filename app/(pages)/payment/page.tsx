"use client";
import Image from "next/image";
import React, { useState } from "react";

const subscriptionDetails = [
  {
    icon: "/assets/icons/payment/stream.svg",
    title: "25+OTT apps",
  },
  {
    icon: "/assets/icons/payment/responsive_layout.svg",
    title: "Compatible with Mobile and Tablets",
  },
  {
    icon: "/assets/icons/payment/4k.svg",
    title: "Stream in life-like 4K resolution",
  },
  {
    icon: "/assets/icons/payment/neurology.svg",
    title: "Gen AI-powered search",
  },
  {
    icon: "/assets/icons/payment/target.svg",
    title: "Personalised content discovery",
  },
];

const Payment = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex">
      <div className="w-[57%] h-dvh bg-white pt-[159px] flex justify-center">
        <div className="w-[630px]">
          <Image
            src="/assets/images/payment/dorplay-logo.svg"
            width={139.6}
            height={40}
            alt="Dor Play Logo"
          />
          <p className="text-gray-500 text-[14px] font-normal mt-6">
            Here are your subscription details
          </p>
          <div className="mt-2 flex items-center">
            <h1 className="text-gray-900 text-[30px] font-neuehaasMedium leading-[38px]">
              ₹499
            </h1>
            <p className="text-gray-900 text-[16px] font-normal leading-[24px] ml-2">
              for 3 months
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            {subscriptionDetails.map((item, idx) => (
              <div className="flex gap-2" key={idx}>
                <Image
                  src={item.icon}
                  height={24}
                  width={24}
                  alt="Stream Icon"
                />
                <p className="text-gray-900 text-[16px]">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <p className="text-gray-500 text-[14px] font-normal">
              Subscriptions
            </p>
            <div className="flex flex-wrap h-[70px] w-[500px] gap-2 mt-1">
              {Array.from({ length: 23 }, (_, index) => index + 1).map(
                (idx) => (
                  <Image
                    src={`/assets/images/payment/${idx}.png`}
                    height={32.5}
                    width={32.5}
                    alt={`${idx}`}
                    key={idx}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[43%] h-dvh bg-black pt-[159px] flex justify-center relative">
        <div className="w-[400px]">
          <h1 className="text-gray-50 text-[30px] font-neuehaasMedium leading-[38px]">
            Secure Checkout
          </h1>
          <p className="text-gray-500 text-[14px] font-normal mt-2">
            You will be charged on the next screen
          </p>
          <div className="mt-10">
            <div className="flex justify-between">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-gray-500 text-[14px]"
                >
                  First Name*
                </label>
                <input
                  className={`mt-2 w-[180px] h-[52px] p-[10px] bg-transparent rounded-[60px] ${
                    isFocused ? "border-secondary-500" : "border-gray-500"
                  }  border`}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                ></input>
              </div>
              <div>
                <label htmlFor="lastName" className="text-gray-500 text-[14px]">
                  Last Name*
                </label>
                <input
                  className={`mt-2 w-[180px] h-[52px] p-[10px] bg-transparent rounded-[60px] ${
                    isFocused ? "border-secondary-500" : "border-gray-500"
                  }  border`}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                ></input>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="email" className="text-gray-500 text-[14px]">
                Email*
              </label>
              <input
                className={`mt-2 w-full h-[52px] p-[10px] bg-transparent rounded-[60px] ${
                  isFocused ? "border-secondary-500" : "border-gray-500"
                }  border`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="eg. name@email.com"
              ></input>
            </div>
          </div>
          <button className="h-[52px] mt-6 bg-gray-800 rounded-[50px] py-2 px-4 w-full flex justify-center items-center gap-2">
            <div>Continue with</div>
            <Image src={"/assets/images/payment/payu.png"} alt="payu logo" height={32} width={52}/>
          </button>
        </div>
        <Image
          src={"/assets/images/payment/card.png"}
          height={308}
          width={308}
          alt="Card"
          className="bottom-0 right-0 absolute mix-blend-luminosity"
        />
      </div>
    </div>
  );
};

export default Payment;
