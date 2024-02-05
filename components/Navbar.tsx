import React from "react";
import DarkMode from "./DarkMode";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>My Notes</a>
            </li>
            <li>
              <a>
                <Image
                  src={
                    "https://avatars.githubusercontent.com/u/72940944?s=400&u=1e1e61530417e0def5ace1f1318894cef735cccd&v=4"
                  }
                  alt="Andry Pebrianto Profile Picture"
                  width={30}
                  height={30}
                />
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Life Notes</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <a>My Notes</a>
          </li>
          <li>
            <details>
              <summary>
                <Image
                  src={
                    "https://avatars.githubusercontent.com/u/72940944?s=400&u=1e1e61530417e0def5ace1f1318894cef735cccd&v=4"
                  }
                  alt="Andry Pebrianto Profile Picture"
                  width={30}
                  height={30}
                />
                <span>Andry Pebrianto</span>
              </summary>
              <ul className="p-2">
                <li>
                  <a>Edit Profile</a>
                </li>
                <div className="divider m-0"></div>
                <li>
                  <a>
                    <DarkMode />
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost">Logout</a>
      </div>
    </nav>
  );
}
