"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "Next.js Portfolio: A dynamic and responsive React-based website showcasing my projects, skills, and experiences. Explore my work and learn more about me in an interactive and user-friendly digital space",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Niroshanan/portfolio-website.github.io",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CovidTrack Android Mobile Application",
    description:
      "CovidTrack Android app: Utilizing blockchain technology and Bluetooth proximity, it offers secure and precise COVID-19 tracking, safeguarding communities with real-time exposure monitoring and contact tracing.",
    image: "/images/projects/covidtrack.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Niroshanan/CovidApp",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Java-based Inventory Management System",
    description:
      "A robust solution for efficiently tracking and managing inventory, offering real-time insights and control over stock, sales, and order processes.",
    image: "/images/projects/Inventory.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Niroshanan/Java_Inventory_Sysytem",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Date Counter (Ongoing)",
    description:
      "A versatile Android app to effortlessly track and countdown important dates, from events to milestones",
      image: "/images/projects/dateCounter.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Niroshanan/Date_Counter",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Spring Boot Students Marks Register API",
    description:
      "A lightweight RESTful service built with Spring Boot to insert and manage student data in a database, making mark registration effortless and efficient",
    image: "/images/projects/springboot.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Niroshanan/Spring-boot-students-marks-registering-system",
    previewUrl: "/",
  },
  {
    id: 6,
    title: ".NET Web API",
    description:
      "A C# Web API for seamless management of customer data, enabling the creation, update, and deletion of details, along with real-time access to active orders.",
    image: "/images/projects/WebApi.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Niroshanan/.NET-Web-API",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredData = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2
        className="text-center text-4xl font-bold text-white mb-8 md:mb-12"
        id="project"
      >
        My Projects
      </h2>
      <div className=" text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap:12">
        {filteredData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
