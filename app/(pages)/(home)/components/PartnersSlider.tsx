"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PartnersSlider = () => {
  const images = [
    { src: "/assets/images/home/channels/channel (7).png" },
    { src: "/assets/images/home/channels/channel (2).png" },
    { src: "/assets/images/home/channels/channel (1).png" },
    { src: "/assets/images/home/channels/channel (6).png" },
    { src: "/assets/images/home/channels/channel (3).png" },
    { src: "/assets/images/home/channels/channel (4).png" },
    { src: "/assets/images/home/channels/channel (5).png" },
  ];
  return (
    <div className="py-6">
      <div className="hidden sm:block">
        <Marquee gradient={false} autoFill>
          <div className="flex items-center gap-x-8 sm:gap-x-4 lg:gap-x-12 xl:gap-x-16 px-4 sm:px-2 la:px-6 xl:px-8">
            {images.map((image, index) => (
              <Image
                key={index}
                sizes="100vw"
                width={0}
                height={0}
                className="w-14 sm:w-24 lg:w-28 xl:w-full"
                src={image.src}
                alt=""
              />
            ))}
          </div>
        </Marquee>
      </div>
      <div className=" sm:hidden">
        <Marquee gradient={false} autoFill>
          <div className="flex items-center px-4 sm:px-2 lg:px-6 xl:px-8">
            {images.slice(0, 5).map((image, index) => (
              <Image
                key={index}
                sizes="100vw"
                width={0}
                height={0}
                className="w-24 xl:w-full mr-10"
                src={image.src}
                alt=""
              />
            ))}
          </div>
        </Marquee>
      </div>
      <div className=" sm:hidden">
        <Marquee gradient={false} autoFill>
          <div className="flex items-center px-4 sm:px-2 lg:px-6 xl:px-8">
            {images.slice(4, 8).map((image, index) => (
              <Image
                key={index}
                sizes="100vw"
                width={0}
                height={0}
                className={`w-32 mr-20 ${
                  index == 1 ? "!w-14" : ""
                }`}
                src={image.src}
                alt=""
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
export default PartnersSlider;
