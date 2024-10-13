"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const MoviesSlider = () => {
  const images = [
    { src: "/assets/images/home/movies/img (1).png" },
    { src: "/assets/images/home/movies/img (2).png" },
    { src: "/assets/images/home/movies/img (3).png" },
    { src: "/assets/images/home/movies/img (5).png" },
    { src: "/assets/images/home/movies/img (6).png" },
    { src: "/assets/images/home/movies/img (7).png" },
    { src: "/assets/images/home/movies/img (8).png" },
    { src: "/assets/images/home/movies/img (9).png" },
    { src: "/assets/images/home/movies/img (10).png" },
  ];
  return (
    <>
      <div className="hidden sm:block">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="mb-4">
            <Marquee
              gradient={false}
              autoFill
              direction={index % 2 === 1 ? "right" : "left"}
            >
              <div className="flex items-center gap-x-5 px-2.5">
                {images
                  .sort(() => Math.random() - 0.5)
                  .map((image, index) => (
                    <Image
                      key={index}
                      sizes="100vw"
                      width={347}
                      height={198}
                      className="h-[100px] sm:h-16 md:h-28 lg:h-32 xl:h-[198px] w-auto object-cover"
                      src={image.src}
                      alt=""
                    />
                  ))}
              </div>
            </Marquee>
          </div>
        ))}
      </div>
      {Array.from({ length: 2 }).map((_, ind) => (
        <div className=" sm:hidden">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="mb-4">
              <Marquee
                gradient={false}
                autoFill
                direction={
                  ind == 0
                    ? index % 2 === 1
                      ? "right"
                      : "left"
                    : index % 2 === 1
                    ? "left"
                    : "right"
                }
              >
                <div className="flex items-center gap-x-5 px-2.5">
                  {images
                    .sort(() => Math.random() - 0.5)
                    .slice(
                      index === 0 ? 0 : index === 1 ? 4 : 7,
                      index === 0 ? 4 : index === 1 ? 7 : 10
                    )
                    .map((image, index) => (
                      <Image
                        key={index}
                        sizes="100vw"
                        width={347}
                        height={198}
                        className="h-[100px] sm:h-16 md:h-28 lg:h-32 xl:h-[198px] w-auto object-cover"
                        src={image.src}
                        alt=""
                      />
                    ))}
                </div>
              </Marquee>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
export default MoviesSlider;
