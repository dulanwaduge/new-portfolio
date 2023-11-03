"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      
      <p className="mb-3">
        I'm a passionate{" "}
        <span className="font-medium">software developer</span>, with a fresh perspective
        and strong foundation in <span className="font-medium italic underline">full-stack development</span>. 
        I recently graduated with a degree in {" "}
        <span className="font-medium">Information Techology</span>{" "}from Monash University.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software/web
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy building computers, 
        mixing music, and playing eight-ball. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">Next.js</span>.
      </p>
    </motion.section>
  );
}
