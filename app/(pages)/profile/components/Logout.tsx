import Link from "next/link";
import React from "react";

const Logout = ({user="User", logoutHandler} :  {user: string, logoutHandler: () => void}) => {

  return <div className="fixed w-full h-full bg-gray-900 bg-opacity-75 top-0 left-0 flex justify-center items-center">
    <div className="bg-gray-900 py-[80px] px-[60px] w-[600px] rounded-xl shadow-[0_-1px_8.4px_0px_rgba(255,255,255,0.05)]">
      <h1 className="text-[30px] font-neuehaasMedium leading-[38px] text-center">{"Are you sure you want to log out, " + user +"?"}</h1>
      <div className="mt-10 flex gap-5">
        <button className="h-[52px] bg-gray-50 rounded-[50px] text-gray-900 w-full text-[16px] leading-6 font-semibold" ><Link href={"/"}>Log Out</Link></button>
        <button className="h-[52px] rounded-[50px] w-full text-gray-50 border border-gray-50 text-[16px] leading-6 font-semibold" onClick={logoutHandler}>Cancel</button>
      </div>
    </div>
  </div>;
};

export default Logout;
