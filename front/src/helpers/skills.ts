//Components
import Nextjs from "@/components/SkillIcons/Nextjs";
import React from "@/components/SkillIcons/React";
import TailwindCSS from "@/components/SkillIcons/TailwindCSS";
import TypeScript from "@/components/SkillIcons/TypeScript";
import JavaScript from "@/components/SkillIcons/Javascript";
import CSS from "@/components/SkillIcons/CSS";
import HTML5 from "@/components/SkillIcons/HTML5";
import Nodejs from "@/components/SkillIcons/Nodejs";
import Expressjs from "@/components/SkillIcons/Expressjs";
import PostgreSQL from "@/components/SkillIcons/PostgreSQL";
import MongoDB from "@/components/SkillIcons/MongoDB";
import Git from "@/components/SkillIcons/Git";
import Github from "@/components/SkillIcons/Github";
import Postman from "@/components/SkillIcons/Postman";
import VisualStudioCode from "@/components/SkillIcons/VisualStudioCode";
import Vercel from "@/components/SkillIcons/Vercel";

export const skills = {
  title: "Tecnologias",
  description: "Estas son las tecnologias con las que me siento mas comodo",
  skillList: [
    {
      title: "FrontEnd",
      icons: [
        {
          icon: "<Nextjs/>",
        },
        {
          icon: "<React/>",
        },
        {
          icon: "<TailwindCSS/>",
        },
        {
          icon: "<TypeScript/>",
        },
        {
          icon: "<JavaScript/>",
        },
        {
          icon: "<CSS/>",
        },
        {
          icon: "<HTML5/>",
        },
      ],
    },
    {
      title: "BackEnd",
      icons: [
        {
          icon: "<Nodejs/>",
        },
        {
          icon: "<Expressjs/>",
        },
        {
          icon: "<PostgreSQL/>",
        },
        {
          icon: "<MongoDB/>",
        },
      ],
    },
    {
      title: "Tools",
      icons: [
        {
          icon: "<Git/>",
        },
        {
          icon: "<Github/>",
        },
        {
          icon: "<Postman/>",
        },
        {
          icon: "<VisualStudioCode",
        },
        {
          icon: "<Vercel/>",
        },
      ],
    },
  ],
};
