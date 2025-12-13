"use client"
import React, { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import BlurFade from './ui/blur-fade'
import Image from 'next/image'

const HallOfFame = () => {
    const [openItems, setOpenItems] = useState({})
    const toggleItem = (index) => {
        setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
    }
    const hallOfFame = [
        {
            logo: "/assets/ravox.png",
            company_name: "Ravox",
            title: "Offline audiobook maker",
            href: "https://ravox.app",
            from_to_date: "Aug 2025 - Present",
            description: "Ravox is a local, offline audiobook studio. You import a manuscript; it produces an ACX-ready audiobook entirely on your device—no servers, no per-use fees, no data leaving your machine. Built for creators who want studio-grade narration, privacy by default, and a workflow that’s as routine as exporting a PDF—usable in villages, metros, or dead-zone networks alike.",
        },
        {
            logo: "https://avatars.githubusercontent.com/u/182339599?s=200&v=4",
            company_name: "0byte",
            title: "SSL for AI content",
            href: "https://nolabs.tech/",
            from_to_date: "Sep 2024 - Present",
            description: "0byte is the “SSL padlock” for AI-generated media—a cryptographic infrastructure layer that lets creators, platforms, and everyday users instantly confirm where synthetic content came from and whether it’s been altered. Instead of brittle watermarking, 0byte hashes each output, signs it with the model or account’s private key, and anchors that signature in a lightweight public registry. A built-in web verifier then surfaces the proof with a clear green check—Authentic, created by  on —or flags anomalies if anything looks suspicious. Drop-in SDKs handle key management, hashing, and registry writes for developers, making trust frictionless and unlocking safe distribution, compliance, and monetisation for the next wave of synthetic images, audio, and video."
        },
        {
            logo: "/assets/pingback-logo.webp",
            company_name: "Pingback",
            title: "Turn messages into real follow-ups",
            href: "https://getpingback.app/",
            from_to_date: "Oct 2025 - Present",
            description: "Chats run our lives—WhatsApp, Telegram, SMS, email. Promises like “I’ll send it by EOD” or “kal subah 9” get buried in the feed. Traditional todo apps force you to start from a blank box, so most die unused. We wanted a chat-native follow-up tool that works where commitments actually happen.",
        },
    ]
  return (
    <div className='w-full max-w-2xl mx-auto'>
    <BlurFade>
        <h2 className='font-bold text-xl mt-8'>I'm currently building</h2>
        {
            hallOfFame.map((item, index) => (
                <Collapsible key={index} className="mb-6 mt-4" open={openItems[index]} onOpenChange={() => toggleItem(index)} >
                    <div className='flex justify-between items-center'>
                        <div className='flex items-start'>
                            <a href={item.href} target='_blank'>
                                <Image src={item.logo} width={40} height={40} alt={`${item.company_name} logo`} className='rounded-md mr-3 mt-1' />
                            </a>
                            <div>
                                <CollapsibleTrigger className="group flex items-center space-x-1">
                                    <h3 className='font-semibold'>{item.company_name}</h3>
                                    <ChevronRight
                                        className={cn(
                                            'ml-1 transform transition-all duration-300 ease-in-out',
                                            'opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0',
                                            openItems[index] ? 'rotate-90' : 'rotate-0'
                                        )}
                                        size={18}
                                    />
                                </CollapsibleTrigger>
                                <p className='text-sm dark:text-white/70 text-black/70'>{item.title}</p>
                            </div>
                        </div>
                        <p className='text-sm dark:text-white/40 text-black/40'>{item.from_to_date}</p>
                    </div>
                    <CollapsibleContent className="mt-2 ml-[52px]">
                        <p className="text-sm dark:text-white/80 text-black/80">{item.description}</p>
                    </CollapsibleContent>
                </Collapsible>
            ))

        }

    </BlurFade >
</div >
  )
}

export default HallOfFame