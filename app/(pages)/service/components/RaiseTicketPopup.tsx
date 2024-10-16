import React from "react";

const RaiseTicketPopup = () => {
  return (
    <div className="w-screen bg-overlay h-screen flex justify-center items-center fixed top-0 right-0 z-10">
      <div className="abosolute bg-[#131313] pt-10 px-14 pb-20 max-w-[600px] w-full max-h-screen md:max-h-[90vh] overflow-auto z-10 rounded-xl flex flex-col justify-between">
        <h1 className="text-center font-medium text-3xl">Raise a ticket</h1>
      </div>
    </div>
  );
};

export default RaiseTicketPopup;
