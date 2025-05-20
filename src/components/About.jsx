import React from 'react'
import BlurFade from './ui/blur-fade'

const About = () => {
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <BlurFade>
                <h2 className='font-bold text-xl'>About</h2>
                <div className='my-3'>
                    <p className='text-base font-normal dark:text-white/60 text-black/60'>
                        In 2021, I graduated with a B.Tech in Electronics & Communication Engineering from Lovely Professional University and have spent the last few years shipping full-stack products across web-3 and AI. Today I’m building{' '}
                        <span>
                            <a
                                className='underline underline-offset-2 text-black dark:text-white transition-colors duration-200'
                                href='https://0byte.tech/'
                            >
                                0byte
                            </a>
                        </span>
                        —“SSL for AI content,” a zero-knowledge infrastructure that embeds tamper-evident proofs directly into AI-generated media and anchors them on Solana for public, trust-less verification. The project was first prototyped at the{' '}
                        <span>
                            <a
                                className='underline underline-offset-2 text-black dark:text-white transition-colors duration-200'
                                href='https://www.colosseum.org/hackathon'
                            >
                                Colosseum Hackathon
                            </a>
                        </span>{' '}
                        and is now pushing toward the Grand Champion title while securing ecosystem grants to make cryptographic authenticity a default for the AI-native internet.
                    </p>
                </div>
            </BlurFade>
        </div>
    )
}

export default About