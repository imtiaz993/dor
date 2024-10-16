import React from "react";
import Tickets from "./Tickets";
import Image from "next/image";

const ticketsData = [
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "active",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "active",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "closed",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "closed",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "active",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "closed",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "active",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "closed",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "active",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "active",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "closed",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "closed",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "active",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "closed",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "active",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "closed",
  },
  {
    title: "Subscription - Plan details - Type of plan - Type of plan",
    description:
      "Screen is freezing at different places, while I’m using the app.",
    date: "12 Sep 2024",
    ticketId: "ISS-2024-00502412",
    status: "closed",
  },
];

const HelpSupport = () => {
  const [ticketsToShow, setTicketsToShow] = React.useState(3);

  return (
    <div className="w-[824px]">
      <h1 className="text-[30px] leading-[38px] font-neuehaasMedium">
        Raised tickets
      </h1>
      <p className="text-[14px] font-normal text-gray-400 mt-2">
        Track the status of your tickets
      </p>
      <div className="flex gap-x-5 gap-y-6 mt-6 pb-4 border-b border-gray-800 flex-wrap">
        {ticketsData.map((data, index) => {
          if (index < ticketsToShow)
            return <Tickets key={index} data={data} />;
        })}
        <div className="w-[402px] flex items-center justify-center">
          {ticketsToShow != ticketsData.length && (
            <button
              className="text-primary-400 text-base font-semibold"
              onClick={() => setTicketsToShow(ticketsData.length)}
            >
              +{ticketsData.length - ticketsToShow} more
            </button>
          )}
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-between cursor-pointer">
          <h2 className="text-[30px]">Visit the help centre</h2>
          <Image
            src="/assets/icons/arrow_right_white.svg"
            width={32}
            height={32}
            alt="arrow right icon"
          ></Image>
        </div>
          <p className="text-[14px] text-gray-400 mt-2">We’re here to help</p>
      </div>
    </div>
  );
};

export default HelpSupport;
