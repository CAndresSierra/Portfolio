"use client";
import { about } from "@/helpers/about";
import { education } from "@/helpers/education";
import { skills } from "@/helpers/skills";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="h-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto h-full">
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 0.4, ease: "easeOut" },
          }}
          className="h-full w-full flex items-center justify-center  py-12 xl:py-0"
        >
          <Tabs
            defaultValue="about"
            className="flex flex-col w-full xl:flex-row gap-10 xl:justify-evenly"
          >
            <TabsList>
              <TabsTrigger value="about">Sobre mi</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Tecnologias</TabsTrigger>
            </TabsList>
            <div className="">
              <TabsContent value="about">
                <h1>Sobre mi</h1>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
