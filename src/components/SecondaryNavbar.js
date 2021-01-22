import logo from "../images/logos/navbar_logo.png";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center dark:bg-gray-900 fixed bg-white z-10 p-3 flex-wrap shadow-md w-full mb-10">
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
      <Link
        to="/"
        className=" sm:absolute sm:right-10 ml-2 px-3 py-2 rounded right bg-blue-600 text-white"
      >
        <span>
          <svg
            version="1.1"
            id="home"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18px"
            height="18px"
            viewBox="0 0 547.596 547.596"
          >
            <path
            fill="#ffffff"
              d="M540.76,254.788L294.506,38.216c-11.475-10.098-30.064-10.098-41.386,0L6.943,254.788
		c-11.475,10.098-8.415,18.284,6.885,18.284h75.964v221.773c0,12.087,9.945,22.108,22.108,22.108h92.947V371.067
		c0-12.087,9.945-22.108,22.109-22.108h93.865c12.239,0,22.108,9.792,22.108,22.108v145.886h92.947
		c12.24,0,22.108-9.945,22.108-22.108v-221.85h75.965C549.021,272.995,552.081,264.886,540.76,254.788z"
            />
          </svg>
        </span>
      </Link>
    </nav>
  );
}
