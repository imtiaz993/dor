"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";

const OSSpline = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <div className="max-h-[500px] sm:max-h-[100000px] sm:w-1/2 absolute inset-0 z-10 overflow-hidden">
      <div
        className="w-full absolute z-20 inset-0 transition-opacity duration-500 ease-in-out sm:mt-20"
        style={{ opacity: isSplineLoaded ? 1 : 0 }}
      >
        <Spline
          scene="https://prod.spline.design/xvXsA049xzDlUDQo/scene.splinecode"
          onLoad={() => setIsSplineLoaded(true)}
        />
      </div>
    </div>
  );
};

export default OSSpline;
