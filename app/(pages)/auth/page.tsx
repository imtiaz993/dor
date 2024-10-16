import Image from "next/image";
import AuthScreen from "./components/AuthScreen";

const Auth = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/assets/images/auth/background.png"
        alt="Images of Movies and TV shows available in Dor"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="max-w-[600px] m-4 bg-gray-50 h-[545px] px-4 py-10 md:px-[60px] md:py-10 flex flex-col items-center rounded-xl">
          <Image
            src="/assets/icons/auth/dor-logo.svg"
            height={32}
            width={68}
            alt="Dor Logo"
          />
          <div className="h-full">
            <AuthScreen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
