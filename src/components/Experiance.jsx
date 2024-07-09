import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import reactjs from "../../public/reactjs.png";
import python from "../../public/python.png";
import oracle from "../../public/oracle.png";
import cpp from "../../public/cpp.png";
import mongoDB from "../../public/mongodb.jpg";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: cpp,
      name: "C++",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 7,
      logo: mongoDB,
      name: "MongoDB",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="text-white mb-4 text-lg">
          Explore the technologies I have worked with:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="group flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-gray-800 hover:bg-gray-900 text-white"
            >
              <div className="relative w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full bg-gray-900">
                <img
                  src={logo}
                  alt={name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 text-lg font-semibold text-white text-center">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
