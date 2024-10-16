"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";

const HeroSpline = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <div className=" absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{ opacity: isSplineLoaded ? 1 : 0 }}
      >
        <div className="hidden sm:block">
          <Spline
            scene="https://prod.spline.design/AqtcxVfviJrvj7Od/scene.splinecode"
            onLoad={() => setIsSplineLoaded(true)}
          />
        </div>
        <div className="sm:hidden">
          <Spline
            scene="https://prod.spline.design/Ahm5gff6Y-coyvbT/scene.splinecode"
            onLoad={() => setIsSplineLoaded(true)}
            style={{height:"700px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSpline;
