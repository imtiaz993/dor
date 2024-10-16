"use client";

import React from "react";
import { useState } from "react";
import VerifyOTPScreen from "./VerifyOTPScreen";
import PhoneCollectionScreen from "./PhoneCollectionScreen";

export interface AuthDataInterface {
  name: string;
  phone: string;
  isPhoneValid: boolean
  email: string;
  rememberMe: boolean;
}

const AuthScreen = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [authData, setAuthData] = useState<AuthDataInterface>({
    name: "",
    phone: "",
    isPhoneValid: false,
    email: "",
    rememberMe: false,
  })
  return (
    <div className="h-full">
      {showOtp ? (
        <VerifyOTPScreen setShowOtp={setShowOtp} authData={authData}/>
      ) : (
        <PhoneCollectionScreen setShowOtp={setShowOtp} authData={authData} setAuthData={setAuthData}/>
        // null
      )}
    </div>
  );
};

export default AuthScreen;
