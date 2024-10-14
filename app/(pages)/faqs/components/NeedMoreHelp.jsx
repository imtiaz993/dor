import Image from "next/image";
import React from "react";

const NeedMoreHelp = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <p className="text-[14px] font-normal leading-[24px] text-gray-50 mr-3 mb-4 md:mb-0">
        Need more help?
      </p>
      <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 font-neue-medium text-[14px] text-primary-400">
        <button className="h-10 flex justify-center items-center gap-2 px-4 border-[1px] border-primary-400 rounded-[50px]">
          <Image src={"/assets/icons/faq/call.svg"} width={18} height={18} alt="call-icon"/>
          Call us
        </button>
        <button className="h-10 flex justify-center items-center gap-2 px-4 border-[1px] border-primary-400 rounded-[50px]">
          <Image src={"/assets/icons/faq/chat.svg"} width={18} height={18} alt="chat-icon"/>
          Chat with us
        </button>
        <button className="h-10 flex justify-center items-center gap-2 px-4 border-[1px] border-primary-400 rounded-[50px]">
          <Image src={"/assets/icons/faq/ticket.svg"} width={18} height={18} alt="ticket-icon"/>
          Raise a ticket
        </button>
      </div>
    </div>
  );
};

export default NeedMoreHelp;
