import React from 'react'
import BlurFade from './ui/blur-fade'

const About = () => {
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <BlurFade>
                <h2 className='font-bold text-xl'>About</h2>
                <div className='my-3'>
                    <p className='text-base font-normal dark:text-white/60 text-black/60 mb-3'>
                        I’m Sidhanth—an engineer-turned-founder building practical systems at the edge of cryptography and AI. I graduated in 2021 with a B.Tech in Electronics &amp; Communication Engineering from Lovely Professional University and have spent the last few years shipping full-stack products across web3 and AI. I now run Nolabs Tech in Gurugram, focused on making the AI-native internet <em>trustworthy, private, and independent</em>.
                    </p>

                    <p className='text-base font-normal dark:text-white/60 text-black/60 mb-3'>
                        With&nbsp;
                        <a
                            className='underline underline-offset-2 text-black dark:text-white transition-colors duration-200'
                            href='https://0byte.tech/'
                            target='_blank'
                        >
                            0byte
                        </a>
                        , authenticity is built in, not bolted on. We embed tamper-evident proofs directly into AI-generated media and anchor them on Solana so anyone can verify provenance without trusting a platform. 0byte began as a prototype at the&nbsp;
                        <a
                            className='underline underline-offset-2 text-black dark:text-white transition-colors duration-200'
                            href='https://www.colosseum.org/hackathon'
                            target='_blank'
                        >
                            Colosseum Hackathon
                        </a>
                        &nbsp;and has since moved into active development with growing ecosystem support.
                    </p>

                    <p className='text-base font-normal dark:text-white/60 text-black/60 mb-3'>
                        AI is everywhere—if you’re online. What about the billions with weak or no connectivity? We’re building <strong>offline-first machine learning</strong>: AI that runs directly on your devices—no internet, no data leakage.
                    </p>

                    <p className='text-base font-normal dark:text-white/60 text-black/60 mb-3'>
                        Our first product is <a
                            className='underline underline-offset-2 text-black dark:text-white transition-colors duration-200'
                            href='https://ravox.app'
                            target='_blank'
                        >Ravox</a>, an offline audiobook creator. Drop in a manuscript and get an ACX-ready audiobook with studio-grade narration, 100% on-device. No cloud. No cost-per-use. Privacy by default. Works in villages, metros, even war zones.
                    </p>

                    <p className='text-base font-normal dark:text-white/60 text-black/60'>
                        We ship lean, fast, and uncompromising. We’ve done it before. We’re doing it again. This is just the start—help us build the offline AI stack of the future.
                    </p>
                </div>
            </BlurFade>
        </div>
    )
}

export default About