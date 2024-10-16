import Image from "next/image";

const SearchSection = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <div className="py-3.5 px-5 border border-[#ACACAC] rounded-full flex items-center">
          <input
            className="w-full bg-transparent outline-none mr-2"
            placeholder="Search Dor supports"
          />
          <Image
            src="/assets/icons/support/search.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            className="w-6 h-6"
          />
        </div>
        <div className="flex items-center sm:justify-center mt-4 px-6 overflow-x-auto">
          <p className="text-xs text-[#ACACAC] mr-4 whitespace-nowrap">Top Searches</p>
          <div className="flex items-center">
            <p className="text-xs py-2 px-3 border border-[#F7F7F7] rounded-full mr-4 cursor-pointer whitespace-nowrap">
              Trouble logging in
            </p>
            <p className="text-xs py-2 px-3 border border-[#F7F7F7] rounded-full mr-4 cursor-pointer whitespace-nowrap">
              Billing & Pricing
            </p>
            <p className="text-xs py-2 px-3 border border-[#F7F7F7] rounded-full mr-4 cursor-pointer whitespace-nowrap">
              Can’t find desired content
            </p>
            <p className="text-xs py-2 px-3 border border-[#F7F7F7] rounded-full mr-4 cursor-pointer whitespace-nowrap">
              Connectivity
            </p>{" "}
            <p className="text-xs py-2 px-3 border border-[#F7F7F7] rounded-full mr-4 cursor-pointer whitespace-nowrap">
              Warranty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
