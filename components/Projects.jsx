import React from "react";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a personal portfolio website to showcase skills, projects, and achievements. Implemented a clean and minimalist design with intuitive navigation to provide visitors with a comprehensive overview of professional expertise and accomplishmentsLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur?",
      imageSrc: "/images/portifolio.PNG",
      imageAlt: "Project 1 Image",
    },
    {
      id: 2,
      title: "Restaurant Menu Management System",
      description:
        "Developed a comprehensive menu management system for restaurants to streamline menu updates, inventory tracking, and order processing. Integrated with POS systems for efficient operations.",
      imageSrc: "/images/menu.PNG",
      imageAlt: "Project 2 Image",
    },
    {
      id: 3,
      title: "Contact Management Application",
      description:
        " Built a robust contact management application for organizing contacts, scheduling meetings, and tracking communications. Implemented features such as tagging, search, and reminders for enhanced productivity.",
      imageSrc: "/images/contact-manage.PNG",
      imageAlt: "Project 3 Image",
    },
    {
      id: 4,
      title: "Customer Relationship Management (CRM) System",
      description:
        "Designed and developed a CRM system for businesses to manage customer interactions, track sales opportunities, and analyze customer data. Customizable dashboards and reporting for actionable insights.",
      imageSrc: "/images/contact.PNG",
      imageAlt: "Project 3 Image",
    },
    {
      id: 5,
      title: "Mobile App Prototype",
      description:
        "Created a prototype for a mobile application that offers real-time weather updates and personalized recommendations. Implemented geolocation and weather APIs for accurate forecasts.",
      imageSrc: "/images/menu.PNG",
      imageAlt: "Project 3 Image",
    },
    {
      id: 6,
      title: "Travel Photography Portfolio",
      description:
        "Curated a stunning portfolio showcasing travel photography from around the world. Highlighted unique landscapes, cultures, and moments captured during various expeditions.",
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
