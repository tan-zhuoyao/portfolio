import React, { useEffect } from "react";
import "./styles.css";
import { ReactComponent as MoonIcon } from "../../assets/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/sun.svg";

const updateTheme = (isDarkEnabled) => {
  // Get CSS variables for background/foreground
  // const styles = getComputedStyle(document.body);
  // const black = styles.getPropertyValue("--black");
  // const white = styles.getPropertyValue("--white");
  // const docEl = document.documentElement;

  // if (isDarkEnabled) {
  //   docEl.style.setProperty("--background", black);
  //   docEl.style.setProperty("--foreground", white);
  //   document.querySelector("html").classList.add("darkmode");
  // } else {
  //   docEl.style.setProperty("--background", white);
  //   docEl.style.setProperty("--foreground", black);
  //   document.querySelector("html").classList.remove("darkmode");
  // }


    if (isDarkEnabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  

};    

const ThemeToggle = (props) => {
  
  const { isDarkEnabled, setIsDarkEnabled } = props;

  useEffect(() => {
    updateTheme(isDarkEnabled);
  }, [isDarkEnabled]);

  const toggleState = () => {
    setIsDarkEnabled((prevState) => !prevState);
  };

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isDarkEnabled ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {isDarkEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isDarkEnabled}
          onClick={toggleState}
          onChange={e => { }}
        />
      </div>
    </label>
  );
}

export default ThemeToggle;