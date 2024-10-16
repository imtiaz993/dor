import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";

interface OtpInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  autoFocus?: boolean;
}

const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  onComplete,
  autoFocus = true,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const checkOtpCompletion = useCallback(
    (newOtp: string[]) => {
      if (
        newOtp.every((val) => val !== "") &&
        newOtp.length === length &&
        onComplete
      ) {
        onComplete(newOtp.join(""));
        console.log(newOtp.join(""));
      }
    },
    [length, onComplete]
  );

  const focusInput = (index: number) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index]?.focus();
    }
  };

  const handleClick = (index: number) => {
    inputRefs.current[index]?.setSelectionRange(1, 1);
  };

  const handleChange = useCallback(
    (index: number, e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "").slice(-1);
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < length - 1) {
        const nextIndexIfSomeFieldMissing = newOtp.findIndex(
          (number) => !number.length
        );
        const nextIndexToFocus =
          nextIndexIfSomeFieldMissing === -1
            ? index + 1
            : nextIndexIfSomeFieldMissing;
        focusInput(nextIndexToFocus);
      }

      checkOtpCompletion(newOtp);
    },
    [otp, length, checkOtpCompletion]
  );

  const handleKeyDown = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        e.preventDefault();
        focusInput(index - 1);
      } else if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        focusInput(index - 1);
      } else if (e.key == "ArrowLeft" && index == 0) {
        e.preventDefault();
        handleClick(0);
      } else if (e.key === "ArrowRight" && index < length - 1) {
        e.preventDefault();
        focusInput(index + 1);
      }
    },
    [otp, length]
  );

  const handlePaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData("text/plain")
        .replace(/\D/g, "")
        .slice(0, length);
      const newOtp = [...otp];

      for (let i = 0; i < pastedData.length; i++) {
        newOtp[i] = pastedData[i];
      }

      setOtp(newOtp);
      focusInput(Math.min(pastedData.length, length - 1));
      checkOtpCompletion(newOtp);
    },
    [otp, length, checkOtpCompletion]
  );

  return (
    <div className="flex gap-3">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          ref={(el: HTMLInputElement | null) => {
            if (el) {
              inputRefs.current[index] = el;
            }
          }}
          value={value}
          onClick={() => handleClick(index)}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={index === 0 ? handlePaste : undefined}
          maxLength={1}
          aria-label={`OTP digit ${index + 1}`}
          className={` w-10 md:w-[70px] h-[33px] md:h-[52px] border ${
            value ? "border-secondary-500" : "border-gray-500"
          } rounded-[30px] p-2 md:p-[10px] text-gray-900 text-center focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      ))}
    </div>
  );
};

export default OtpInput;
