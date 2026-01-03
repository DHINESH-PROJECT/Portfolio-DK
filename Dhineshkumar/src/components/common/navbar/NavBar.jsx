import { useEffect, useState } from "react";
import logo from "/logo.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Education", url: "education" },
  { id: 4, name: "Process", url: "work-process" },
  { id: 5, name: "Portfolio", url: "portfolio" },
  { id: 6, name: "Blog", url: "blog" },
  { id: 7, name: "Services", url: "services" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const mobileMenu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      className="px-4 py-3 cursor-pointer rounded-lg hover:bg-picto-primary hover:text-white transition-all text-base font-medium block"
    >
      {item.name}
    </Link>
  </li>
));

const desktopMenu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      className="px-4 py-2 cursor-pointer rounded-lg hover:text-picto-primary transition-all text-base font-medium"
      activeClass="text-picto-primary font-semibold"
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between items-center mx-auto content px-4 lg:px-8 py-3">
        {/* Logo and Brand */}
        <Link
          href="#introduction"
          to="introduction"
          smooth={true}
          duration={900}
          className="flex items-center cursor-pointer"
        >
          <img 
            src={logo} 
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl object-cover" 
            alt="Dhinesh Kumar Logo" 
          />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] ml-2 sm:ml-3 font-semibold whitespace-nowrap">
            Dhinesh Kumar
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="flex items-center gap-1">
            {desktopMenu}
          </ul>
          <Link
            className="btn btn-md btn-primary rounded-xl px-6 ml-4"
            href="#contact"
            to="contact"
            smooth={true}
            duration={900}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-lg z-100 mt-3 w-56 p-3 shadow-xl bg-white border border-gray-200"
          >
            {mobileMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
