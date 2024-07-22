"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import path from "path";

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

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuBurger className="text-accent text-[32px] " />
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
                  "text-accent border-b-2 border-accent transition-all duration-200"
                }capitalize hover:text-accent transition-all duration-200 hover:translate-x-3 flex gap-2 items-center`}
              >
                {link.path === "/" && <GoHome />}

                {link.path === "/about" && <AiOutlineUser />}
                {link.path === "/projects" && <GrProjects />}
                {link.path === "/contact" && <MdOutlineContactSupport />}
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-5 mt-10 justify-center">
          <h1 className="text-2xl font-semibold">
            Camilo<span className="text-accent">.</span>
          </h1>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
