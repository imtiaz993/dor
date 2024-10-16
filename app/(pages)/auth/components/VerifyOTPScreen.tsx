import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import OtpInput from "./OtpInput";
import { AuthDataInterface } from "./AuthScreen";

const VerifyOTPScreen = ({
  setShowOtp,
  authData,
}: {
  setShowOtp: React.Dispatch<React.SetStateAction<boolean>>;
  authData: AuthDataInterface;
}) => {
  const router = useRouter();

  async function verifyOtp(phone: string, otp: string) {
    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: phone, otp: otp }),
      });

      console.log("OTP VERIFIED: ", response);
      if (response.ok) {
        // OTP verified successfully, navigate to the profile page with auth data
        if(authData.name && authData.email){
          const queryParams = new URLSearchParams({
            name: authData.name || '',
            phone: authData.phone,
            email: authData.email || '',
          }).toString();
          
          router.push(`/profile?${queryParams}`);
        }
        else router.push('/payment');
      }
    } catch (error) {
      console.log("Error Verifying OTP: ", error);
    }
  }

  return (
    <div className="flex flex-col justify-between h-full items-center">
      <div className="mt-6 flex flex-col items-center">
        <h1 className="text-gray-900 font-semibold leading-[38px] text-[30px] font-neuehaasMedium text-center">
          {authData.name ? `Welcome back, ${authData.name}!` : "Almost there!"}
        </h1>
        <h2 className="text-gray-500 font-normal leading-[24px] text-[14px] md:text-[16px] mt-2 flex items-center">
          Enter OTP sent to
          <span className="text-secondary-500 ml-[2px]">
            {"+91-" + authData.phone}
          </span>
          <Image
            src="/assets/icons/auth/edit.svg"
            alt="edit icon"
            width={20}
            height={20}
            className="ml-[2px] cursor-pointer"
            onClick={() => setShowOtp((prevValue: boolean) => !prevValue)}
          />
        </h2>
        <div className="mt-6">
          <OtpInput
            length={6}
            onComplete={(otp) => verifyOtp(authData.phone, otp)}
          />
        </div>
        <div className="mt-5">
          <p className="text-gray-500 text-xs md:text-[14px]">
            Having trouble? Request new OTP in 00:17s
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPScreen;