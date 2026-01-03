import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-96 p-4 md:p-5 flex items-start rounded-xl bg-[#F9FAFB] hover:bg-white transition-all duration-300 cursor-pointer hover:shadow-lg border border-transparent hover:border-gray-200 max-sm:mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-12 md:h-14 aspect-square ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF]"
        } center rounded-lg transition-all duration-300 shrink-0`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-xl md:text-2xl ${
            hover ? "text-white" : "text-picto-primary"
          } transition-all duration-300`}
        />
      </div>
      <div className="ml-4 flex-1">
        <p className="text-xs md:text-sm text-soft-dark font-medium mb-1">
          {item?.title}
        </p>
        <p className="text-sm md:text-base text-[#132238] font-semibold wrap-break-word">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
