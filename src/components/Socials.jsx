import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { PiCodepenLogoThin } from 'react-icons/pi'
import { LiaGithubSquare } from 'react-icons/lia'
import { motion } from 'framer-motion'
import { TbBrandLeetcode } from 'react-icons/tb'

const Socials = () => {
  const soc = [
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aayush-gupta-b17758130/',
      logo: (
        <CiLinkedin className="text-4xl sm:max-xl:text-4xl xl:text-8xl inline" />
      ),
    },
    {
      title: 'Github',
      link: 'https://github.com/kamehamehaa0000',
      logo: (
        <LiaGithubSquare className="text-4xl sm:max-xl:text-4xl xl:text-8xl inline" />
      ),
    },
    {
      title: 'CodePen',
      link: 'https://codepen.io/Aayush-Gupta-the-sans',
      logo: (
        <PiCodepenLogoThin className="text-4xl sm:max-xl:text-4xl xl:text-8xl inline" />
      ),
    },
    {
      title: 'LeetCode',
      link: 'https://leetcode.com/Kamehamehaa_Aayush/',
      logo: (
        <TbBrandLeetcode className="text-4xl sm:max-xl:text-4xl xl:text-8xl inline" />
      ),
    },
  ]
  return (
    <div className="w-full py-2 xl:px-10 flex  items-center font-[Gilroy] font-semibold">
      {soc.map((s, ind) => {
        return (
          <>
            <div
              key={ind + s.tilte}
              className=" sm:max-xl:text-xl xl:text-4xl sm:p-2 sm:m-2 hover:text-white"
            >
              <a href={s.link} target="_blank">
                <h1 className="hidden sm:inline border-b-2  border-black ">
                  {s.title}
                </h1>
                {s.logo}
              </a>
            </div>
            <motion.div
              key={ind + s.link}
              initial={{ height: 0 }}
              whileInView={{ height: '60px' }}
              transition={{ delay: 0.5 }}
              className="w-[2px] xl:mx-6 mx-2  bg-black"
            />
          </>
        )
      })}
    </div>
  )
}

export default Socials
