import React from "react";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur?",
      imageSrc: "/images/image3.jpg",
      imageAlt: "Project 1 Image",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur?",
      imageSrc: "/images/image3.jpg",
      imageAlt: "Project 2 Image",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur?",
      imageSrc: "/images/image3.jpg",
      imageAlt: "Project 3 Image",
    },
    {
      id: 4,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur?",
      imageSrc: "/images/image3.jpg",
      imageAlt: "Project 3 Image",
    },
    {
      id: 5,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur?",
      imageSrc: "/images/image3.jpg",
      imageAlt: "Project 3 Image",
    },
    {
      id: 6,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur?",
      imageSrc: "/images/image3.jpg",
      imageAlt: "Project 3 Image",
    },
  ];

  return (
    <div className=" bg-red-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
