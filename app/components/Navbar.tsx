"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleNav = () => {
    setActive((prevActive) => !prevActive);
  };

  const ref = useRef<any>();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  function handleClickOutside(e: any) {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
    }
  }

  return (
    <header className="py-3.5 absolute z-10 w-full top-0 left-0">
      <div className="container">
        <div className="flex items-center sm:gap-x-12 md:gap-x-16 xl:gap-x-20 ">
          <Link href="#" className="flex items-center">
            <Image
              src="./assets/images/home/logo.svg"
              width="67"
              height="32"
              alt=""
            />
          </Link>
          <div className="flex items-center gap-x-4 sm:hidden ml-auto">
            <Link
              href="#"
              className="text-[12px] font-semibold leading-[1.8] flex items-center gap-x-1 py-1.5 px-3 bg-[#F6443C] rounded-[20px]"
            >
              Sign In
              <Image
                src="./assets/images/home/right-chev.svg"
                width="8"
                height="12"
                alt=""
                className="w-2 h-auto"
              />
            </Link>
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={handleNav}
            >
              <Image
                src={"./assets/images/home/icons/dehaze.svg"}
                width="18"
                height="14"
                alt=""
              />
            </div>
          </div>
          <ul
            className={`flex px-10 py-8 sm:py-0 sm:px-0 gap-y-8 z-20 w-[80vw] sm:w-full flex-col sm:flex-row items-start h-full bg-[#222] sm:bg-transparent fixed sm:static top-0 left-0 px- ${
              active
                ? "left-0 transition-all ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-500 shadow-[0_0_0_5000px_rgba(0,0,0,0.5)]"
                : "left-[-100%] transition-all ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-500"
            } sm:items-center sm:gap-x-8 lg:gap-x-12 xl:gap-x-16 w-full`}
            ref={ref}
          >
            <div
              className="flex items-center justify-center absolute top-5 right-5 sm:hidden cursor-pointer"
              onClick={handleNav}
            >
              <Image src={"./xmark-solid.svg"} width="20" height="20" alt="" />
            </div>
            <li>
              <Link href="#" className="text-sm leading-[1.8]">
                DorTV
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm leading-[1.8]">
                DorPlay
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm leading-[1.8]">
                DorOS
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm leading-[1.8]">
                About
              </Link>
            </li>
            <li className="sm:ml-auto">
              <Link
                href="#"
                className="text-sm leading-[1.8] flex items-center gap-x-1"
              >
                <Image
                  src="./assets/images/home/help.svg"
                  width="13"
                  height="13"
                  alt=""
                />
                Support
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[12px] font-semibold leading-[1.8] flex items-center gap-x-1 py-1.5 px-3 bg-[#F6443C] rounded-[20px]"
              >
                Sign In
                <Image
                  src="./assets/images/home/right-chev.svg"
                  width="8"
                  height="12"
                  alt=""
                  className="w-2 h-auto"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
