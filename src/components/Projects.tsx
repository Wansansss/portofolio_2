"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React CountDown New Year Website",
    description: "Project 1 description",
    image: "/img/project1.png",
    tag: ["ALL", "Web"],
    giturl: "https://github.com/Wansansss/web-tahun-baru",
    previewUrl: "https://wansans.vercel.app/",
  },
  {
    id: 2,
    title: "Next JS React Anime List Website",
    description: "Project 2 description",
    image: "/img/project2.png",
    tag: ["ALL", "Web"],
    giturl: "https://github.com/Wansansss/webanime",
    previewUrl: "https://animetrailer.vercel.app/",
  },
  {
    id: 3,
    title: "Next JS React Portofolio Website",
    description: "Project 3 description",
    image: "/img/project3.png",
    tag: ["ALL", "Web"],
    giturl: "https://github.com/Wansansss/portofolio_2",
    previewUrl: "https://wansans-profile.vercel.app/",
  },
  {
    id: 4,
    title: "Coming Soon",
    description: "Project 4 description",
    image: " ",
    tag: ["Mobile","ALL"],
    giturl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "Project 4 description",
    image: " ",
    tag: ["Mobile","ALL"],
    giturl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Coming Soon",
    description: "Project 4 description",
    image: " ",
    tag: ["ALL","Web"],
    giturl: "/",
    previewUrl: "/",
  },
];

function Projects() {
  const [tag, setTag] = useState("ALL");

  const handleTag = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <div className="text-white  flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTag}
          isSelected={tag === "ALL"}
          name="ALL"
        />
        <ProjectTag
          onClick={handleTag}
          isSelected={tag === "Web"}
          name="Web"
        />
        <ProjectTag
          onClick={handleTag}
          isSelected={tag === "Mobile"}
          name="Mobile"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.giturl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
