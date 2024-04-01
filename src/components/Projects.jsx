import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowUpRightCircle } from 'react-icons/bs'

const Projects = () => {
  const fccProject = [
    {
      title: 'JavaSript DSA Certification Projects',
      link: 'https://www.freecodecamp.org/certification/Kamehamehaa/javascript-algorithms-and-data-structures-v8',
    },
    {
      title: 'Back-End Development & APIs Certification Projects',
      link: 'https://www.freecodecamp.org/certification/Kamehamehaa/back-end-development-and-apis',
    },
    {
      title: 'Drum Pad ',
      link: 'https://github.com/kamehamehaa0000/Drum-Machine-with-React',
    },
    {
      title: 'JS Calculator ',
      link: 'https://github.com/kamehamehaa0000/JS-Calculator-with-React',
    },
    {
      title: 'Markdown Preview App',
      link: 'https://github.com/kamehamehaa0000/Markdown-Preview-with-React/blob/main/README.md',
    },
    {
      title: 'Pomodoro / 25+5 Clock App',
      link: 'https://github.com/kamehamehaa0000/25-5-Clock-with-React',
    },
    {
      title: 'Random Quote Generator',
      link: 'https://github.com/kamehamehaa0000/Random-Quote-Generator-with-React-/blob/main/README.md',
    },
  ]
  const mini = [
    {
      title: 'Restaurant Reservation Site',
      link: 'https://github.com/kamehamehaa0000/Restaurant-Reservation-Fullstack-Mini-Project/tree/main',
    },
  ]
  const wip = [
    {
      title: 'Audio Streaming Platform',
      link: 'https://github.com/kamehamehaa0000/Fullstack-Spotify-Clone',
    },
    {
      title: 'Backend for Video Platform',
      link: 'https://github.com/kamehamehaa0000/Video-Platform-backendProject',
    },
  ]
  return (
    <div className=" text-xl sm:max-xl:text-2xl xl:text-3xl  w-full font-[Canopee] px-4 xl:px-10 flex flex-col sm:max-xl:flex-row xl:flex-row items-center gap-5 xl:gap-10 flex-wrap ">
      <div className="w-full sm:w-1/2 ">
        {fccProject.map((c, index) => {
          return (
            <>
              <li className="p-4 group m-1 hover:text-white list-decimal border-t-2 border-b-2 border-black">
                {c.title}
                <a href={c.link} target="_blank">
                  <BsArrowUpRightCircle className="rounded-full hover:text-black  hover:bg-white inline mx-2 " />
                </a>
              </li>
            </>
          )
        })}
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '500px' }}
        transition={{ delay: 0.5 }}
        className="w-[2px] hidden sm:flex sm:max-xl:mx-2 xl:4 bg-black"
      />

      <div className="xl:p-5 sm:max-xl:flex-grow">
        <div className="xl:p-5">
          <h1>Work In progress</h1>
          {wip.map((c, index) => {
            return (
              <>
                <li className="p-4 group m-1 hover:text-white list-decimal border-t-2 border-b-2 border-black">
                  {c.title}
                  <a href={c.link} target="_blank">
                    <BsArrowUpRightCircle className="rounded-full hover:text-black  hover:bg-white inline mx-2 " />
                  </a>
                </li>
              </>
            )
          })}
        </div>
        <div className="xl:p-5">
          <h1>small Fullstack Projects</h1>
          {mini.map((c, index) => {
            return (
              <>
                <li className="p-4 group m-1 hover:text-white list-decimal border-t-2 border-b-2 border-black">
                  {c.title}
                  <a href={c.link} target="_blank">
                    <BsArrowUpRightCircle className="rounded-full hover:text-black  hover:bg-white inline mx-2 " />
                  </a>
                </li>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
