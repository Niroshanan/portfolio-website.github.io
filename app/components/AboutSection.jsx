"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>C#</li>
        <li>Web Development</li>
        <li>Mobile development</li>
        <li>Block chain</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Mutwal Hindu College Colombo</li>
        <li>Royal Collge Colombo</li>
        <li>University of Kelaniya</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8  px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/contact.jpeg"
          width={400}
          height={500}
          alt="about-image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I&apos;m a dedicated and enthusiastic Computer Science student with a
            strong programming foundation in Java, C#, and C.Additionally, I
            possess expertise in web technologies, including HTML, CSS,
            JavaScript, React, and Next.js. My passion for software development
            fuels my continuous learning and adaptability to new technologies.
            Through academic projects, both solo and collaborative, I&apos;ve
            sharpened my problem-solving and teamwork skills. I&apos;m eager to apply
            my knowledge to create real-world solutions, aiming to make a
            positive impact in the field of software engineering.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
