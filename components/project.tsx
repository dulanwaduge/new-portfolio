"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

import Image from 'next/image';

type ProjectProps = (typeof projectsData)[number];

export default function Project({title, description, tags, imageUrl}: ProjectProps){
    
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target:  ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1])
    const opactityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opactityProgress }} className="mb-3 sm:mb-8 last:mb-0 group">
            <section className='bg-emerald-950/30  max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] 
                        group-even:pl-8 hover:bg-emerald-800/30 hover:border-white/5 hover:animate-pulse cursor-pointer transition rounded-lg'> 
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>            
                    <h3 className='text-2xl font-semibold text-white'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-200'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2'>
                        {
                            tags.map((tag, index) =>(
                                <li key={index} className='bg-emerald-200 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-emerald-800 rounded-full'>
                                    {tag}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <Image src={imageUrl} alt="Projects" quality={95} 
                        className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
                            group-even:right-[initial] group-even:-left-40 transition 

                            group-hover:-translate-x-3 group-hover:translate-y-3
                            group-hover:-rotate-2 group-hover:scale[-1.04]

                            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 
                            group-even:group-hover:rotate-2' />
            </section>
        </motion.div>
)}