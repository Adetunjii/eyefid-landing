import React from "react";
import eyefid_logo from "../assets/img/eyefid_logo.png";
import "./Header.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Insight", path: "/insight" },
  ];

  return (
    <header className="px-10 fixed top-0 left-0 bg-white w-full shadow-md">
      <div className="flex justify-between px-6 py-3 items-center">
        <div>
          <img src={eyefid_logo} alt="eyefid logo" className="h-10 md:h-16" />
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
    </header>
  );
}

export default Header;
