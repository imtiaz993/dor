import React from "react";

const RaiseTicketSuccessPopup = () => {
  return (
    <div className="w-screen bg-overlay h-screen flex justify-center items-center fixed top-0 right-0 z-10">
      <div className="abosolute bg-[#131313] border border-[#333333] pt-10 px-14 pb-20 max-w-[600px] w-full max-h-screen md:max-h-[90vh] overflow-auto z-10 rounded-xl flex flex-col justify-between">
        <h1 className="text-center font-medium text-3xl">
          Ticket raised successfully
        </h1>
        <p className="text-[#F7F7F7] mt-6 text-center">
          You can track the status on your email, or go to
        </p>
        <p className="text-[#F7F7F7] mt-2 text-center">
          Login {">"} Account {">"} Support
        </p>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-5 mt-20">
            <button className="border border-[#F7F7F7] py-3.5 font-medium rounded-full text-[#F7F7F7]">
              Close
            </button>
            <button className="border border-[#F7F7F7] py-3.5 font-medium rounded-full bg-white text-[#131313]">
              Go to Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseTicketSuccessPopup;
