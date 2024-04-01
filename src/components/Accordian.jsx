import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PiArrowCircleDownRightLight,
  PiArrowCircleUpLeftLight,
} from 'react-icons/pi'

const Accordian = ({ isDesktop, title, content }) => {
  const textAnimation = {
    initial: {
      fontSize: isDesktop ? '50px' : '25px',
    },
    animate: {
      fontSize: isDesktop ? '4.2rem' : '2rem',
    },
  }
  const [minimised, setMinimised] = useState(true)
  const display = minimised ? 'flex' : 'none'
  return (
    <div className="px-2 md:max-lg:px-5 group">
      <motion.div
        initial={{ scaleY: 0, scaleX: 0, width: '200%' }}
        animate={{ scaleY: 1, scaleX: 1, width: '100%' }}
        transition={{ duration: 1, delay: 0 }}
        className=" w-full h-22 md:max-lg:h-28 lg:h-28 m-1 flex  justify-between items-center border-b-4 border-t-4 border-black overflow-hidden "
      >
        <motion.h1
          initial={textAnimation.initial}
          animate={textAnimation.animate}
          transition={{ duration: 1, delay: 1 }}
          className="font-[Canopee] hover:text-white  "
        >
          {title || 'Title Here'}
        </motion.h1>
        <div className="">
          <button
            onClick={() => {
              setMinimised((prev) => !prev)
            }}
          >
            {minimised ? (
              <PiArrowCircleUpLeftLight className="text-5xl hover:text-white" />
            ) : (
              <PiArrowCircleDownRightLight className="text-5xl hover:text-white" />
            )}
          </button>
        </div>
      </motion.div>
      <div
        style={{ display: display }}
        className={` w-full my-1 py-2 md:py-5 overflow-hidden `}
      >
        {content}
      </div>
      <motion.div
        style={{ display: display }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="ml-2 h-[2px] bg-black"
      />
    </div>
  )
}

export default Accordian
