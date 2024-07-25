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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const About = () => {
  return (
    <section className="h-full">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
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
                  ¡Hola!, mi nombre es{" "}
                  <mark className="bg-transparent text-accent/80">
                    Camilo Sierra
                  </mark>
                  . soy{" "}
                  <mark className="bg-transparent text-orange-500/90">
                    desarrollador web full-stack
                  </mark>
                  . Mi pasion por la tecnologia y el desarrollo web me a hecho
                  una persona perseverante y dedicada en este mundo, y gracias a
                  esto he logrado crear{" "}
                  <mark className="bg-transparent text-accent/80">
                    aplicaciones web dinamicas, eficientes y escalables
                  </mark>{" "}
                  con tecnologias como{" "}
                  <mark className="bg-transparent text-orange-500/90">
                    Next.js, Node.js, React
                  </mark>{" "}
                  .
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
                  En mi camino por el{" "}
                  <mark className="bg-transparent text-accent/80">
                    desarrollo Web
                  </mark>
                  , he aprendido habilidades y experiencias en una variedad de
                  tecnologias.{" "}
                  <mark className="bg-transparent text-orange-500/90">
                    Mi Stack incluye
                  </mark>
                  :
                </p>
                <div className="flex flex-col xl:flex-row w-full xl:justify-center gap-5 xl:gap-10">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <motion.div
                        key={index}
                        className="flex flex-col  items-center bg-gradient-to-r from-black  to-gray-900 shadow-2xl px-5 py-5 gap-5 rounded-br-2xl rounded-tl-2xl outline-1 outline-dashed outline-accent"
                      >
                        <span className="text-3xl px-3 py-1   bg-gradient-to-b    bg-clip-text text-transparent from-accent  to-white  font-bold">
                          {skill.title}
                        </span>

                        <motion.div
                          variants={container}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-3 gap-6"
                        >
                          {skill.icons.map((skill, index) => {
                            return (
                              <TooltipProvider key={index}>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <motion.div
                                      variants={item}
                                      className="text-[50px] xl:text-[70px] mb-5"
                                    >
                                      {skill.icon}
                                    </motion.div>
                                  </TooltipTrigger>
                                  <TooltipContent>{skill.name}</TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            );
                          })}
                        </motion.div>
                      </motion.div>
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
