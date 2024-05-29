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
        <li>Node.js</li>
        <li>Análise de dados</li>
        <li>PostgreSQL</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Experiência profissional",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>lorem</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis, natus ducimus provident mollitia voluptates eveniet, magnam iste sint error, nisi quam animi unde minus saepe harum maxime et vero?</li>
      </ul>
    ),
  },
  {
    title: "Certificações",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Data Analysis</li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Eu sou um desenvolvedor fullstack brasileiro sempre em busca de novos desafios. Tenho experiência com Java, Python, Javacript, React e PostgreSQL e análise de dados. Tenho facilidade para trabalhar em equipe e aprender coisas novas se necessário.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Experiência profissional{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificações{" "}
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
