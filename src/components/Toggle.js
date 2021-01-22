import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition border duration-500 ease-in-out dark:border-gray-500 rounded-full p-1">
      {theme === "dark" ? (
        <HiSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-700 dark:text-yellow-300 text-2xl cursor-pointer"
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-700 dark:text-yellow-300 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
