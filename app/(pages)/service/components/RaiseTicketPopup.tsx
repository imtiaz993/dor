import React from "react";

const RaiseTicketPopup = () => {
  return (
    <div className="w-screen bg-overlay h-screen flex justify-center items-center fixed top-0 right-0 z-10">
      <div className="abosolute bg-[#131313] border border-[#333333] pt-10 px-14 pb-20 max-w-[600px] w-full max-h-screen md:max-h-[90vh] overflow-auto z-10 rounded-xl flex flex-col justify-between">
        <h1 className="text-center font-medium text-3xl">Raise a ticket</h1>
        <div className="flex flex-col">
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
          <div className="grid grid-cols-2 gap-5 mt-20">
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
