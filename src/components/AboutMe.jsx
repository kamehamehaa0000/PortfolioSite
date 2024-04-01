import React from 'react'
import { motion } from 'framer-motion'
import Grill from './Grill'
const AboutMe = () => {
  const heading1 = "I'M AAYUSH GUPTA".split(' ')
  const heading2 = 'Software Engineer /'.split(' ')
  const heading3 = 'Web Developer /'.split(' ')
  const heading4 = 'Learner & more ..... '.split(' ')
  return (
    <motion.div
      initial={{ scaleX: 0, scaleY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      transition={{ duration: 0.4 }}
      className=" w-full flex font-[Canopee] p-4 sm:px-10  py-12 "
    >
      <div className="text-3xl sm:max-xl:text-5xl  xl:text-6xl  flex-grow  ">
        <h1 className="border-b-2 hover:text-white border-black">
          I'M AAYUSH GUPTA /
        </h1>
        <h1 className="border-b-2 hover:text-white border-black">
          A Fullstack Developer /
        </h1>
        <h1 className="border-b-2 hover:text-white border-black">
          A Software Engineer /
        </h1>
        <h1 className="border-b-2 hover:text-white border-black">
          An Avid Learner &
        </h1>
        <h1 className="border-b-2 hover:text-white border-black">
          {' '}
          so much more....
        </h1>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '500px' }}
        transition={{ delay: 0.5 }}
        className="w-[2px] hidden md:flex mx-4 bg-black"
      />
      <div className="hidden  lg:flex h-full items-center justify-center ">
        <Grill />
      </div>
    </motion.div>
  )
}

export default AboutMe
