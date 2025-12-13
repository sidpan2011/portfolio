import Image from 'next/image'
import React from 'react'
import pfp from "../../public/assets/dp.jpg"
import BlurFade from './ui/blur-fade'
import { birthday } from '@/lib/utils'

const Title = () => {
    return (
        <div className='lg:mt-20 md:mt-28 mt-12 mb-10 flex flex-col sm:flex-row'>
            <BlurFade>
                <div className='flex flex-col sm:flex-row sm:justify-between items-start'>
                    <div className='flex flex-col w-full min-w-lg mx-auto order-2 sm:order-1'>
                        <h1 className='pt-3 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-6xl md:text-5xl leading-none font-semibold tracking-tighter text-balance text-3xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]'>hi, i'm sidhanth</h1>
                        <p className='lg:text-xl md:text-lg text-md dark:text-white/90 text-black/90'>Co-founder, CEO @ Nolabs Tech</p> <p className='py-1.5 dark:text-white/80 text-black/90'>I'm learning ML from first principles—derive the math, implement from scratch, iterate with experiments until it ships.</p>
                    </div>
                    <div className='relative mb-4 sm:mb-0 sm:mt-0 order-1 sm:order-2'>
                        {birthday() && <div className='absolute z-10 right-[-10px] top-[-10px] text-4xl'>🎂</div>}
                        <Image src={pfp} alt='Profile picture' className='rounded-full max-w-28 relative sm:ml-5 mx-auto sm:mx-0' />
                    </div>
                </div>
            </BlurFade>
        </div>
    )
}

export default Title