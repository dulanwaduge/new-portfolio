"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, spring } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-50 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profilepicture.png"
              alt="profilepicture"
              width={150}
              height={150}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-[#059669] shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
              duration: 0.5,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 1 }}
      >
        <span>Hello, I'm </span>
        <span className="font-bold text-white">Dulan</span>. I'm a{" "}
        <span className="font-bold">developer</span> looking to{" "}
        <span className="font-bold">kickstart</span> my career. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">full-stack development</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-[#059669] text-white px-7 py-3 flex items-center gap-2 rounded-full 
                                                outline-none focus:scale-110 hover:scale-110 hover:bg-gray-800 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white text-[#059669] px-7 py-3 flex items-center gap-2 rounded-full outline-none  focus:scale-110 hover:scale-110 
                             active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950"
          href="/cv.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-[#059669] flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] 
                            hover:text-gray-950 active:scale-105 transition border border-black/10"
          href="https://www.linkedin.com/in/dulanwaduge/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-[#059669] flex items-center gap-2 text-[1.35rem] rounded-full outline-none 
                            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
          href="https://github.com/dulanwaduge"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
