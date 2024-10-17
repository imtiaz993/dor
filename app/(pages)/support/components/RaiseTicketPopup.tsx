import React from "react";

const RaiseTicketPopup = () => {
  return (
    <div className="w-screen h-screen flex justify-end sm:justify-center sm:items-center fixed top-0 right-0 z-10">
      <div className="absolute z-50 bottom-0 sm:bottom-auto bg-[#131313] border border-[#333333] pt-10 px-4 sm:px-14 pb-10 sm:pb-20 max-w-[600px] w-full max-h-screen h-fit md:max-h-[90vh] overflow-auto rounded-t-xl sm:rounded-xl flex flex-col justify-between">
        <h1 className="text-center font-medium text-xl sm:text-3xl">Raise a ticket</h1>
        <div className="flex flex-col mt-10 sm:mt-0">
          <label className="text-[#ACACAC] flex flex-col">
            Enter Email ID
            <input
              className="text-[#F7F7F7] mt-2 border border-[#333333] focus:border-[#F7F7F7] py-3.5 px-5 outline-none bg-transparent rounded-lg"
              type="email"
              placeholder="Enter Email"
            />
          </label>
          <label className="text-[#ACACAC] flex flex-col mt-6">
            Explain the problem
            <textarea
              className="text-[#F7F7F7] mt-2 border border-[#333333] focus:border-[#F7F7F7] py-3.5 px-5 outline-none bg-transparent rounded-lg resize-none"
              placeholder="Write a detailed description"
              rows={5}
            />
          </label>
          <div className="grid sm:grid-cols-2 gap-5 mt-10 sm:mt-20">
            <button className="border border-[#F7F7F7] py-3.5 font-medium rounded-full text-[#F7F7F7]">
              Cancel
            </button>
            <button className="border border-[#F7F7F7] py-3.5 font-medium rounded-full bg-white text-[#131313]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseTicketPopup;
