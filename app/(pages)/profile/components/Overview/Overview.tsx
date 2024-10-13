import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Overview.module.css";

const menuItem = [
  {
    iconUrl: "/assets/icons/profile/overview.svg",
    title: "Overview",
  },
  {
    iconUrl: "/assets/icons/profile/my-plan.svg",
    title: "My Plan",
  },
  {
    iconUrl: "/assets/icons/profile/settings.svg",
    title: "Settings",
  },
  {
    iconUrl: "/assets/icons/profile/help.svg",
    title: "Help",
  },
  {
    iconUrl: "/assets/icons/profile/logout.svg",
    title: "Logout",
  },
];

const initialUserData = [
  {
    title: "First Name",
    value: "Rishabh",
  },
  {
    title: "Last Name",
    value: "Chaudhary",
  },
  {
    title: "Email",
    value: "rishabh@octarine.in",
  },
  {
    title: "Phone Number",
    value: "+91 98765 43210",
  },
];

const Overview = ({
  data,
}: {
  data: { name: string; phone: string; email: string };
}) => {
  const [menuSelected, setMenuSelected] = useState("Overview");
  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    if (data) {
      const newData = initialUserData.map((item) => {
        switch (item.title) {
          case "First Name":
            return { ...item, value: data.name.split(" ")[0] || "" };
          case "Last Name":
            return { ...item, value: data.name.split(" ")[1] || "" };
          case "Email":
            return { ...item, value: data.email || "" };
          case "Phone Number":
            return { ...item, value: data.phone || "" };
          default:
            return item;
        }
      });
      setUserData(newData);
    }
  }, [data]);

  return (
    <div className="w-full flex justify-center mt-[143px]">
      <div className=" w-[1120px] flex justify-between">
        <div>
          <div className="flex gap-2 cursor-pointer">
            <Image
              src={"/assets/icons/profile/arrow-left.svg"}
              alt="back icon"
              height={16}
              width={16}
            />
            <p className="text-[14px] font-normal text-secondary-400">Back</p>
          </div>
          <div className="mt-12 flex flex-col gap-6">
            {menuItem.map((item, index) => (
              <div
                className="flex gap-2 cursor-pointer"
                key={index}
                onClick={() => setMenuSelected(item.title)}
              >
                <Image
                  src={item.iconUrl}
                  alt="back icon"
                  height={16}
                  width={16}
                />
                <p
                  className={`text-[14px]  ${
                    menuSelected === item.title
                      ? "text-gray-50 font-semibold"
                      : "text-gray-400 font-normal"
                  }text-gray-50`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[824px] flex flex-col gap-10">
          <div>
            <h1 className="text-gray-50 text-[30px] font-neuehaasMedium leading-[38px]">
              {"Welcome, " + data.name.split(" ")[0]}
            </h1>
            <p className="text-gray-400 font-normal text-[14px] mt-2">
              Here are your membership details
            </p>
          </div>

          {/* subscription card */}
          <div className={`${styles.SubscriptionCard} p-6 rounded-xl`}>
            <div className="flex justify-between">
              <Image
                src={"/assets/images/profile/dor-play-logo.svg"}
                height={24}
                width={83.8}
                alt="Dor Play Logo"
              />
              <div className="flex relative -right-4">
                <Image
                  src={"/assets/images/payment/1.png"}
                  height={32.5}
                  width={32.5}
                  alt="Hotstar Logo"
                />
                <Image
                  className="relative right-1"
                  src={"/assets/images/payment/2.png"}
                  height={32.5}
                  width={32.5}
                  alt="Prime Video Logo"
                />
                <Image
                  className="relative right-2"
                  src={"/assets/images/payment/3.png"}
                  height={32.5}
                  width={32.5}
                  alt="Sonly Liv Logo"
                />
                <Image
                  className="relative right-3"
                  src={"/assets/images/payment/4.png"}
                  height={32.5}
                  width={32.5}
                  alt="Discovery Logo"
                />
                <div className=" relative right-4 h-[32.5px] w-[32.5px] bg-gray-900 rounded-3xl flex items-center justify-center">
                  <span className="text-gray-50 text-[11px] leading-4">
                    +17
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-[16.5px]">
              <p className="text-gray-50 text-[24px] font-semibold leading-8">
                ₹649
              </p>
              <span className="text-[12px] font-normal leading-[18px] text-gray-50">
                for 3 months
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <p className="text-[12px] text-gray-50 font-normal leading-[18px]">
                Expiring on 19 Nov 2024
              </p>
              <div className="flex gap-2">
                <p className="text-[14px] font-semibold text-gray-50">
                  Manage your Membership
                </p>
                <Image
                  src="/assets/icons/auth/arrow.svg"
                  height={14}
                  width={14}
                  alt="Forward icon"
                />
              </div>
            </div>
          </div>

          {/* user card */}
          <div
            className={`${styles.UserCard} py-8 px-6 rounded-xl border border-[#979797] flex justify-between`}
          >
            <div className="w-[78px] h-[78px]">
              <Image
                className="rounded-[60px]"
                src={"/assets/images/profile/profile-pic-card.png"}
                height={78}
                width={78}
                alt="Profile Image"
              />
            </div>
            <div className="w-[674px] flex flex-wrap gap-4">
              {userData.map((item, idx) => (
                <div className="flex flex-col w-[329px]" key={idx}>
                  <label
                    htmlFor="firstName"
                    className="text-[14px] text-gray-400 font-normal"
                  >
                    {item.title}
                  </label>
                  <input
                    disabled
                    id="firstName"
                    placeholder={item.value}
                    className="mt-2 rounded-[60px] border border-gray-800 bg-transparent focus:outline-none h-[52px]  pl-4 px-2 py-2"
                  ></input>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
