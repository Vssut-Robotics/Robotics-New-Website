import logo from "../images/logos/navbar_logo.png";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Toggle from "./Toggle";

export default function Navbar() {
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center dark:bg-gray-900 fixed bg-white z-10 p-3 flex-wrap shadow-md w-full">
      <div className="p-2 mr-4 inline-flex items-center">
        <img src={logo} alt="Robotics Logo" />
        <span className="text-xl ml-2 text-blue-600 font-bold uppercase tracking-wide">
          VSSUT
        </span>
        <span className="text-xl ml-2 text-red-600 font-bold uppercase tracking-wide">
          Robotics
        </span>
      </div>
      <Toggle />
      <button
        onClick={handleMenu}
        className="menu dark:text-gray-300 text-gray-800 inline-flex p-3 hover:bg-blue-600 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
      >
        <svg
          viewBox="0 0 100 80"
          width="20"
          height="20"
          className="fill-current"
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        id="navigation"
      >
        <div
          className="lg:inline-flex navbar lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start dark:text-gray-300 flex flex-col lg:h-auto"
        >
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="lg:inline-flex navbar lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Home</span>
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="lg:inline-flex navbar lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>About</span>
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="lg:inline-flex navbar lg:w-auto w-full px-3 py-2 rounded  items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Project</span>
          </ScrollLink>
          <ScrollLink
            to="achievements"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="lg:inline-flex  navbar lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Achievements</span>
          </ScrollLink>
          <ScrollLink
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="lg:inline-flex navbar lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Team</span>
          </ScrollLink>
          <ScrollLink
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="lg:inline-flex navbar lg:w-auto w-full px-3 py-2 roundeditems-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Gallery</span>
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="lg:inline-flex navbar lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Contact Us</span>
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}
