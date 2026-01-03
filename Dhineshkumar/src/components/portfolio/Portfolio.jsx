import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Full Stack Web Developer",
    title: "Responsive Website",
    description:
      "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    link: "https://github.com/DHINESH-PROJECT",
  },
  {
    id: 2,
    image: card2,
    category: "Web Development",
    title: "Small Business Website",
    description:
      "Designed an intuitive Website for small businesses, emphasizing clarity and user efficiency.",
    link: "https://github.com/DHINESH-PROJECT",
  },
  {
    id: 3,
    image: card3,
    category: "UI-UX DESIGN",
    title: "Web Application Design",
    description:
      "Developed a modern web application design with a focus on usability and seamless navigation for end users and so on.",
    link: "https://github.com/DHINESH-PROJECT",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center mt-12 md:mt-16 lg:mt-20">
        <a
          href="https://github.com/DHINESH-PROJECT"
          className="btn btn-primary rounded-xl py-3 px-6 text-center text-[16px] font-semibold hover:scale-105 transition-transform duration-300"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
