"use client";

import React from "@/components/SkillIcons/React";
import Nextjs from "@/components/SkillIcons/Nextjs";
import TailwindCSS from "@/components/SkillIcons/TailwindCSS";
import TypeScript from "@/components/SkillIcons/TypeScript";
import PostgreSQL from "@/components/SkillIcons/PostgreSQL";
import NestJS from "@/components/SkillIcons/NestJS";
import Nodejs from "@/components/SkillIcons/Nodejs";
import CSS from "@/components/SkillIcons/CSS";
import MongoDB from "@/components/SkillIcons/MongoDB";
import HTML5 from "@/components/SkillIcons/HTML5";
import Redux from "@/components/SkillIcons/Redux";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import JavaScript from "@/components/SkillIcons/JavaScript";
import Bootstrap from "@/components/SkillIcons/Bootstrap";

const Projects = () => {
  const [isHover1, setIsHover1] = useState<boolean>(false);
  const [isHover2, setIsHover2] = useState<boolean>(false);
  const [isHover3, setIsHover3] = useState<boolean>(false);
  const [isHover4, setIsHover4] = useState<boolean>(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="h-full">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gray-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(78, 76, 207, 0.322),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto h-full xl:mt-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center xl:items-start">
            <h1 className="text-3xl text-primary dark:text-white ">
              Proyectos
            </h1>
            <p className="text-center  font-medium dark:font-normal  text-[15px] xl:text-[17px] xl:text-justify text-primary/80 dark:text-white/60">
              Mis proyectos mas creativos. Cada uno de estos proyectos demuestra
              mi dedicacion, autonomia, trabajo en equipo y mi pasion por la
              programacion. Cada una de esas cualidades me permitio transformar
              ideas en realidades. Estoy encantado de compartirlos contigo.
            </p>
          </div>
          <motion.div className="flex flex-col items-center gap-10 ">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col xl:flex-row gap-10 xl:justify-evenly xl:w-full xl:gap-6"
            >
              <motion.div
                variants={item}
                className="flex rounded-3xl flex-col w-[350px] max-w-[350px] bg-gray-900 shadow-3xl"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.2, ease: "easeIn" },
                  }}
                  onHoverStart={() => setIsHover1(true)}
                  onHoverEnd={() => setIsHover1(false)}
                  className={`${
                    isHover1
                      ? "w-full bg-cover  bg-no-repeat h-[200px]  rounded-t-3xl flex items-start"
                      : "w-full bg-cover  bg-no-repeat h-[200px]  rounded-t-3xl flex items-start px-4 py-4"
                  }`}
                  style={{ backgroundImage: "url(./YouDrive.png)" }}
                >
                  {isHover1 ? (
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
                  {isHover1 && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                        className="backdrop-blur-md backdrop-brightness-50 w-full h-full flex flex-col px-5 py-5 items-center justify-center gap-3 rounded-t-3xl"
                      >
                        <a href="https://github.com/CAndresSierra/youdriveApp">
                          <button className="flex gap-2 items-center border-[1px] rounded-full px-4  text-accent  hover:bg-accent/80  hover:text-primary hover:font-bold duration-300 border-accent/80 ">
                            Repo <FaGithub className="size-5" />
                          </button>
                        </a>
                        <a href="https://youdrive.vercel.app">
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
              </motion.div>

              <motion.div
                variants={item}
                className="flex rounded-3xl flex-col w-[350px] max-w-[350px] bg-gray-900 shadow-3xl"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.2, ease: "easeIn" },
                  }}
                  onHoverStart={() => setIsHover2(true)}
                  onHoverEnd={() => setIsHover2(false)}
                  className={`${
                    isHover2
                      ? "w-full bg-cover  bg-no-repeat h-[200px]  rounded-t-3xl flex items-start"
                      : "w-full bg-cover  bg-no-repeat h-[200px]  rounded-t-3xl flex items-start px-4 py-4"
                  }`}
                  style={{ backgroundImage: "url(./e-commerce.png)" }}
                >
                  {isHover2 ? (
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
                  {isHover2 && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                        className="backdrop-blur-md backdrop-brightness-50 w-full h-full flex flex-col px-5 py-5 items-center justify-center gap-3 rounded-t-3xl"
                      >
                        <a href="https://github.com/CAndresSierra/E-commerce-BuyTech">
                          <button className="flex gap-2 items-center border-[1px] rounded-full px-4  text-accent  hover:bg-accent/80  hover:text-primary hover:font-bold duration-300 border-accent/80 ">
                            Repo <FaGithub className="size-5" />
                          </button>
                        </a>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </motion.div>
                <div className="px-5 mt-2 mb-5">
                  <h1 className="text-accent text-base">E-commerce App</h1>
                  <p className="text-[13px] text-justify">
                    Este es un proyecto e-commerce con funciones de inicio de
                    sesion, dashboard, carrito de compras...
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
                      <Nodejs className="text-sm" />
                      <p className="text-xs">NodeJS</p>
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col xl:flex-row gap-10  xl:justify-evenly xl:w-full xl:gap-6"
            >
              <motion.div
                variants={item}
                className="flex rounded-3xl flex-col w-[350px] max-w-[350px] bg-gray-900 shadow-3xl"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.2, ease: "easeIn" },
                  }}
                  onHoverStart={() => setIsHover3(true)}
                  onHoverEnd={() => setIsHover3(false)}
                  className={`${
                    isHover3
                      ? "w-full bg-cover  bg-no-repeat h-[200px]  rounded-t-3xl flex items-start"
                      : "w-full bg-cover  bg-no-repeat h-[200px]  rounded-t-3xl flex items-start px-4 py-4"
                  }`}
                  style={{ backgroundImage: "url(./barberStyle.png)" }}
                >
                  {isHover3 ? (
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
                  {isHover3 && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                        className="backdrop-blur-md backdrop-brightness-50 w-full h-full flex flex-col px-5 py-5 items-center justify-center gap-3 rounded-t-3xl"
                      >
                        <a href="https://github.com/CAndresSierra/shift-manager">
                          <button className="flex gap-2 items-center border-[1px] rounded-full px-4  text-accent  hover:bg-accent/80  hover:text-primary hover:font-bold duration-300 border-accent/80 ">
                            Repo <FaGithub className="size-5" />
                          </button>
                        </a>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </motion.div>
                <div className="px-5 mt-2 mb-5">
                  <h1 className="text-accent text-base">Shift Manager</h1>
                  <p className="text-[13px] text-justify">
                    Este proyecto es un manejador de turnos, el cual tiene el
                    CRUD completo, con funciones de inicio de sesion y de pedir
                    un turno...
                  </p>
                  <div className="grid grid-rows-3 grid-flow-col grid-wrap mt-3  gap-2">
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] px-2 h-8">
                      <React className="text-sm" />
                      <p className="text-xs">React.js</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2  w-[120px] mx-w-[120px] h-8 px-2">
                      <CSS className="text-sm" />
                      <p className="text-xs">Css</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <TypeScript className="text-sm" />
                      <p className="text-xs">TypeScript</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <Redux className="text-sm" />
                      <p className="text-xs">Redux</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <PostgreSQL className="text-sm" />
                      <p className="text-xs">PostgreSQL</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <Nodejs className="text-sm" />
                      <p className="text-xs">Nodejs</p>
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="flex rounded-3xl flex-col w-[350px] max-w-[350px] bg-gray-900 shadow-3xl"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.2, ease: "easeIn" },
                  }}
                  onHoverStart={() => setIsHover4(true)}
                  onHoverEnd={() => setIsHover4(false)}
                  className={`${
                    isHover4
                      ? "w-full bg-cover  bg-no-repeat h-[200px]  rounded-t-3xl flex items-start"
                      : "w-full bg-cover  bg-no-repeat h-[200px]  rounded-t-3xl flex items-start px-4 py-4"
                  }`}
                  style={{ backgroundImage: "url(./cineMagic.png)" }}
                >
                  {isHover4 ? (
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
                  {isHover4 && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                        className="backdrop-blur-md backdrop-brightness-50 w-full h-full flex flex-col px-5 py-5 items-center justify-center gap-3 rounded-t-3xl"
                      >
                        <a href="https://github.com/CAndresSierra/create-movie">
                          <button className="flex gap-2 items-center border-[1px] rounded-full px-4  text-accent  hover:bg-accent/80  hover:text-primary hover:font-bold duration-300 border-accent/80 ">
                            Repo <FaGithub className="size-5" />
                          </button>
                        </a>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </motion.div>
                <div className="px-5 mt-2 mb-5">
                  <h1 className="text-accent text-base">
                    Creador de peliculas
                  </h1>
                  <p className="text-[13px] text-justify">
                    Este es mi primer proyecto Full-Stack el cual su funcion es
                    crear una pelicula pasando los datos por un formulario.
                  </p>
                  <div className="grid grid-rows-3 grid-flow-col grid-wrap mt-3  gap-2">
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] px-2 h-8">
                      <JavaScript className="text-sm" />
                      <p className="text-xs">JavaScript</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2  w-[120px] mx-w-[120px] h-8 px-2">
                      <HTML5 className="text-sm" />
                      <p className="text-xs">Html</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <CSS className="text-sm" />
                      <p className="text-xs">Css</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <Bootstrap className="text-sm" />
                      <p className="text-xs">BootStrap</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <MongoDB className="text-sm" />
                      <p className="text-xs">MongoDB</p>
                    </span>
                    <span className="bg-black shadow-2xl rounded-xl flex items-center gap-2 w-[120px] mx-w-[120px] h-8 px-2">
                      <Nodejs className="text-sm" />
                      <p className="text-xs">Nodejs</p>
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
