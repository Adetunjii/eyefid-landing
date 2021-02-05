import React, { useState } from "react";
import eyefid_logo from "../assets/img/eyefid_logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Insight", path: "/insight" },
  ];

  const [isToggled, setIsToggled] = useState(false);

  return (
    <header className="px-5 md:px-10 fixed top-0 left-0 bg-white w-full shadow-md z-50">
      <div className="flex justify-between px-6 py-3 items-center">
        <div>
          <img src={eyefid_logo} alt="eyefid logo" className="h-10 md:h-16" />
        </div>
        <div onClick={() => setIsToggled(!isToggled)}>
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="18" x2="20" y2="18" />
              <line x1="6" y1="12" x2="20" y2="12" />
              <line x1="0" y1="6" x2="20" y2="6" />
            </svg>
          </div>
        </div>

        <div className="hidden md:flex justify-between items-center">
          {links.map((link, i) => (
            <NavLink
              to={link.path}
              className="text-sm px-3 text-gray-800 cursor-pointer border-bottom-none"
              activeClassName="border-bottom-blue"
              exact={true}
              key={i}
            >
              <div>{link.name}</div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="md:hidden px-5  mt-0">
        <ul
          className={`${
            isToggled ? "block" : "hidden"
          } text-sm font-extrathin text-gray-800`}
        >
          {links.map((link, i) => (
            <NavLink
              to={link.path}
              className="text-sm px-3 text-gray-800 cursor-pointer border-bottom-none"
              activeClassName="border-bottom-blue"
              exact={true}
              onClick={() => setIsToggled(false)}
              key={i}
            >
              <div>{link.name}</div>
            </NavLink>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
