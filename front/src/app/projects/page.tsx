import React from "@/components/SkillIcons/React";
import Nextjs from "@/components/SkillIcons/Nextjs";
import TailwindCSS from "@/components/SkillIcons/TailwindCSS";
import TypeScript from "@/components/SkillIcons/TypeScript";
import PostgreSQL from "@/components/SkillIcons/PostgreSQL";
import NestJS from "@/components/SkillIcons/Nestjs";

const Projects = () => {
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
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-6">
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

            <div className="flex flex-col xl:flex-row gap-10 xl:gap-6">
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
