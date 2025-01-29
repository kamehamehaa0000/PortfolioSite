import React from 'react'
import { motion } from 'framer-motion'
const ContactMe = () => {
  return (
    <div className="w-full font-[Canopee] p-4 xl:p-14 flex flex-col sm:flex-row items-center xl:gap-16">
      <div>
        <h1 className="text-3xl xl:text-6xl border-b-[1px] border-black">
          Want to Collab with me?
        </h1>
        <p className="font-[Gilroy] font-bold text:sm sm:text-lg">
          Connect with me through email or any of the Socials above
        </p>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100px' }}
        transition={{ delay: 0.5 }}
        className="w-[2px] mx-6 hidden md:block  bg-black"
      />
      <div className="hidden lg:block">
        <h1 className="text-3xl border-b-[1px] border-black">Email </h1>
        <h1 className="text-xl">gayush794@gmail.com</h1>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100px' }}
        transition={{ delay: 0.5 }}
        className="w-[2px] mx-6 hidden md:block  bg-black"
      />
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gayush794@gmail.com"
        target="_blank"
      >
        <button className="text-2xl p-2 m-2 rounded-xl xl:p-5 border-2 border-black hover:bg-white">
          Send me a Mail
        </button>
      </a>
    </div>
  )
}

export default ContactMe
