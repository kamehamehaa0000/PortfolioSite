import React from 'react'
import { motion } from 'framer-motion'

import { FiArrowUpRight } from 'react-icons/fi'
import { BsArrowUpRightCircle } from 'react-icons/bs'

const Certifications = () => {
  const cert = [
    {
      title: 'Responsive Web Design',
      link: 'https://freecodecamp.org/certification/Kamehamehaa/responsive-web-design',
    },
    {
      title: 'JavaScript Algorithms and Data Structures ',
      link: 'https://freecodecamp.org/certification/Kamehamehaa/javascript-algorithms-and-data-structures-v8',
    },
    {
      title: 'Front End Development Libraries',
      link: 'https://freecodecamp.org/certification/Kamehamehaa/front-end-development-libraries',
    },
    {
      title: 'Back End Development and APIs ',
      link: 'https://freecodecamp.org/certification/Kamehamehaa/back-end-development-and-apis',
    },
    {
      title: 'EF SET English Certificate 79/100 (C2 Proficient)',
      link: 'https://www.efset.org/cert/8gYArV',
    },
  ]
  return (
    <div className="text-xl sm:max-xl:text-2xl xl:text-3xl  font-[Canopee] px-4 sm:px-10 flex flex-col sm:flex-row sm:items-center flex-wrap ">
      {cert.map((c, index) => {
        return (
          <>
            <li className="xl:p-4 p-2 group m-1 hover:text-white list-decimal border-t-2 border-b-2 border-black">
              {c.title}
              <a href={c.link} target="_blank">
                <BsArrowUpRightCircle className="rounded-full hover:text-black  hover:bg-white inline mx-2 " />
              </a>
            </li>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '50px' }}
              transition={{ delay: 0.5 }}
              className="w-[2px] mx-4 hidden sm:flex bg-black "
            />
          </>
        )
      })}
    </div>
  )
}

export default Certifications
