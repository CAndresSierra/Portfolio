"use client";

import React from "@/components/SkillIcons/React";
import Nextjs from "@/components/SkillIcons/Nextjs";
import TailwindCSS from "@/components/SkillIcons/TailwindCSS";
import TypeScript from "@/components/SkillIcons/TypeScript";
import PostgreSQL from "@/components/SkillIcons/PostgreSQL";
import NestJS from "@/components/SkillIcons/NestJS";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <section className="h-full">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto h-full xl:mt-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center xl:items-start">
            <h1 className="text-3xl ">Proyectos</h1>
            <p className="text-center text-[15px] xl:text-[17px] xl:text-justify text-white/60">
              Mis proyectos mas creativos. Cada uno de estos proyectos demuestra
              mi dedicacion, autonomia, trabajo en equipo y mi pasion por la
              programacion. Cada una de esas cualidades me permitio transformar
              ideas en realidades. Estoy encantado de compartirlos contigo.
            </p>
          </div>
          <div className="flex flex-col items-center gap-10 ">
            <div className="flex flex-col xl:flex-row gap-10 xl:justify-evenly xl:w-full xl:gap-6">
              <div className="flex rounded-3xl flex-col w-[350px] max-w-[350px] bg-gray-900 shadow-3xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.2, ease: "easeIn" },
                  }}
                  onHoverStart={() => setIsHover(true)}
                  onHoverEnd={() => setIsHover(false)}
                  className={`${
                    isHover
                      ? "w-full bg-cover  bg-no-repeat h-[200px]  rounded-t-3xl flex items-start"
                      : "w-full bg-cover  bg-no-repeat h-[200px]  rounded-t-3xl flex items-start px-4 py-4"
                  }`}
                  style={{ backgroundImage: "url(./YouDrive.png)" }}
                >
                  {isHover ? (
                    <span className=" hidden backdrop-blur-sm shadow-2xl rounded-full  items-centerpx-2 px-2 py-[6px] ">
                      <p className="text-xs ">FullStack</p>
                    </span>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3 },
                      }}
                      className="flex backdrop-blur-sm shadow-2xl rounded-full  items-centerpx-2 px-2 py-[6px] "
                    >
                      <p className="text-xs ">FullStack</p>
                    </motion.span>
                  )}
                  {isHover && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          transition: {
                            duration: 0.2,
                            ease: "easeIn",
                          },
                        }}
                        className="backdrop-blur-md backdrop-brightness-50 w-full h-full flex flex-col px-5 py-5 items-center justify-center gap-3 rounded-t-3xl"
                      >
                        <a href="">
                          <button className="flex gap-2 items-center border-[1px] rounded-full px-4  text-accent  hover:bg-accent/80  hover:text-primary hover:font-bold duration-300 border-accent/80 ">
                            Repo <FaGithub className="size-5" />
                          </button>
                        </a>
                        <a href="">
                          <button className="flex gap-2 items-center border-[1px] rounded-full px-4  bg-accent/80 border-accent/80 text-primary font-bold hover:bg-transparent hover:text-accent duration-200">
                            Deploy <GrDeploy />
                          </button>
                        </a>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </motion.div>
                <div className="px-5 mt-2 mb-5">
                  <h1 className="text-accent text-base">YouDrive App</h1>
                  <p className="text-[13px] text-justify">
                    YouDriveApp es un proyecto grupal, pensado en el alquiler de
                    autos usuario/usuario con funciones de filtrado...
                  </p>
                  <div className="grid  grid-rows-3 grid-flow-col grid-wrap mt-3  gap-2">
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] px-2 h-8">
                      <React className="text-sm" />
                      <p className="text-xs">React.js</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2  w-[120px] mx-w-[120px] h-8 px-2">
                      <Nextjs className="text-sm" />
                      <p className="text-xs">Next.js</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <TypeScript className="text-sm" />
                      <p className="text-xs">TypeScript</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <TailwindCSS className="text-sm" />
                      <p className="text-xs">TailwindCSS</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <PostgreSQL className="text-sm" />
                      <p className="text-xs">PostgreSQL</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <NestJS className="text-sm" />
                      <p className="text-xs">NestJS</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex rounded-3xl flex-col w-[350px] max-w-[350px] bg-gray-900 shadow-3xl">
                <div
                  className=" w-full bg-contain  bg-no-repeat h-[200px] rounded-t-3xl flex items-start px-4 py-4"
                  style={{ backgroundImage: "url(./YouDrive.png)" }}
                >
                  <span className="backdrop-blur-sm shadow-2xl rounded-full flex items-centerpx-2 px-2 py-[6px] ">
                    <p className="text-xs ">FullStack</p>
                  </span>
                </div>
                <div className="px-5 mt-2 mb-5">
                  <h1 className="text-accent text-base">YouDrive App</h1>
                  <p className="text-[13px] text-justify">
                    YouDriveApp es un proyecto grupal, pensado en el alquiler de
                    autos usuario/usuario con funciones de filtrado...
                  </p>
                  <div className="grid grid-rows-3 grid-flow-col grid-wrap mt-3  gap-2">
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] px-2 h-8">
                      <React className="text-sm" />
                      <p className="text-xs">React.js</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2  w-[120px] mx-w-[120px] h-8 px-2">
                      <Nextjs className="text-sm" />
                      <p className="text-xs">Next.js</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <TypeScript className="text-sm" />
                      <p className="text-xs">TypeScript</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <TailwindCSS className="text-sm" />
                      <p className="text-xs">TailwindCSS</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <PostgreSQL className="text-sm" />
                      <p className="text-xs">PostgreSQL</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <NestJS className="text-sm" />
                      <p className="text-xs">NestJS</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-10  xl:justify-evenly xl:w-full xl:gap-6">
              <div className="flex rounded-3xl flex-col w-[350px] max-w-[350px] bg-gray-900 shadow-3xl">
                <div
                  className=" w-full bg-contain  bg-no-repeat h-[200px] rounded-t-3xl flex items-start px-4 py-4"
                  style={{ backgroundImage: "url(./YouDrive.png)" }}
                >
                  <span className="backdrop-blur-sm shadow-2xl rounded-full flex items-centerpx-2 px-2 py-[6px] ">
                    <p className="text-xs ">FullStack</p>
                  </span>
                </div>
                <div className="px-5 mt-2 mb-5">
                  <h1 className="text-accent text-base">YouDrive App</h1>
                  <p className="text-[13px] text-justify">
                    YouDriveApp es un proyecto grupal, pensado en el alquiler de
                    autos usuario/usuario con funciones de filtrado...
                  </p>
                  <div className="grid grid-rows-3 grid-flow-col grid-wrap mt-3  gap-2">
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] px-2 h-8">
                      <React className="text-sm" />
                      <p className="text-xs">React.js</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2  w-[120px] mx-w-[120px] h-8 px-2">
                      <Nextjs className="text-sm" />
                      <p className="text-xs">Next.js</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <TypeScript className="text-sm" />
                      <p className="text-xs">TypeScript</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <TailwindCSS className="text-sm" />
                      <p className="text-xs">TailwindCSS</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <PostgreSQL className="text-sm" />
                      <p className="text-xs">PostgreSQL</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <NestJS className="text-sm" />
                      <p className="text-xs">NestJS</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex rounded-3xl flex-col w-[350px] max-w-[350px] bg-gray-900 shadow-3xl">
                <div
                  className=" w-full bg-contain  bg-no-repeat h-[200px] rounded-t-3xl flex items-start px-4 py-4"
                  style={{ backgroundImage: "url(./YouDrive.png)" }}
                >
                  <span className="backdrop-blur-sm shadow-2xl rounded-full flex items-centerpx-2 px-2 py-[6px] ">
                    <p className="text-xs ">FullStack</p>
                  </span>
                </div>
                <div className="px-5 mt-2 mb-5">
                  <h1 className="text-accent text-base">YouDrive App</h1>
                  <p className="text-[13px] text-justify">
                    YouDriveApp es un proyecto grupal, pensado en el alquiler de
                    autos usuario/usuario con funciones de filtrado...
                  </p>
                  <div className="grid grid-rows-3 grid-flow-col grid-wrap mt-3  gap-2">
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] px-2 h-8">
                      <React className="text-sm" />
                      <p className="text-xs">React.js</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2  w-[120px] mx-w-[120px] h-8 px-2">
                      <Nextjs className="text-sm" />
                      <p className="text-xs">Next.js</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <TypeScript className="text-sm" />
                      <p className="text-xs">TypeScript</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <TailwindCSS className="text-sm" />
                      <p className="text-xs">TailwindCSS</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <PostgreSQL className="text-sm" />
                      <p className="text-xs">PostgreSQL</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <NestJS className="text-sm" />
                      <p className="text-xs">NestJS</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
