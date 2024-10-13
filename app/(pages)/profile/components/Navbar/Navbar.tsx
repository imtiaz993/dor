import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = ({
  data,
}: {
  data: { name: string; phone: string; email: string };
}) => {
  return (
    <div className="bg-gray-900 border-b border-[#333] h-[60px] flex justify-center">
      <div className="w-[1120px] flex justify-between">
        <div className="h-full flex items-center gap-[80px]">
          <Image
            src={"/assets/icons/auth/dor-logo.svg"}
            alt="Dor logo"
            height={32}
            width={67.5}
          />
          <div className="w-[506px] h-full text-gray-50 text-[14px] font-neuehassLight leading-[24px] flex justify-between items-center">
            <p>DorTV</p>
            <p>DorPlay</p>
            <p>DorOS</p>
            <p>About</p>
            <p>Resources</p>
            <p>International</p>
          </div>
        </div>
        <div className="w-[216px] flex items-center justify-between gap-10">
          <div className="flex gap-2 h-full items-center">
            <Image
              src="/assets/icons/profile/support.svg"
              alt="Support icon"
              height={16}
              width={16}
            />
            <p className="text-[14px] leading-[24px] font-neuehassLight text-gray-50">
              Support
            </p>
          </div>
          <div className="w-[103px] flex justify-between items-center cursor-pointer h-full">
            <div
              className={`flex justify-center items-center w-7 h-7 rounded-[60px] ${styles.profileRing}`}
            >
              <Image
                src={"/assets/images/profile/profile-pic.png"}
                alt="profile picture"
                height={26}
                width={26}
                className={"rounded-[60px]"}
              />
            </div>
            <p className="text-[14px] font-neuehassLight text-gray-50 leading-[24px]">
              {data.name.split(" ")[0]}
            </p>
            <Image
              src={"/assets/icons/auth/arrow.svg"}
              height={14}
              width={14}
              alt="Arrow Dropdown"
              className="rotate-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
