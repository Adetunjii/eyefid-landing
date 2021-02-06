import React, { Component } from "react";
import ideas from "../assets/img/ideas.jpg";
import { Helmet } from "react-helmet";

class Insight1 extends Component {
  render() {
    return (
      <div className=" my-32 md:my-40">
        <Helmet>
          <title>Helen Edwards on why signs .... | Eyefid Intelligence</title>
        </Helmet>

        <div className="md:w-3/4 px-10 md:px-48 md:border-r-2 border-blue-900">
          <h1 className="text-4xl font-extrabold leading-snug">
            Helen Edwards on why signs should be the starting point for
            marketing, not the end point
          </h1>
          <p className="text-2xl font-medium text-gray-700 italic py-6">
            If a marketer really wants to read the mood of the nation, they need
            to tap into some “t-shirt wisdom”.
          </p>

          <p className="py-6 text-gray-800 font-bold">
            By <span className="text-blue-900"> marketing Week Reporters</span>{" "}
            | Feb 4 2021
          </p>
          <img src={ideas} alt="ideas" className="py-10" />

          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quo praesentium autem nihil provident beatae fuga
              inventore, modi tempora. Rem deserunt placeat maxime quos, iste
              accusantium illo sed consectetur eum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corporis voluptatem eaque, laboriosam aut consequatur, voluptas
              voluptates reiciendis, assumenda obcaecati praesentium nemo id.
              Deleniti voluptatum sit quas obcaecati consequuntur voluptates!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corporis voluptatem eaque, laboriosam aut consequatur, voluptas
              voluptates reiciendis, assumenda obcaecati praesentium nemo id.
              Deleniti voluptatum sit quas obcaecati consequuntur voluptates!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corporis voluptatem eaque, laboriosam aut consequatur, voluptas
              voluptates reiciendis, assumenda obcaecati praesentium nemo id.
              Deleniti voluptatum sit quas obcaecati consequuntur voluptates!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corporis voluptatem eaque, laboriosam aut consequatur, voluptas
              voluptates reiciendis, assumenda obcaecati praesentium nemo id.
              Deleniti voluptatum sit quas obcaecati consequuntur voluptates!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corporis voluptatem eaque, laboriosam aut consequatur, voluptas
              voluptates reiciendis, assumenda obcaecati praesentium nemo id.
              Deleniti voluptatum sit quas obcaecati consequuntur voluptates!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corporis voluptatem eaque, laboriosam aut consequatur, voluptas
              voluptates reiciendis, assumenda obcaecati praesentium nemo id.
              Deleniti voluptatum sit quas obcaecati consequuntur voluptates!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Insight1;
