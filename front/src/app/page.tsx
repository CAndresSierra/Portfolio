"use client";

import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="h-full">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center xl:flex-row justify-between xl:pt-8 xl:pb-24">
          <div className="text-center flex flex-col xl:text-start items-center xl:items-start">
            <div className="flex flex-row items-center py-1 px-2 bg-gradient-to-r from-[#393939] to-[#292929] rounded-full shadow-xl">
              <span className="bg-gradient-to-r from-cyan-400 to-gray-50 bg-clip-text text-transparent text-sm font-bold antialiased">
                Hola!, soy Camilo Sierra
              </span>
            </div>
            <div>
              <span className="bg-gradient-to-r from-accent via-slate-400 to-gray-300 bg-clip-text text-transparent text-6xl xl:text-8xl ">
                Full-Stack Developer
              </span>
            </div>
            <p className="mt-6 mb-9 max-w-[500px] xl:text-justify text-white/80">
              Soy Desarrollador web full-stack, vivo en Barranquilla,Colombia.
              Estoy dispuesto a contribuir en tu proyecto con el fin de que este
              haga la diferencia.
            </p>
            <div className="flex justify-between gap-5 xl:gap-10 xl:justify-start">
              <a href="./CV Camilo Sierra.pdf" download>
                <button className="flex gap-2 items-center border-[1px] rounded-full px-4 py-2 text-accent hover:bg-accent hover:text-primary hover:font-bold duration-300 border-accent ">
                  DESCARGAR CV <FiDownload className="text-lg" />
                </button>
              </a>
              <Link href="/contact">
                <button className="flex gap-2 items-center border-[1px] rounded-full px-4 py-2 bg-accent border-accent text-primary font-bold hover:bg-transparent hover:text-accent duration-200">
                  Contactame
                </button>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 1, ease: "easeInOut" }}
            className="h-full xl:w-[40%] flex justify-center mt-10 xl:mt-0"
          >
            <img
              src="./foto.png"
              alt="foto"
              className="rounded-full w-full h-full border-2 border-accent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
