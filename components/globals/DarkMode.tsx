"use client";

import React, { Fragment, useEffect, useState } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      const page = document.querySelector("html");
      if (page !== null && page instanceof HTMLElement) {
        page.setAttribute("data-theme", "business");
        setTheme(currentTheme);
      }
    }
  }, []);

  const changeTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");

      const page = document.querySelector("html");
      if (page !== null && page instanceof HTMLElement) {
        page.setAttribute("data-theme", "business");
        setTheme("dark");
      }
    } else {
      localStorage.setItem("theme", "light");

      const page = document.querySelector("html");
      if (page !== null && page instanceof HTMLElement) {
        page.setAttribute("data-theme", "light");
        setTheme("light");
      }
    }
  };

  return (
    <Fragment>
      <input
        type="checkbox"
        className="toggle"
        checked={theme === "dark"}
        onChange={changeTheme}
      />
      {theme === "dark" ? <span>Dark</span> : <span>Light</span>}
    </Fragment>
  );
}
