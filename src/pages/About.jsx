import React, { Component } from "react";
import "./About.css";
import businessMen from "../assets/img/business-men.jpg";
import creativity from "../assets/img/creativity.jpg";
import grow from "../assets/img/grow.png";
import sweetspot from "../assets/img/sweetspot.png";

class About extends Component {
  render() {
    return (
      <div className="py-20 md:py-40">
        <div className="flex my-10 md:pl-24 px-10">
          <div className="md:w-3/5">
            <div className="">
              <h1 className="font-normal text-lg py-8 text-gray-900 border-bottom-blue">
                About
              </h1>
              <p className="font-medium text-xl md:text-4xl text-gray-900 leading-loose">
                We are a data driven marketing consulting firm that exist to
                make business sustainable by using intelligent data to position
                our client's product/servies at the brim of their customer's
                need.
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div
          className="md:bg-fixed bg-contain md:my-32 rounded-md"
          style={{
            backgroundImage: `url(${businessMen})`,
            backgroundRepeat: "no-repeat",
            height: "50vh",
          }}
        >
          <div className="h-auto md:h-screen"></div>
        </div>
        <div className="flex md:my-32 md:pl-24 px-10">
          <div className="md:w-3/5">
            <div className="">
              <h1 className="font-normal text-lg py-8 text-gray-900 border-bottom-blue">
                Our Goal
              </h1>
              <p className="font-medium text-xl md:text-4xl leading-snug text-gray-900 my-10">
                We help you create competitive and winning business plan that
                helps you effectively utilize your resources and maximize your
                profit.
              </p>

              <p className="font-medium text-xl md:text-4xl leading-loose text-gray-900 my-10">
                For us, the sustainability and success of your business is at
                the core of our operations and we won't stop there
              </p>
            </div>
          </div>
          <div></div>
        </div>

        <div className="flex justify-center my-10 px-10">
          <div className="md:flex justify-between">
            <div className="md:w-1/3 mx-10">
              <img
                src={creativity}
                alt="Creativity"
                className="object-contain overflow-hidden h-64"
              />
              <p className="py-6 font-semibold text-lg">
                Explore Your Creativity
              </p>
            </div>
            <div className="md:w-1/3 mx-10">
              <img
                src={sweetspot}
                alt="sweetspot"
                className="object-contain overflow-hidden h-64"
              />
              <p className="py-6 font-semibold text-lg">
                Uncover your business sweet spot
              </p>
            </div>
            <div className="md:w-1/3 mx-10">
              <img
                src={grow}
                alt="Grow"
                className="object-contain overflow-hidden h-64"
              />
              <p className="py-6 font-semibold text-lg">
                Help Your Business Grow
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
