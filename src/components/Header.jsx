import React from "react";
import eyefid_logo from "../assets/img/eyefid_logo.png";

function Header() {
  const links = ["Home", "About", "Contact"];

  return (
    <header>
      <div className="flex justify-between px-6 py-3 items-center">
        <div>
          <img src={eyefid_logo} alt="eyefid logo" className="h-12" />
        </div>
        <div className="flex justify-between items-center">
          {links.map((link, i) => (
            <div className="text-sm px-3 text-gray-800" key={i}>
              {link}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
