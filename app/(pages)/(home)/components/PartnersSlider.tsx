"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PartnersSlider = () => {
  const images = [
    {
      src: "/assets/images/home/channels/channel (7).png",
      width: 140,
      height: 43,
    },
    {
      src: "/assets/images/home/channels/channel (2).png",
      width: 150,
      height: 43,
    },
    {
      src: "/assets/images/home/channels/channel (1).png",
      width: 100,
      height: 100,
    },
    {
      src: "/assets/images/home/channels/channel (6).png",
      width: 150,
      height: 63,
    },
    {
      src: "/assets/images/home/channels/channel (3).png",
      width: 150,
      height: 119,
    },
    {
      src: "/assets/images/home/channels/channel (4).png",
      width: 80,
      height: 80,
    },
    {
      src: "/assets/images/home/channels/channel (5).png",
      width: 134,
      height: 30,
    },
  ];
  return (
    <div className="sm:py-0 relative z-[100]">
      <div className="hidden sm:block">
        <div className="flex items-center justify-between gap-x-8 sm:gap-x-4 lg:gap-x-12 xl:gap-x-16 px-4 sm:px-2 la:px-6 xl:px-8 overflow-hidden">
          {images.map((image, index) => (
            <Image
              key={index}
              width={image.width}
              height={image.height}
              className="!w-auto"
              src={image.src}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="sm:hidden">
        <Marquee gradient={false} autoFill>
          <div className="flex items-center gap-x-8 sm:gap-x-4 lg:gap-x-12 xl:gap-x-16 px-4 sm:px-2 la:px-6 xl:px-8 overflow-hidden">
            {images.map((image, index) => (
              <Image
                key={index}
                sizes="100vw"
                width={0}
                height={0}
                className="w-auto scale-125"
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
