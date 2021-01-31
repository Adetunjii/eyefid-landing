import React from "react";
import eyefid_logo from "../assets/img/eyefid_logo.png";
import "./Header.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Insight", path: "#insight" },
    { name: "Pricing", path: "#pricing" },
  ];

  return (
    <header className="px-10">
      <div className="flex justify-between px-6 py-3 items-center">
        <div>
          <img src={eyefid_logo} alt="eyefid logo" className="h-16" />
        </div>
        <div className="sm:hidden md:flex justify-between items-center">
          {links.map((link, i) => (
            <Router>
              <AnchorLink
                href={link.path}
                className="text-sm px-3 text-gray-800  cursor-pointer"
                activeClassName="border-bottom-blue"
                key={i}
              >
                <div>{link.name}</div>
              </AnchorLink>
            </Router>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
