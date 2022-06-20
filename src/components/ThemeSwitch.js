import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  let appTheme = isDark ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = appTheme;
  }, [isDark]);
  return (
    <div>
      {isDark ? (
        <FaSun className="theme-icon" onClick={() => setIsDark(!isDark)} />
      ) : (
        <FaMoon className="theme-icon" onClick={() => setIsDark(!isDark)} />
      )}
      {isDark ? "Dark Mode" : "Light Mode"}
    </div>
  );
};

export default ThemeSwitch;
