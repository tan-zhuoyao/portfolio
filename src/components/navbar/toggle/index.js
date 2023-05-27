import React, { useState, useEffect } from "react";
import "./styles.css";
import { ReactComponent as MoonIcon } from "../../../assets/moon.svg";
import { ReactComponent as SunIcon } from "../../../assets/sun.svg";

const updateTheme = (isDarkEnabled) => {
  // Get CSS variables for background/foreground
  const styles = getComputedStyle(document.body);
  const black = styles.getPropertyValue("--black");
  const white = styles.getPropertyValue("--white");
  const docEl = document.documentElement;

  if (isDarkEnabled) {
    docEl.style.setProperty("--background", black);
    docEl.style.setProperty("--foreground", white);
    document.querySelector("html").classList.add("darkmode");
  } else {
    docEl.style.setProperty("--background", white);
    docEl.style.setProperty("--foreground", black);
    document.querySelector("html").classList.remove("darkmode");
  }

  // if set via local storage previously
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

};

const ThemeToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    updateTheme(isEnabled);
  }, [isEnabled]);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isEnabled}
          onClick={toggleState}
          onChange={e => { }}
        />
      </div>
    </label>
  );
}

export default ThemeToggle;