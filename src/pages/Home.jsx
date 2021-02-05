import React, { Component } from "react";
import business from "../assets/img/business.jpg";
import business2 from "../assets/img/business2.jpg";
import insight from "../assets/img/insight.jpg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="md:flex">
          <div className="md:w-1/2 py-20 md:py-40 px-10 md:pl-24 ">
            <h1 className="font-medium text-3xl md:text-4xl text-gray-900 my-16 leading-relaxed">
              The <span className="text-blue-900">FIRST</span> data intelligence
              business plan development technology.
            </h1>
            <p className="pb-10 text-gray-700">
              Create a business plan with no experience using our data
              intelligence technology
            </p>
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

        <div className="my-20 md:my-40 mx-12 md:mx-32">
          <div className="md:flex justify-between">
            <div className="pr-3 mb-10 md:w-1/3">
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
              <div className="text-center">
                <h1 className="my-3 font-bold text-lg text-gray-900">
                  Pitch Deck
                </h1>
                <p className="mt-5 pr-5 text-sm text-gray-700 leading-relaxed">
                  Using our Data Intelligence technology you can now create a
                  world standard business plan even at zero experience.
                </p>
              </div>
            </div>

            <div className="pr-3 mb-10 md:w-1/3">
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
              <div className="text-center">
                <h1 className="my-3 font-bold text-lg text-gray-900">
                  Marketing Strategy
                </h1>
                <p className="mt-5 pr-5 text-sm text-gray-700 leading-relaxed">
                  Fix your marketing pitfalls today by letting eyefid
                  intelligence team help you discover your potential target
                  market using renowned strategies to position your brand as
                  customers first choice.
                </p>
              </div>
            </div>

            <div className="pr-3 mb-10 md:w-1/3">
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
              <div className="text-center">
                <h1 className="my-3 font-bold text-lg text-gray-900">
                  Appointment with a consultant
                </h1>
                <p className="mt-5 pr-5 text-sm text-gray-700 leading-relaxed">
                  Our consultants are experts from your business sector who have
                  scaled their business from Zero to 100. Speak to an expert
                  today!
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
                Create Winning
              </h1>
              <h1 className="text-gray-900 font-bold text-3xl ">
                Business Plans
              </h1>
              <p className="pt-10 text-gray-700 text-lg leading-relaxed">
                Our data intelligence is a simple and easy to use technology
                that allows you to create a business plan using your personal
                creativity and self service to access your industry features as
                well as explore your design skill when you choose from the many
                templates the one that best meets your need.
              </p>
            </div>
          </div>

          <div className="md:flex justify-between">
            <div className="px-10 md:px-32 py-20 md:w-1/2">
              <h1 className="text-gray-900 font-bold text-3xl font-raleway">
                Get Competitive
              </h1>
              <h1 className="text-gray-900 font-bold text-3xl font-raleway">
                Insights
              </h1>
              <p className="md:pt-10 text-gray-700 text-lg leading-relaxed">
                Eyefid insight gives you access to classified information, new
                discovery and evolving tools that will give your business a
                competitive edge over competitors, placing you as FIRST among
                many others.
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

          {/* <div className="my-32 md:my-56 mx-10" id="about">
            <div>
              <h1 className="text-5xl md:text-9xl font-extrabold text-gray-100 flex justify-center whitespace-nowrap tracking-wider">
                ABOUT US
              </h1>
            </div>
            <div className="-mt-12 md:-mt-24 flex justify-center">
              <h1 className="text-lg md:text-3xl pb-1 md:pb-2 px-2 border-b-2 md:border-b-4 border-blue-900 w-28 md:w-48">
                ABOUT US
              </h1>
            </div>

            <div className="mx:10 md:mx-32">
              <p className="mt-24 mb-8 text-gray-700 text-sm tracking-wide leading-relaxed">
                Eyefid intelligence is a marketing consulting and research firm
                that helps businesses who are at the initial phase of starting
                their business, grow their idea, develop their product(s) and
                build a sustainable business plan /pitch deck using our Data
                intelligence technology.
              </p>

              <p className="my-8 text-gray-700 text-sm tracking-wide leading-relaxed">
                Our Business Plan intelligence is designed to help you
                understand your business industry, identify your competitors,
                uncover their strength and weaknesses, discover your potential
                target market and build highly competitive strategies for
                sustainable growth using our data intelligence suggestive
                feature.
              </p>
            </div>
          </div> */}

          <div className="my-20 md:my-56" id="insight">
            <div>
              <h1 className="text-5xl md:text-9xl font-extrabold text-gray-100 flex justify-center whitespace-nowrap tracking-wider">
                INSIGHT
              </h1>
            </div>
            <div className="-mt-12 md:-mt-24 flex justify-center">
              <h1 className="text-lg md:text-3xl pb-1 md:pb-2 px-2 border-b-2 md:border-b-4 border-blue-900 w-28 md:w-40">
                INSIGHT
              </h1>
            </div>

            <div className="mx:10 md:mx-32 my-32 justify-center md:flex justify-between items-center">
              <div className="md:w-1/2">
                <p className="mt-24 mb-8 mx-10 text-gray-700 text-xl font-medium tracking-wide leading-relaxed">
                  Eyefid insight gives you access to classified information, new
                  discovery and evolving tools that will give your business a
                  competitive edge over competitors, placing you as FIRST among
                  many others.
                </p>
              </div>
              <div className="md:w-1/2">
                <img src={insight} alt="insight" />
              </div>
            </div>
          </div>

          <div className="my-32 md:my-56" id="pricing">
            <div>
              <h1 className="text-5xl md:text-9xl font-extrabold text-gray-100 flex justify-center whitespace-nowrap tracking-wider">
                PRICING
              </h1>
            </div>
            <div className="-mt-12 md:-mt-24 flex justify-center">
              <h1 className="text-lg md:text-3xl pb-1 md:pb-2 px-2 border-b-2 md:border-b-4 border-blue-900 w-28 md:w-40">
                PRICING
              </h1>
            </div>

            <div className="mx-10 md:mx-64 my-28">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl md:text-3xl">Start now</h1>
                  <h1 className="text-xl md:text-3xl">
                    your <span className="font-medium">free plan</span>
                  </h1>
                </div>

                <div>
                  <p className="text-sm font-medium">Are you a corporate?</p>
                  <p className="text-sm text-blue-900 font-medium">
                    contact us
                  </p>
                </div>
              </div>

              <div className="md:flex">
                <div className="bg-gray-200 md:w-1/2 p-10 rounded-lg my-14 md:mr-10">
                  <div className="flex justify-between">
                    <h1 className="font-bold text-3xl  border-bottom-blue text-gray-900">
                      Lite
                    </h1>
                    <div>
                      <h1 className="font-medium text-right text-lg">Free</h1>
                      <p className="text-right text-gray-700">
                        with restrictions
                      </p>
                    </div>
                  </div>
                  <div className="py-10 text-gray-800">
                    <h2>Plan includes: </h2>
                    <p className="py-3">
                      {" "}
                      <span className="text-blue-900 font-bold pr-3">
                        ✓
                      </span>{" "}
                      Free business Account
                    </p>
                    <p className="py-3">
                      {" "}
                      <span className="text-blue-900 font-bold pr-3">
                        ✓
                      </span>{" "}
                      Free access to insight reports
                    </p>
                    <p className="py-3">
                      {" "}
                      <span className="text-blue-900 font-bold pr-3">
                        ✓
                      </span>{" "}
                      Watermarked version
                    </p>
                    <p className="py-3">
                      {" "}
                      <span className="text-blue-900 font-bold pr-3">
                        ✓
                      </span>{" "}
                      Lite version
                    </p>
                    <p className="py-3">
                      {" "}
                      <span className="text-blue-900 font-bold pr-3">✓</span> No
                      downloads
                    </p>

                    <div className="flex justify-center mt-12">
                      <div className="bg-blue-900 text-white rounded-lg py-3 px-5">
                        Start 14 days free trial
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900 md:w-1/2 p-10 rounded-lg my-14 md:ml-10 text-white shadow-2xl">
                  <div className="flex justify-between">
                    <h1 className="font-bold text-3xl border-bottom-white">
                      Pro
                    </h1>
                    <div>
                      <h1 className="font-medium text-right text-lg tracking-wider">
                        ₦5,000
                      </h1>
                      <p className="text-right text-white-100">Full Package</p>
                    </div>
                  </div>
                  <div className="py-10">
                    <h2>All of lite plus: </h2>
                    <p className="py-3">
                      <span className="text-white-900 font-medium pr-3">✓</span>{" "}
                      Free business account
                    </p>
                    <p className="py-3">
                      <span className="text-white-900 font-medium pr-3">✓</span>{" "}
                      Insight reports from your industry
                    </p>
                    <p className="py-3">
                      <span className="text-white-900 font-medium pr-3">✓</span>{" "}
                      Earn from affiliate programs
                    </p>
                    <p className="py-3">
                      <span className="text-white-900 font-medium pr-3">✓</span>{" "}
                      Access to grants
                    </p>
                    <p className="py-3">
                      <span className="text-white-900 font-medium pr-3">✓</span>{" "}
                      No watermark
                    </p>
                    <p className="py-3">
                      <span className="text-white-900 font-medium pr-3">✓</span>{" "}
                      HD Version
                    </p>
                    <p className="py-3">
                      <span className="text-white-900 font-medium pr-3">✓</span>{" "}
                      Downloads available
                    </p>
                    <div className="flex justify-center mt-12">
                      <div className="bg-white text-blue-900 rounded-lg py-3 px-5">
                        Start 14 days of free Pro plan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
