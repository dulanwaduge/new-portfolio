"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image';
import { motion } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Projects() {
  return (
    <motion.section className="text-center"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ delay: 0.200 }}
    >
        <SectionHeading>
            My Projects
        </SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))
            }
        </div>
    </motion.section>
  )
}

function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps){
    return <section className='group bg-emerald-950/30  max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-emerald-800/30 hover:border-white/5 hover:animate-pulse cursor-pointer transition'> 
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
                            group-even:right-[initial] group-even:-left-40
                            transition group-hover:-translate-x-3 group-hover:translate-y-3
                            group-hover:-rotate-2 group-hover:scale[-1.04]'  
                />
        
    </section>
}