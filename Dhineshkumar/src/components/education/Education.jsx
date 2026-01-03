import EducationCard from "./EducationCard";

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    abbreviation: "MCA",
    cgpa: "8.25",
    year: "2026",
    description: "Advanced studies in computer science, software development, and emerging technologies.",
    highlights: ["Software Engineering", "Advanced Algorithms", "Cloud Computing", "AI & ML Fundamentals"]
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications",
    abbreviation: "BCA",
    cgpa: "7.1",
    year: "2024",
    description: "Foundation in programming, database management, and web technologies.",
    highlights: ["Core Programming", "Database Systems", "Web Development", "Data Structures"]
  }
];

const Education = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="education"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Education Journey</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Building a strong foundation in computer science through dedicated learning
            and academic excellence, constantly evolving with technology.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 mt-10">
        {educationData.map((education) => (
          <EducationCard key={education.id} {...education} />
        ))}
      </div>

      {/* Achievement Banner */}
      <div className="mt-12 bg-[#EDD8FF80] rounded-lg p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-around gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-picto-primary">5+</div>
            <div className="text-sm md:text-base text-gray-700 mt-1">Years of Study</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-picto-primary">7.67</div>
            <div className="text-sm md:text-base text-gray-700 mt-1">Overall CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-picto-primary">10+</div>
            <div className="text-sm md:text-base text-gray-700 mt-1">Projects Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
