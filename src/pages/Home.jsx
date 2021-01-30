import React, { Component } from "react";
import business from "../assets/img/business.jpg";
import business2 from "../assets/img/business2.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="md:flex">
          <div className="md:w-1/2 py-20 md:py-40 px-10 md:px-24 ">
            <h1 className="font-black text-4xl md:text-6xl text-gray-900 mb-12 leading-snug">
              A Digital Product Design Agency
            </h1>
            <div className="bg-blue-900 text-white rounded-md p-3 text-center w-48 flex justify-between items-center shadow-xl">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-right h-8"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </div>
          </div>

          <div className="md:w-1/2 mx-8">
            <div className="bg-blue-900 rounded-lg h-screen z-0"></div>
          </div>
        </div>

        <div className="my-20 md:my-40 mx-12 md:mx-24">
          <div className="md:flex justify-between">
            <div className="pr-3 mb-10">
              <div className="flex justify-center">
                <div className="bg-blue-200 p-3 rounded-lg w-12">
                  <svg
                    width="24"
                    height="24"
                    className="text-blue-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21H4C3.44772 21 3 20.5523 3 20V3H5V19H21V21ZM8.373 16L7 14.656L11.856 9.9C12.2383 9.52848 12.8467 9.52848 13.229 9.9L15.456 12.081L19.627 8L21 9.344L16.144 14.1C15.7617 14.4715 15.1533 14.4715 14.771 14.1L12.543 11.918L8.374 16H8.373Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="my-3 font-bold text-lg text-gray-900 text-center">
                  Financial Planning
                </h1>
                <p className="mt-5 pr-5 text-sm text-gray-500 text-center leading-relaxed">
                  Our business plan is a written document describing a company's
                  core business activities, objectives and how it plans to
                  achieve these goals
                </p>
              </div>
            </div>

            <div className="pr-3 mb-10">
              <div className="flex justify-center">
                <div className="bg-green-200 p-3 rounded-lg w-12">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="text-green-700"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="my-3 font-bold text-lg text-gray-900 text-center">
                  Market Analysis
                </h1>
                <p className="mt-5 pr-5 text-sm text-gray-500 text-center leading-relaxed">
                  Our expert team make sensible decisions about their money, to
                  ensure they achieve their live goals. A financial plan,
                  generally provides a roadmap for achieving your live goals
                </p>
              </div>
            </div>

            <div className="pr-3 mb-10">
              <div className="flex justify-center">
                <div className="bg-yellow-200 p-3 rounded-lg w-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chart-pie text-yellow-700"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a0.9 .9 0 0 0 -1 -.8" />
                    <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="my-3 font-bold text-lg text-gray-900 text-center">
                  Business Planning
                </h1>
                <p className="mt-5 pr-5 text-sm text-gray-500 text-center leading-relaxed">
                  Our business plan is a written document describing a company's
                  core business activities, objectives and how it plans to
                  achieve these goals
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-40">
          <div className="md:flex justify-between">
            <div className="md:w-1/2">
              <img src={business} alt="img1" className="rounded-r-lg" />
            </div>

            <div className="px-10 md:px-32 py-20 md:w-1/2">
              <h1 className="text-gray-900 font-bold text-3xl ">
                Create Astonishing
              </h1>
              <h1 className="text-gray-900 font-bold text-3xl ">
                Business Proposals
              </h1>
              <p className="pt-10 text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae commodi ex modi repellendus aliquam, velit quibusdam
                earum, assumenda provident laboriosam quae eius laudantium
                temporibus aspernatur! Laudantium nam adipisci natus est!
              </p>
            </div>
          </div>

          <div className="md:flex justify-between">
            <div className="px-10 md:px-32 py-20 md:w-1/2">
              <h1 className="text-brown-800 font-bold text-3xl font-raleway">
                Get Top Notch
              </h1>
              <h1 className="text-brown-800 font-bold text-3xl font-raleway">
                Insights
              </h1>
              <p className="md:pt-10 text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                obcaecati maiores rerum quidem repudiandae quos sed illo, eius
                eos voluptates? Incidunt beatae tenetur dolor praesentium quo
                ullam exercitationem id! Ab?
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={business2}
                alt="business"
                className="w-full rounded-l-lg"
              />
            </div>
          </div>

          <div className="my-32">
            <h1 className="text-center text-3xl text-brown-800 font-raleway font-bold">
              PRICING
            </h1>
            <h1 className="text-center text-3xl text-brown-800 font-raleway font-bold">
              & OTHER NECESSARY INFO
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
