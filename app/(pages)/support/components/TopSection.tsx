import React from "react";

const TopSection = ({ activeTab, setActiveTab }: any) => {
  return (
    <div className="pt-[140px]">
      <div className="container">
        <p className="text-xl text-[#ACACAC] sm:text-center">
          Have a query? Looking for solutions?
        </p>
        <h1 className="font-semibold text-[30px] sm:text-6xl lg:text-[64px] xl:text-7xl mt-2 mb-5 sm:mb-10 text-[#F7F7F7] sm:text-center">
          We are happy to help
        </h1>
        <div className="grid grid-cols-2 gap-x-10">
          <div
            onClick={() => {
              setActiveTab("DOR");
            }}
            className={`border text-center  cursor-pointer  rounded-lg py-3 sm:py-5 sm:text-3xl ${
              activeTab === "DOR"
                ? "border-[#F7F7F7] text-[#F7F7F7]"
                : "border-[#333333] text-[#8B8B8B]"
            }`}
          >
            Dor
          </div>
          <div
            onClick={() => {
              setActiveTab("DORPlay");
            }}
            className={`border text-center  cursor-pointer  rounded-lg py-3 sm:py-5  sm:text-3xl ${
              activeTab === "DORPlay"
                ? "border-[#F7F7F7] text-[#F7F7F7]"
                : "border-[#333333] text-[#8B8B8B]"
            }`}
          >
            DorPlay
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
