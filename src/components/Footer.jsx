import React from "react";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twitter.png";

function Footer() {
  return (
    <div className="bg-blue-900 pt-32 pb-20 px-10 md:px-28 text-white mt-16">
      <div className="md:flex justify-content-between ">
        <div className="mx-8 md:w-2/4">
          <h1 className="text-xl font-bold py-6 font-raleway">
            About the company
          </h1>
          <p className="text-sm leading-relaxed">
            Eyefid intelligence is a marketing consulting and research firm that
            helps businesses who are at the initial phase of starting their
            business, grow their idea, develop their product(s) and build a
            sustainable business plan /pitch deck using our Data intelligence
            technology.
          </p>
        </div>

        <div className="mx-8 md:w-1/4">
          <h1 className="text-xl font-bold py-6 font-raleway">Newsletter</h1>
          <p className="font-poppins">
            Stay updated with our lates projects and resources
          </p>
        </div>

        <div className="mx-8 md:w-1/4">
          <h1 className="text-xl font-bold py-6 font-raleway">Follow us</h1>
          <div className="flex justify-between">
            <a href="https://instagram.com/eyefid">
              <img src={facebook} alt="facebook" />
            </a>
            <div>
              <img src={twitter} alt="twitter" />
            </div>
            <a href="https://instagram.com/eyefid_intelligence" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center justify-center mt-12">
        <p className="font-poppins">@ Eyefid | All Rights Reserved. | 2019</p>
      </div>
    </div>
  );
}

export default Footer;
