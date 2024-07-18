"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { M_PLUS_1 } from "next/font/google";

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
                }capitalize hover:text-accent transition-all duration-200 hover:translate-x-3`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
