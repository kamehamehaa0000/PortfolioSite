import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PiStarFourLight } from 'react-icons/pi'

const Navbar = ({ isDesktop }) => {
  const textAnimation = {
    initial: {
      fontSize: isDesktop ? '50px' : '1px',
    },
    animate: {
      fontSize: isDesktop ? '5rem' : '2rem',
    },
  }

  return (
    <div className="px-2 md:max-lg:px-5">
      <motion.div
        initial={{ scaleY: 0, scaleX: 0, width: '200%' }}
        animate={{ scaleY: 1, scaleX: 1, width: '100%' }}
        transition={{ duration: 1, delay: 0 }}
        className="w-full h-24 md:h-34 m-1 font-[Canopee] overflow-hidden flex justify-between items-center border-b-4 border-t-4 border-black  "
      >
        <motion.h1
          initial={textAnimation.initial}
          animate={textAnimation.animate}
          transition={{ duration: 1, delay: 1 }}
          className="font-bold tracking-[.5rem] hover:text-white "
        >
          Portfolio
        </motion.h1>
        <div>
          <PiStarFourLight className="text-5xl hover:text-white" />
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
