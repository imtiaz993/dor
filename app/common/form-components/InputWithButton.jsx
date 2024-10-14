"use client";

import Image from "next/image";
import { useState } from "react";
import arrowRightGray from "../../../../public/assets/icons/arrow_right_gray.svg";
import arrowRightWhite from "../../../../public/assets/icons/arrow_right_white.svg";

const InputWithButton = ({
  formData,
  setFormData,
  handleSubmit,
  placeholder,
  type = "tel",
}) => {
  const [isFocused,  setIsFocused] = useState(false);

  function handleDataChange(value) {
    if (type == "tel") {
      const phoneRegex = /\d{10,}/;

      setFormData((prevData) => {
        return {
          ...prevData,
          phone: value,
          isPhoneValid: phoneRegex.test(value),
        };
      });

    } else if (type == "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      setFormData((prevData) => {
        return {
          ...prevData,
          email: value,
          isEmailValid: emailRegex.test(value),
        };
      });
    }
  }

  function handleOnClick() {
    if (formData.isEmailValid)
      setFormData((prevFormData) => {
        return { ...prevFormData, email: formData.email };
      });

    if (formData.isPhoneValid)
      setFormData((prevFormData) => {
        return { ...prevFormData, phone: formData.phone };
      });

    handleSubmit();
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-[312px] md:w-[349px] h-[44px] md:h-[52px] py-2 pr-2 pl-4 bg-[#131313]  rounded-[54px] flex justify-between  border-[1px] border-solid ${
          isFocused ? "border-gray-50" : "border-gray-700"
        }`}
      >
        <input
          type={type}
          className={`w-[250px] h-full ${
            formData.isEmailValid || formData.isPhoneValid
              ? "text-[#F7F7F7]"
              : "text-[#D1D1D1]"
          } text-[12px] md:text-[14px] font-normal leading-normal bg-[#131313] autofill:bg-[#131313] focus:outline-none`}
          placeholder={placeholder}
          onChange={(e) => handleDataChange(e.target.value)}
          value={type == "tel" ? formData.phone : formData.email}
          onFocus={()=>setIsFocused(true)}
          onBlur={()=>setIsFocused(false)}
        ></input>
        <button
          onClick={handleOnClick}
          className={`w-[44px] md:w-[62px] rounded-[48px] hover:pl-[4px] transition-all duration-500 ${
            formData.isEmailValid || formData.isPhoneValid
              ? "bg-[#F6443C] hover:bg-[#EC1F1C]"
              : "bg-[#333]"
          } `}
        >
          <Image
            src={
              formData.isEmailValid || formData.isPhoneValid
                ? arrowRightWhite
                : arrowRightGray
            }
            height={0}
            width={0}
            alt="arrow"
            className="my-2 mx-4 md:my-[10px] md:mx-[24px] h-3 w-3 md:h-[14px] md:w-[14px]"
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default InputWithButton;
