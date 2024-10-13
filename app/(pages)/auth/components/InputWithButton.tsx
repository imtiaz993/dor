import React from "react";
import Image from "next/image";
import { AuthDataInterface } from "./AuthScreen";

interface InputWithButtonProps {
  id: string;
  authData: AuthDataInterface;
  setAuthData: React.Dispatch<React.SetStateAction<AuthDataInterface>>;
  onClickHandle: () => void;
}

const InputWithButton: React.FC<InputWithButtonProps> = ({ 
  id, 
  authData, 
  setAuthData, 
  onClickHandle 
}) => {
  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: authData.phone }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(">>> ",data);
      setAuthData((prev)=>({
        ...prev,
        name: data.customer_details?.customer_name,
        email: data.customer_details?.email_id,
      }))
    } catch (error) {
      console.error("Error sending OTP:", error);
      // Here you might want to set an error state or show a notification to the user
    } finally {
      onClickHandle();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData((prevVal) => ({
      ...prevVal,
      phone: e.target.value,
    }));
  };

  return (
    <div className="flex h-[52px] w-full items-center justify-between rounded-[54px] border border-secondary-500 p-2">
      <div className="flex items-center">
        <span className="ml-3 text-[16px] text-gray-500">+91</span>
        <input
          id={id}
          type="tel"
          className="ml-1 h-6 w-[310px] bg-transparent text-[16px] leading-6 text-gray-900 focus:outline-none"
          value={authData.phone}
          onChange={handlePhoneChange}
          aria-label="Phone number input"
        />
      </div>
      <button
        className="rounded-[48px] bg-primary-400 px-6 py-[11px]"
        onClick={handleOnClick}
        aria-label="Send OTP"
      >
        <Image
          src="/assets/icons/auth/arrow.svg"
          alt=""
          height={14}
          width={14}
        />
      </button>
    </div>
  );
};

export default InputWithButton;