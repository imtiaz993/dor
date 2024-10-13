import React from "react";
import InputWithButton from "./InputWithButton";
import { AuthDataInterface } from "./AuthScreen";

const AuthScreen = ({
  setShowOtp,
  authData,
  setAuthData,
}: {
  setShowOtp: React.Dispatch<React.SetStateAction<boolean>>;
  authData: AuthDataInterface
  setAuthData: React.Dispatch<
    React.SetStateAction<AuthDataInterface>
  >;
}) => {
  return (
    <div className="flex flex-col justify-between h-full items-center">
      <div className="mt-6 flex flex-col items-center">
        <h1 className="text-gray-900 font-semibold leading-[38px] text-[30px] font-neuehaasMedium">
          Login or Create an Account
        </h1>
        <h2 className="text-gray-500 font-normal leading-[24px] text-[16px] mt-2">
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
          <span className="text-primary-400">Terms</span> and{" "}
          <span className="text-primary-400">Privacy Policy</span>.
        </p>
      </div>
      <div className="flex gap-1 items-center">
        <input type="checkbox" className="w-5 h-5"></input>
        <p className="text-[16px] font-normal leading-6 text-gray-900">
          Remember Me
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;
