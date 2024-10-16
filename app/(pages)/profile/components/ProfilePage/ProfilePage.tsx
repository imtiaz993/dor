import Image from "next/image";
import { useState } from "react";
import Overview from "../Overview/Overview";
import HelpSupport from "../HelpSupport";
import Logout from "../Logout";

const menuItem = [
  {
    iconUrl: "/assets/icons/profile/overview.svg",
    title: "Overview",
  },
  {
    iconUrl: "/assets/icons/profile/my-plan.svg",
    title: "My Plan",
  },
  // {
  //   iconUrl: "/assets/icons/profile/settings.svg",
  //   title: "Settings",
  // },
  {
    iconUrl: "/assets/icons/profile/help.svg",
    title: "Help & Support",
  },
  {
    iconUrl: "/assets/icons/profile/logout.svg",
    title: "Logout",
  },
];

const ProfilePage = ({
  data,
}: {
  data: { name: string; phone: string; email: string };
}) => {
  const [menuSelected, setMenuSelected] = useState(["Overview"]);

  return (
    <div className="w-full flex justify-center py-[143px]">
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
                onClick={() =>
                  setMenuSelected((prevMenu) => {
                    console.log("prevMenu >>", prevMenu);
                    if (item.title == "Logout") {
                      let newMenu = [...prevMenu];
                      newMenu.push(item.title);
                      console.log(newMenu);
                      return newMenu;
                    }
                    return [item.title];
                  })
                }
              >
                <Image
                  src={item.iconUrl}
                  alt="back icon"
                  height={16}
                  width={16}
                />
                <p
                  className={`text-[14px]  ${
                    menuSelected[0] === item.title
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
        {menuSelected.indexOf("Overview") > -1 && <Overview data={data} />}
        {menuSelected.indexOf("Help & Support") > -1 && <HelpSupport />}
        {menuSelected.indexOf("Logout") > -1 && (
          <Logout
            user={data.name}
            logoutHandler={() =>
              setMenuSelected((prevMenu) => [...prevMenu].slice(0, 1))
            }
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
