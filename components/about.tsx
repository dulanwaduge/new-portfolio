"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3 text-gray-400 text-md">
        I'm a passionate{" "}
        <span className="text-gray-300">software developer</span>, with a fresh
        perspective and strong foundation in{" "}
        <span className="text-gray-300">full-stack development</span>. I
        recently graduated with a degree in{" "}
        <span className="text-gray-300">Information Techology</span> from Monash
        University.
        <span className=""> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="">love</span> the feeling of
        finally figuring out a solution to a problem. My core stack is{" "}
        <span className="text-gray-300">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="text-gray-300">full-time position</span> as a
        software/web developer.
      </p>

      <p className="text-gray-400 text-md">
        <span className="">When I'm not coding</span>, I enjoy building
        computers, mixing music, and playing eight-ball. I also enjoy{" "}
        <span className="text-gray-300">learning new things</span>. I am
        currently learning <span className="text-gray-300">Next.js</span>.
      </p>
    </motion.section>
  );
}
