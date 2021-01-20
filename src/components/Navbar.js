import logo from "../images/logos/navbar_logo.png";
import {useState} from "react"
import Scroll from "react-scroll";
import { Link} from "react-router-dom";
import Toggle from "./Toggle";
const ScrollLink = Scroll.Link;

export default function Navbar({ fixed }) {
  const handleMenu =()=>{
    setIsOpen(!isOpen)
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex items-center dark:bg-gray-900 bg-white z-10 p-3 flex-wrap shadow-md w-full">
      <div className="p-2 mr-4 inline-flex items-center">
        <img src={logo} alt="" srcset="" />
        <span className="text-xl ml-2 text-blue-600 font-bold uppercase tracking-wide">
          VSSUT
        </span>
        <span className="text-xl ml-2 text-red-600 font-bold uppercase tracking-wide">
          Robotics
        </span>
      </div>
      {/* <button className="text-black font-bold py-2 px-4 rounded border-3 border-red">
        Dark Mode
      </button> */}
      <Toggle />
      <button
        className="menu dark:text-gray-400 text-black inline-flex p-3 hover:bg-blue-600 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
        onClick={handleMenu}
      >
        <svg viewBox="0 0 100 80" width="20" height="20">
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
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link
            to="/"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded dark:text-gray-400 text-gray-800 items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Home</span>
          </Link>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded dark:text-gray-400 text-gray-800 items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>About</span>
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded dark:text-gray-400 text-gray-800 items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Project</span>
          </ScrollLink>
          <ScrollLink
            to="achievements"
            spy={true}
            smooth={true}
            duration={500}
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded dark:text-gray-400 text-gray-800 items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Achievements</span>
          </ScrollLink>
          <ScrollLink
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded dark:text-gray-400 text-gray-800 items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Team</span>
          </ScrollLink>
          <ScrollLink
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded dark:text-gray-400 text-gray-800 items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Gallery</span>
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded dark:text-gray-400 text-gray-800 items-center justify-center hover:bg-blue-600 hover:text-white"
          >
            <span>Contact Us</span>
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}
