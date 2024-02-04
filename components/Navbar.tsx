import React from "react";
import DarkMode from "./DarkMode";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Life Notes</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <a>My Notes</a>
          </li>
          <li>
            <details>
              <summary>Andry Pebrianto</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Edit Profile</a>
                </li>
                <div className="divider m-0"></div>
                <li>
                  <a>
                    <DarkMode />
                  </a>
                </li>
                <div className="divider m-0"></div>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
}
