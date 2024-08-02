"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import {
  MdOutlineContactSupport,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent } from "./ui/dropdown-menu";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Sobre mi",
    path: "/about",
  },
  {
    name: "Proyectos",
    path: "/projects",
  },
  {
    name: "Contacto",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  const [lightMode, setLightMode] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (lightMode) {
      document.querySelector("html")?.classList.add("light");
    } else {
      document.querySelector("html")?.classList.remove("light");
    }
  }, [lightMode]);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLightMode = () => {
    setLightMode(true);
    setDarkMode(false);
  };

  const handleDarkMode = () => {
    setDarkMode(true);
    setLightMode(false);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuBurger className="text-cyan-500 dark:text-accent  text-[32px] " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className="flex flex-col gap-5 mt-10 justify-center ">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "border-b-2 border-cyan-500 dark:border-accent transition-all duration-200"
                }capitalize font-semibold text-primary dark:text-white hover:text-cyan-500 dark:hover:text-accent transition-all duration-200 hover:translate-x-3 flex gap-2 items-center`}
              >
                {link.path === "/" && <GoHome />}

                {link.path === "/about" && <AiOutlineUser />}
                {link.path === "/projects" && <GrProjects />}
                {link.path === "/contact" && <MdOutlineContactSupport />}
                {link.name}
              </Link>
            );
          })}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className=" dark:text-white font-semibold text-primary hover:text-cyan-500 capitalize dark:hover:text-accent transition-all duration-200 hover:translate-x-3 flex gap-2 items-center">
                {lightMode && <MdOutlineLightMode />}
                {darkMode && <MdOutlineDarkMode />}
                Tema
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="flex flex-col items-start justify-evenly w-full">
                <button
                  onClick={handleLightMode}
                  className={`${
                    lightMode && "text-cyan-500 font-bold"
                  } flex flex-row items-center gap-2 hover:bg-gray-300 dark:hover:bg-slate-900 w-full px-2 rounded-md duration-200`}
                >
                  <MdOutlineLightMode />
                  Claro
                </button>
                <button
                  onClick={handleDarkMode}
                  className={`${
                    darkMode && "text-accent font-bold"
                  } flex flex-row items-center gap-2  hover:bg-gray-300 dark:hover:bg-slate-900 w-full px-2 rounded-md duration-200`}
                >
                  <MdOutlineDarkMode />
                  Oscuro
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex gap-5 mt-10 justify-center">
          <h1 className="text-2xl font-semibold text-primary dark:text-white">
            Camilo<span className="text-cyan-500 dark:text-accent">.</span>
          </h1>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
