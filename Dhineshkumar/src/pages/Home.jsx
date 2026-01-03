import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Education from "../components/education/Education";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="py-10 md:py-15 lg:py-20">
        <Education />
      </div>
      <div className="bg-soft-white pt-30 pb-10 md:pb-15 lg:pb-20">
        <WorkProcess />
      </div>
      <div className="py-10 md:py-15 lg:py-20">
        <Portfolio />
      </div>
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="blog-background py-10 md:py-15 lg:py-20">
        <Blog />
      </div>
      <div className="bg-soft-white py-10 md:py-15 lg:py-20">
        <Profession />
      </div>
      <div className="py-10 md:py-15 lg:py-20">
        <HappyClients />
      </div>
      <div className="py-10 md:py-15 lg:py-20">
        <Testimonial />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
