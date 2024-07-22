"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

//Components
import Nav from "./Nav";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8   text-white ">
      <div className="container flex justify-between items-center ">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            CS<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Nav*/}
        <motion.div
          className="hidden xl:flex items-center gap-8  "
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Nav />
        </motion.div>

        <div className="hidden xl:flex items-center gap-5">
          <motion.a
            href="https://www.linkedin.com/in/camilo-sierra-36ba612b2"
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.9 }}
            className="px-2 py-2 rounded-full text-accent border-accent border-[1px] hover:bg-accent hover:text-primary "
          >
            <FaLinkedinIn className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="https://github.com/CAndresSierra"
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="px-2 py-2 rounded-full text-accent border-accent border-[1px] hover:bg-accent hover:text-primary "
          >
            <FaGithub className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/camisierr3/"
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="px-2 py-2 rounded-full text-accent border-accent border-[1px] hover:bg-accent hover:text-primary "
          >
            <FaInstagram className="w-4 h-4" />
          </motion.a>
        </div>
        {/*Mobile Nav */}
        <div className="flex items-center px-1 py-1 hover:bg-[#282829] rounded-lg transition-all duration-200 xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
