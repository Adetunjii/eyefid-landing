import React from "react";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twitter.png";

function Footer() {
  return (
    <div className="bg-blue-900 pt-32 pb-20 px-10 md:px-28 text-white mt-16">
      <div className="md:flex justify-content-between ">
        <div className="mx-8 md:w-1/3">
          <h1 className="text-xl font-bold py-6 font-raleway">
            About the company
          </h1>
          <p className="font-poppins">
            Eyefid Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores non quo officia veritatis
          </p>
        </div>

        <div className="mx-8 md:w-1/3">
          <h1 className="text-xl font-bold py-6 font-raleway">Newsletter</h1>
          <p className="font-poppins">
            Stay updated with our lates projects and resources
          </p>
        </div>

        <div className="mx-8 md:w-1/3">
          <h1 className="text-xl font-bold py-6 font-raleway">Follow us</h1>
          <div className="flex justify-between">
            <div>
              <img src={facebook} alt="facebook" />
            </div>
            <div>
              <img src={twitter} alt="twitter" />
            </div>
            <div>
              <img src={instagram} alt="instagram" />
            </div>
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
