import React from 'react'
import { motion } from 'framer-motion'
import { FaNode, FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { GrNode } from 'react-icons/gr'
import { SiExpress } from 'react-icons/si'
import { PiFramerLogoThin, PiFramerLogo } from 'react-icons/pi'
import { TbBrandCpp } from 'react-icons/tb'
import { SiJavascript } from 'react-icons/si'
import { GoGitBranch } from 'react-icons/go'
import { MdOutlineAnimation } from 'react-icons/md'
import { SiSocketdotio } from 'react-icons/si'

const Skills = () => {
  return (
    <motion.div
      initial={{ scaleX: 0, scaleY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full flex-col sm:flex-row flex justify-between items-center p-14 "
    >
      <div className="flex gap-5 ">
        <div className="w-[70px] xl:w-[100px] rounded-3xl border-2 border-black flex flex-wrap items-center justify-between p-4 ">
          <SiMongodb className=" text-6xl xl:text-8xl border-b-2 border-black" />
          <SiExpress className=" text-6xl xl:text-8xl border-b-2 border-black " />
          <FaReact className=" text-6xl xl:text-8xl border-b-2 border-black " />
          <GrNode className=" text-6xl xl:text-8xl border-b-2 border-black " />
          <PiFramerLogo className="text-6xl xl:text-8xl" />
        </div>
        <div className="text-6xl xl:text-8xl my-8 font-[Canopee] ">
          <h1>MongoDB</h1>
          <h1>Express</h1>
          <h1>React</h1>
          <h1>NodeJS</h1>
          <h1>Framer Motion</h1>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '500px' }}
        transition={{ delay: 0.5 }}
        className="w-[2px] hidden sm:flex md:max-xl:m-10  bg-black"
      ></motion.div>
      <div className="flex gap-5 rotate-90">
        <div className="text-6xl xl:text-8xl my-12 xl:my:8 font-[Canopee] ">
          <h1>C++</h1>
          <h1>JavaScript</h1>
          <h1>Git</h1>
          <h1>GSAP</h1>
          <h1>Socket.io</h1>
        </div>
        <div className="w-[70px] xl:w-[100px] rounded-3xl border-2 border-black flex flex-wrap items-center justify-between p-4 ">
          <TbBrandCpp className="text-6xl xl:text-8xl " />
          <SiJavascript className="text-6xl xl:text-8xl" />
          <GoGitBranch className="text-6xl xl:text-8xl inline" />
          <MdOutlineAnimation className="text-6xl xl:text-8xl inline" />
          <SiSocketdotio className="text-6xl xl:text-8xl inline" />
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
