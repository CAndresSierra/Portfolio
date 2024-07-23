"use client";
import { about } from "@/helpers/about";
import { education } from "@/helpers/education";

import { MdCircle } from "react-icons/md";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

//Icons
import Nextjs from "@/components/SkillIcons/Nextjs";
import React from "@/components/SkillIcons/React";
import TailwindCSS from "@/components/SkillIcons/TailwindCSS";
import TypeScript from "@/components/SkillIcons/TypeScript";
import JavaScript from "@/components/SkillIcons/JavaScript";
import CSS from "@/components/SkillIcons/CSS";
import HTML5 from "@/components/SkillIcons/HTML5";
import Nodejs from "@/components/SkillIcons/Nodejs";
import Expressjs from "@/components/SkillIcons/Expressjs";
import PostgreSQL from "@/components/SkillIcons/PostgreSQL";
import MongoDB from "@/components/SkillIcons/MongoDB";
import Git from "@/components/SkillIcons/Git";
import Github from "@/components/SkillIcons/Github";
import Postman from "@/components/SkillIcons/Postman";
import VisualStudioCode from "@/components/SkillIcons/VisualStudioCode";
import Vercel from "@/components/SkillIcons/Vercel";

const skills = {
  title: "Tecnologias",
  description: "Estas son las tecnologias con las que me siento mas comodo",
  skillList: [
    {
      title: "FrontEnd",
      icons: [
        {
          name: "Nextjs",
          icon: <Nextjs />,
        },
        {
          name: "React",
          icon: <React />,
        },
        {
          name: "TailwindCSS",
          icon: <TailwindCSS />,
        },
        {
          name: "TypeScript",
          icon: <TypeScript />,
        },
        {
          name: "JavaScript",
          icon: <JavaScript />,
        },
        {
          name: "CSS",
          icon: <CSS />,
        },
        {
          name: "HTML5",
          icon: <HTML5 />,
        },
      ],
    },
    {
      title: "BackEnd",
      icons: [
        {
          name: "Nodejs",
          icon: <Nodejs />,
        },
        {
          name: "Expressjs",
          icon: <Expressjs />,
        },
        {
          name: "PostgreSQL",
          icon: <PostgreSQL />,
        },
        {
          name: "MongoDB",
          icon: <MongoDB />,
        },
      ],
    },
    {
      title: "Tools",
      icons: [
        {
          name: "Git",
          icon: <Git />,
        },
        {
          name: "Github",
          icon: <Github />,
        },
        {
          name: "Postman",
          icon: <Postman />,
        },
        {
          name: "VScode",
          icon: <VisualStudioCode />,
        },
        {
          name: "Vercel",
          icon: <Vercel />,
        },
      ],
    },
  ],
};

const About = () => {
  return (
    <section className="h-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto h-full xl:mt-10">
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 0.4, ease: "easeOut" },
          }}
          className="h-full w-full flex items-center justify-center   py-0"
        >
          <Tabs
            defaultValue="about"
            className="flex flex-col items-center w-full   xl:justify-evenly"
          >
            <TabsList>
              <TabsTrigger value="about">Sobre mi</TabsTrigger>
              <TabsTrigger value="education">Educacion</TabsTrigger>
              <TabsTrigger value="skills">Hablilidades</TabsTrigger>
            </TabsList>
            <div className="mt-5  xl:mt-0">
              <TabsContent
                value="about"
                className="flex flex-col gap-5 xl:justify-start xl:items-start  justify-center items-center"
              >
                <h1 className="text-3xl">{about.title}</h1>
                <p className="text-center text-[15px] xl:text-[17px] xl:text-justify text-white/60">
                  {about.description}
                </p>
                <div className="flex flex-col gap-5 mt-4">
                  {about.info.map((item, index) => {
                    return (
                      <div key={index} className="flex gap-5 items-center">
                        <h1 className="text-white/70 text-[15px] xl:text-[17px]">
                          {item.title}:{" "}
                        </h1>
                        <p className="text-sm xl:text-base">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent
                value="education"
                className="flex flex-col gap-5 xl:justify-start xl:items-start  justify-center items-center mt-5"
              >
                <h1 className="text-3xl">{education.title}</h1>
                <div className="flex  flex-col xl:flex-row gap-5 xl:gap-10 ">
                  {education.items.map((item, index) => {
                    return (
                      <motion.div
                        initial={{ y: 250, opacity: 0 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.8, ease: "easeInOut" },
                        }}
                        key={index}
                        className="flex flex-col gap-3 bg-primary px-5 py-5 rounded-2xl"
                      >
                        <h1 className="text-sm text-accent">{item.duration}</h1>
                        <h1 className="w-[300px] text-xl">{item.title}</h1>
                        <div className="flex gap-2 items-center">
                          <MdCircle className="text-accent w-2 h-2" />
                          <h1 className="w-[300px] text-white/70 text-[14px]">
                            {item.enterprise}
                          </h1>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent
                value="skills"
                className="flex flex-col gap-5 xl:justify-start xl:items-start  justify-center items-center mt-5"
              >
                <h1 className="text-3xl">{skills.title}</h1>
                <p className="text-center text-[15px] xl:text-[17px] xl:text-justify text-white/60">
                  {skills.description}
                </p>
                <div className="flex flex-col xl:flex-row gap-5 xl:gap-10">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center bg-gradient-to-r from-black  to-gray-900 shadow-2xl px-5 py-5 gap-5 rounded-br-2xl rounded-tl-2xl"
                      >
                        <span className="text-[16px] px-3 py-1  rounded-full shadow-inner  bg-gradient-to-r border-[1px] border-accent   from-[#393939] to-[#292929]  text-white font-bold">
                          {skill.title}
                        </span>

                        <div className="flex flex-wrap gap-6">
                          {skill.icons.map((skill, index) => {
                            return (
                              <TooltipProvider key={index}>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <motion.div className="text-[70px] mb-5">
                                      {skill.icon}
                                    </motion.div>
                                  </TooltipTrigger>
                                  <TooltipContent>{skill.name}</TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
