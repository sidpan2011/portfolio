import React from 'react'
import BlurFade from './ui/blur-fade'

const About = () => {
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <BlurFade>
                <h2 className='font-bold text-xl'>About</h2>
                <div className='my-3'>
                    <p className='text-base font-normal dark:text-white/60 text-black/60'>
                        In 2021, I graduated with a B.Tech in Electronics and Communication Engineering from Lovely Professional University and dove into the tech world for 1.5 years. Now, I'm channeling that experience into{' '}
                        <span>
                            <a
                                className='underline underline-offset-2 text-black dark:text-white transition-colors duration-200'
                                href="https://www.0byte.tech/"
                            >
                                ZeroByte
                            </a>
                        </span>
                        , my latest project born from the <span><a className='underline underline-offset-2 text-black dark:text-white transition-colors duration-200' href="https://www.colosseum.org/radar">Colosseum Radar hackathon</a></span>. It's an exciting venture into private transactions on the Solana blockchain, pushing the boundaries of fintech and digital privacy.
                    </p>
                </div>
            </BlurFade>
        </div>
    )
}

export default About