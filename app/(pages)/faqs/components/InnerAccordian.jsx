import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useSpring, animated } from "react-spring";

const InnerAccordian = ({
  index,
  question,
  activeInnerAccordion,
  setActiveInnerAccordion,
}) => {
  const [content, setContent] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/faq?question=${question}`);

      if (response.status !== 200) {
        throw new Error(response.data.error || "An error occurred");
      }
      setContent(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    if(index==0) fetchData();
  },[])

  const openAnimation = useSpring({
    from: { maxHeight: "0px" },
    to: {
      maxHeight: activeInnerAccordion === index ? "1000px" : "0px",
    },
    config: { duration: "300" },
  });

  return (
    <div className="py-3 cursor-pointer border-[#333] border-b-[1px]">
      <div
        onClick={() => {
          setActiveInnerAccordion((prevIndex) => {
            if (prevIndex === index) return null;
            return index;
          });

          fetchData();
        }}
        className="flex justify-between"
      >
        <p className="text-gray-50 text-[16px] mt-0">{question}</p>
        <Image
          src={"/assets/icons/faq/arrow.svg"}
          alt="button"
          width={24}
          height={24}
          className={`transition-all ease-in duration-200 ${
            activeInnerAccordion === index ? "rotate-180" : ""
          }`}
        />
      </div>
      <animated.div
        className={`overflow-hidden text-gray-400 mt-[10px] ${
          activeInnerAccordion === index ? "block" : "hidden"
        }`}
        style={openAnimation}
        dangerouslySetInnerHTML={{ __html: content }}
      ></animated.div>
    </div>
  );
};

export default InnerAccordian;
