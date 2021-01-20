import { ThemeContext } from "./themeContext";
import {useContext} from 'react'
const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  return (
    <label className="dark:text-white">
      <input
        type="checkbox"
        checked={isDark()}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      ></input>
      Dark Mode
    </label>
  );
};

export default Toggle;