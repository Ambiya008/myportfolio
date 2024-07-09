import React from "react";

function PortFolio() {
  const projects = [
    {
      id: 1,
      title: "Internship Project",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "Food Delivery Project",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Fullstack Project",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      title: "Python Project",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div id="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
          {projects.map((project) => (
            <div
              className="border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition duration-300"
              key={project.id}
            >
              <h2 className="text-2xl font-bold mb-2 text-blue-600">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
