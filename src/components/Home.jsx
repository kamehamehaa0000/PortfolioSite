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
        className="w-screen h-screen py-8 px-2 md:max-lg:px-12 lg:px-16 md:max-lg:py-10 lg:py-10 dark:text-white overflow-x-hidden"
      >
        <Navbar isDesktop={isDesktop} />
        <Accordian
          title={'About Me'}
          isDesktop={isDesktop}
          content={<AboutMe />}
        />
        <Accordian
          title={'Skills'}
          isDesktop={isDesktop}
          content={<Skills />}
        />
        <Accordian
          title={'Projects'}
          isDesktop={isDesktop}
          content={<Projects />}
        />
        <Accordian
          title={'Certifications'}
          isDesktop={isDesktop}
          content={<Certifications />}
        />
        <Accordian
          title={'Socials'}
          isDesktop={isDesktop}
          content={<Socials />}
        />
        <Accordian
          title={'Contact Me'}
          isDesktop={isDesktop}
          content={<ContactMe />}
        />
      </div>
    </div>
  )
}

export default Home
