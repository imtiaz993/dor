import React from "react";

const RaiseTicketSuccessPopup = () => {
  return (
    <div className="w-screen h-screen flex justify-end sm:justify-center sm:items-center fixed top-0 right-0 z-10">
      <div className="absolute z-50 bottom-0 sm:bottom-auto bg-[#131313] border border-[#333333] pt-10 px-4 sm:px-14 pb-10 sm:pb-20 max-w-[600px] w-full max-h-screen h-fit md:max-h-[90vh] overflow-auto rounded-t-xl sm:rounded-xl flex flex-col justify-between">
        <h1 className="text-center font-medium text-xl sm:text-3xl">
          Ticket raised successfully
        </h1>
        <p className="text-[#F7F7F7] mt-6 text-center">
          You can track the status on your email, or go to
        </p>
        <p className="text-[#F7F7F7] mt-2 text-center">
          Login {">"} Account {">"} Support
        </p>
        <div className="flex flex-col mt-10 sm:mt-0">
          <div className="grid sm:grid-cols-2 gap-5 mt-20">
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
