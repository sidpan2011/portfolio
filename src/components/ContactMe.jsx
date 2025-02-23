import React from 'react'
import HighLight from './HighLight'

const ContactMe = () => {
  return (
    <div className=''>
      <HighLight text={"Contact Me"} extraClassName={"items-center"} />
      <h1 className='mt-9 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-5xl md:text-4xl leading-none text-center text-black dark:text-white font-semibold tracking-tight text-balance text-3xl translate-y-[-1rem] animate-fade-in'>Get in Touch</h1>
      <div className='max-w-lg text-center mx-auto mb-9 mt-3'>
        <p className='text-xl dark:text-white/50 text-black/50 font-light'>Feel free to drop me a <span><a href="https://x.com/sidhanthpande" target='_blank' className='underline underline-offset-2 text-black dark:text-white transition-colors duration-200'>direct message</a></span> anytime.</p>
      </div>
    </div>
  )
}

export default ContactMe