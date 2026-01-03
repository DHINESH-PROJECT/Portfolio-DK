import { useState } from "react";

const EducationCard = ({ degree, abbreviation, cgpa, year, description, highlights }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="p-6 xs:p-8 bg-white hover:shadow-xl shadow-gray-300 ease-out duration-800 rounded-lg relative overflow-hidden"
    >
      <p
        className={`bg-picto-primary absolute start-0 w-0 h-full -mt-6 xs:-mt-8 ${
          hover && "duration-200 w-1.25"
        }`}
      />
      
      {/* Header with Year and CGPA */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            {abbreviation}
          </h3>
          <p className="text-[13px] sm:text-[16px] font-normal text-gray-700">
            {degree}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className={`${hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"} px-3 py-1 rounded-md transition-colors duration-300`}>
            <p className={`text-xs sm:text-sm font-semibold ${hover ? "text-white" : "text-picto-primary"}`}>
              {year}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">{cgpa}</span>
            <span className="text-xs sm:text-sm text-gray-500">CGPA</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[13px] sm:text-[16px] text-[#697482] mb-6 leading-relaxed">
        {description}
      </p>

      {/* Highlights */}
      <div className="space-y-3">
        <p className="text-sm sm:text-base font-semibold text-gray-900">Key Learnings</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-2"
            >
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${hover ? "bg-picto-primary" : "bg-[#A53DFF]"} transition-colors duration-300`}></div>
              <span className="text-[13px] sm:text-[15px] text-gray-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
