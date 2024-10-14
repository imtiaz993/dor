"use client";

import Image from "next/image";
import React, { useState } from "react";

const Input = ({ placeholder, value, setFormData, type }) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputChange(value) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [type]: value };
    });
  }

  return (
    <div className="flex flex-col items-center h-[60px] md:h-[68px]">
      <div
        className={`h-[44px] md:h-[52px] py-2 pr-2 pl-4 bg-[#131313]  rounded-[54px] flex justify-between ${
          isFocused ? "border-gray-50" : "border-gray-700"
        } border-[1px] border-solid `}
      >
        <input
          type="text"
          className={`w-full h-full text-gray-300 text-[12px] md:text-[14px] font-normal leading-normal bg-[#131313] autofill:bg-[#131313] focus:outline-none`}
          placeholder={placeholder}
          onChange={(e) => handleInputChange(e.target.value)}
          value={value}
          onFocus={()=>setIsFocused(true)}
          onBlur={()=>setIsFocused(false)}
        ></input>
      </div>
    </div>
  );
};

export default Input;
