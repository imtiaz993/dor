import React from "react";

const Tickets = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    date: string;
    ticketId: string;
    status: string;
  };
}) => {
  return (
    <div
      className={`w-[402px] px-4 py-3 border rounded-lg cursor-pointer ${
        data.status == "active"
          ? "border-success-900 bg-success-900 bg-opacity-25"
          : "border-error-900 bg-error-900 bg-opacity-25"
      }`}
    >
      <div className="flex justify-between gap-3">
        <p className="text-[14px] text-gray-50">{data.title}</p>
        <p
          className={`text-[12px] font-semibold leading-[18px] ${
            data.status == "active" ? "text-success-500" : "text-error-500"
          }`}
        >
          {" "}
          {data.status == "active" ? "ACTIVE" : "CLOSED"}
        </p>
      </div>

      <p className="text-[12px] text-gray-400 mt-2">{data.description}</p>

      <div className="flex justify-between mt-4">
        <div>
          <span className="text-[11px] text-gray-400 leading-4">Date</span>
          <p className="text-[14px] text-gray-50">{data.date}</p>
        </div>
        <div>
          <span className="text-[11px] text-gray-400 leading-4">Ticket ID</span>
          <p className="text-[14px] text-gray-50">{data.ticketId}</p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
