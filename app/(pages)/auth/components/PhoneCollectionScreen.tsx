import React from "react";
import InputWithButton from "./InputWithButton";
import { AuthDataInterface } from "./AuthScreen";
import Link from "next/link";

const AuthScreen = ({
  setShowOtp,
  authData,
  setAuthData,
}: {
  setShowOtp: React.Dispatch<React.SetStateAction<boolean>>;
  authData: AuthDataInterface;
  setAuthData: React.Dispatch<React.SetStateAction<AuthDataInterface>>;
}) => {
  return (
    <div className="flex flex-col justify-between h-full items-center">
      <div className="mt-6 flex flex-col items-center">
        <h1 className="text-gray-900 font-semibold leading-[38px] text-[30px] font-neuehaasMedium text-center">
          Login or Create an Account
        </h1>
        <h2 className="text-gray-500 font-normal leading-[24px] text-[16px] mt-2 text-center">
          25+ OTTs, 200 channels, all-in-one convenient subscription
        </h2>

        <form className="mt-6 text-gray-500 font-normal text-[14px] flex flex-col w-full gap-2">
          <label htmlFor="mobile">Enter your mobile number</label>
          <InputWithButton
            id="mobile"
            onClickHandle={() => setShowOtp((prevValue: boolean) => !prevValue)}
            authData={authData}
            setAuthData={setAuthData}
          />
        </form>

        <p className="text-gray-500 text-[14px] font-normal text-center mt-5">
          You acknowledge that you have read and understood, and agree to Dor’s{" "}
          <span className="text-primary-400">
            <Link href={"/termsofuse"}>Terms</Link>
          </span>{" "}
          and{" "}
          <span className="text-primary-400">
            <Link href={"/privacypolicy"}>Privacy Policy</Link>
          </span>
        </p>
      </div>
      <div className="flex gap-1 items-center">
      <label className="flex items-center cursor-pointer relative">
          <input type="checkbox" className="peer h-5 w-5 border-2 cursor-pointer transition-all appearance-none rounded  border-gray-900 checked:bg-tranparent checked:border-gray-900"/>
          <span className="absolute text-gray-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="#131313" stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>
        <p className="text-[16px] font-normal leading-6 text-gray-900 ">
          Remember Me
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;
