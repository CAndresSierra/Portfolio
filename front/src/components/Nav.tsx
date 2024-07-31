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
  {
    name: "Contacto",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  const [lightMode, setLightMode] = useState<string>("");
  const [darkMode, setDarkMode] = useState<string>("");
  const [theme, setTheme] = useState();

  console.log(darkMode);

  useEffect(() => {
    if (
      lightMode === "light" &&
      typeof window !== undefined &&
      window.localStorage
    ) {
      document.querySelector("html")?.classList.add("light");

      const theme = localStorage.setItem("theme", JSON.stringify("light"));
    } else {
      document.querySelector("html")?.classList.remove("light");
    }
  }, [lightMode]);

  useEffect(() => {
    if (darkMode === "dark") {
      document.querySelector("html")?.classList.add("dark");
      const theme = localStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLightMode = () => {
    setLightMode("light");
    setDarkMode("");
  };

  const handleDarkMode = () => {
    setDarkMode("dark");
    setLightMode("");
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all duration-200 `}
          >
            {link.name}
          </Link>
        );
      })}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="px-5 text-primary bg-accent font-bold hover:bg-accent/70 rounded-3xl duration-200">
            Tema
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className="flex flex-col items-start justify-evenly w-full">
            <button
              onClick={handleLightMode}
              className={`${
                lightMode === "light" && "text-cyan-500 font-bold"
              } flex flex-row items-center gap-2 hover:bg-gray-300 dark:hover:bg-slate-900 w-full px-2 rounded-md duration-200`}
            >
              <MdOutlineLightMode />
              Claro
            </button>
            <button
              onClick={handleDarkMode}
              className={`${
                darkMode === "dark" && "text-accent font-bold"
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
