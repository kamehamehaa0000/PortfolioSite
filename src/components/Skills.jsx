import React from 'react'
import { motion } from 'framer-motion'
import { FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { GrNode } from 'react-icons/gr'
import { SiExpress } from 'react-icons/si'
import { GoGitBranch } from 'react-icons/go'
import { TbBrandSocketIo } from 'react-icons/tb'
import { BiLogoTypescript } from 'react-icons/bi'
import { TbBrandFramerMotion } from 'react-icons/tb'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiPrisma } from 'react-icons/si'
import { TbBrandRedux } from 'react-icons/tb'
import { FaDocker } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { SiPostman } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import { RiBearSmileLine } from 'react-icons/ri'

const Skills = () => {
  return (
    <motion.div
      initial={{ scaleX: 0, scaleY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full flex-col sm:flex-row flex justify-between items-center p-5 sm:max-md:p-9 xl:py-12 xl:px-20 "
    >
      <div className="flex items-center justify-center ">
        <div className="text-4xl sm:max-md:5xl xl:text-7xl">
          <h1 className="flex py-1 items-center gap-5">
            <BiLogoTypescript />
            TypeScript
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <SiMongodb /> MongoDB
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <BiLogoPostgresql />
            PostgreSQL
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <SiExpress />
            Express
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <FaReact /> React
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <GrNode /> NodeJS
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <TbBrandRedux />
            Redux Toolkit
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <FaDocker />
            Docker
          </h1>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '500px' }}
        transition={{ delay: 0.5 }}
        className="w-[6px] hidden sm:flex md:max-xl:m-0  bg-lime-500 dark:bg-lime-400"
      ></motion.div>
      <div className="flex gap-5  sm:max-xl:mr-5 ">
        <div className="text-4xl sm:max-md:5xl xl:text-7xl my-12 xl:my:8 font-[Canopee] ">
          <h1 className="flex py-1 items-center gap-5">
            <SiCplusplus />
            C++
          </h1>
          <h1 className="flex  items-center gap-5">
            <GoGitBranch />
            Git
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <TbBrandSocketIo />
            Socket.io
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <TbBrandFramerMotion />
            Framer Motion
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <SiPrisma />
            Prisma
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <SiPostman />
            Postman
          </h1>
          <h1 className="flex py-1 items-center gap-5">
            <RiBearSmileLine />
            Zustand
          </h1>{' '}
          <h1 className="flex py-1 items-center gap-5">
            <FaAws />
            AWS
          </h1>{' '}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
