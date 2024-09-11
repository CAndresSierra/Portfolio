"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenuContent } from "./ui/dropdown-menu";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
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
];

const Nav = () => {
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
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname
                ? "text-cyan-500 border-cyan-500 dark:text-accent border-b-2 dark:border-accent"
                : "text-primary dark:text-white"
            } capitalize  font-semibold hover:text-cyan-500 dark:hover:text-accent transition-all duration-200 `}
          >
            {link.name}
          </Link>
        );
      })}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="px-5 text-primary bg-cyan-400 hover:bg-cyan-500  dark:bg-accent font-bold dark:hover:bg-accent/70 rounded-3xl duration-200">
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
  );
};

export default Nav;
