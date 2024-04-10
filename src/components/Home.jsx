import React from 'react'
import Navbar from './Navbar'
import Accordian from './Accordian'
import { useMediaQuery } from 'react-responsive'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Certifications from './Certifications'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Socials from './Socials'

const Home = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 600px)',
  })
  return (
    <div id="noise">
      <div
        id="container"
        className=" text w-screen h-screen py-4 px-2 md:max-lg:px-10 lg:px-16 md:max-lg:py-10 lg:py-10 dark:text-white overflow-x-hidden"
      >
        <Navbar isDesktop={isDesktop} />
        <Accordian
          title={'About Me'}
          isDesktop={isDesktop}
          content={<AboutMe />}
          isMaximised={true}
        />
        <Accordian
          title={'Skills'}
          isDesktop={isDesktop}
          content={<Skills />}
          isMaximised={false}
        />
        <Accordian
          title={'Projects'}
          isDesktop={isDesktop}
          content={<Projects />}
          isMaximised={false}
        />
        <Accordian
          title={'Certifications'}
          isDesktop={isDesktop}
          content={<Certifications />}
          isMaximised={false}
        />
        <Accordian
          title={'Socials'}
          isDesktop={isDesktop}
          content={<Socials />}
          isMaximised={false}
        />
        <Accordian
          title={'Contact Me'}
          isDesktop={isDesktop}
          content={<ContactMe />}
          isMaximised={true}
        />
      </div>
    </div>
  )
}

export default Home
