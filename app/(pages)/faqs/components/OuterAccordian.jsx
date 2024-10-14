import Image from "next/image";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import InnerAccordian from "./InnerAccordian";

const ANIMATION_DURATION = 300;

const OuterAccordian = ({
  category,
  questions,
  setActiveOuterAccordion,
  activeOuterAccordion,
  index,
}) => {
  const [activeInnerAccordion, setActiveInnerAccordion] = useState(0);

  const openAnimation = useSpring({
    from: { maxHeight: "0px" },
    to: {
      maxHeight: activeOuterAccordion === index ? "2400px" : "0px",
    },
    config: { duration: ANIMATION_DURATION },
  });

  return (
    <>
      <div
        className="flex justify-between cursor-pointer select-none"
        onClick={() => {
          setActiveOuterAccordion((prevIndex) => {
            if (prevIndex === index) return null;
            else return index;
          });
          setTimeout(() => {
            const offset = `${window.innerWidth >= 768 ? 800 : 800}`;
            const location = document.getElementById(category).offsetTop;
            window.scrollTo({ top: location - offset,  behavior: "smooth" });

          }, ANIMATION_DURATION+1);
        }}
      >
        <p className="text-gray-50 font-neue-medium text-[24px] ">
          {category + " " + "(" + questions.length + ")"}
        </p>
        <Image
          src={
            activeOuterAccordion === index
              ? "/assets/icons/faq/remove.svg"
              : "/assets/icons/faq/add.svg"
          }
          alt="button"
          width={30}
          height={30}
        />
      </div>
      <animated.div className="overflow-hidden my-4" style={openAnimation}>
        {questions.map((question, idx) => (
          <InnerAccordian
            key={idx}
            index={idx}
            question={question}
            activeInnerAccordion={activeInnerAccordion}
            setActiveInnerAccordion={setActiveInnerAccordion}
          />
        ))}
      </animated.div>
    </>
  );
};

export default OuterAccordian;
