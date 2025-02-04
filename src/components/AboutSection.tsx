"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
    {
        title : "Skills",
        id: "skills",
        content: (
        <ul className="list-disc pl-2">
            <li>Express</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
        </ul>
        ),
    },
    {
        title : "Education",
        id: "education",
        content: (
        <ul className="list-disc pl-2">
            <li>University Tarumanagara</li>
        </ul>
        ),
    },
    {
        title : "Certifications",
        id: "certifications",
        content: (
        <ul className="list-disc pl-2">
            <li>Data Analytics skill with SQL</li>
            <li>Red Hat System Administration I</li>
            <li>Java OOP Application Programming</li>
        </ul>
        ),
    },
]

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    
    <section id="about" className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 mt-12 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image src="/img/about-image.png" width={500} height={500} alt=""></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, TypeScript,  and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              actiive={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              actiive={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              actiive={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
                {
                    TAB_DATA.find((t) => t.id === tab)?.content
             }
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
