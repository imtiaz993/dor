import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pb-6 lg:pb-8 xl:pb-10">
      <div className="container">
        <ul className="gap-y-4 flex-col sm:flex-row flex sm:items-center justify-between py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <li>
            <Link href={"#dor"} className="text-[12px] text-[#F7F7F7]">
              DorTV
            </Link>
          </li>
          <li>
            <Link href={"#dor"} className="text-[12px] text-[#F7F7F7]">
              DorPlay
            </Link>
          </li>
          <li>
            <Link href={"#dorOS"} className="text-[12px] text-[#F7F7F7]">
              DorOS
            </Link>
          </li>
          <li>
            <Link href={"#"} className="text-[12px] text-[#F7F7F7]">
              About Dor
            </Link>
          </li>
          <li>
            <Link href={"#"} className="text-[12px] text-[#F7F7F7]">
              Customer Support
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2 flex-wrap justify-between">
          <p className="text-[11px] text-[#646464]">
            Copyright © 2024 Dor. All rights reserved.
          </p>
          <ul className="flex items-center justify-between gap-x-4">
            <li>
              <Link
                href={"/privacypolicy"}
                className="text-[11px] text-[#646464]"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="text-[11px] text-[#646464]">|</li>
            <li>
              <Link href={"/termsofuse"} className="text-[11px] text-[#646464]">
                Terms of Use
              </Link>
            </li>
            <li className="text-[11px] text-[#646464]">|</li>
            <li>
              <Link href={"#"} className="text-[11px] text-[#646464]">
                Sales Policy
              </Link>
            </li>
            <li className="text-[11px] text-[#646464]">|</li>
            <li>
              <Link href={"#"} className="text-[11px] text-[#646464]">
                Legal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
