"use client"
import React, { useState } from 'react'
import BlurFade from './ui/blur-fade'
import Image from 'next/image'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'


const Experiences = () => {
    const [openItems, setOpenItems] = useState({})
    const toggleItem = (index) => {
        setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
    }
    const experiences = [
        {
            logo: "https://avatars.githubusercontent.com/u/195132230?s=200&v=4",
            company_name: "Nolabs Tech",
            title: "Co-Founder & CEO",
            href: "https://www.linkedin.com/company/108123902/",
            from_to_date: "July 2024 - Present",
            description: "A deep-tech company in Gurugram building the trust layer and offline-first tools for the AI-native internet. We fuse applied cryptography, blockchain rails, and on-device ML to ship products like 0byte (cryptographic provenance for AI-generated media) and Ravox (offline audiobook creation). We pair rigorous engineering with fast, product-first iteration—ship, learn, refine—to turn ambitious ideas into production-ready systems that feel simple, help people move faster, and let them trust what they see."
        },
        // {
        //     logo: "https://avatars.githubusercontent.com/u/182339599?s=200&v=4",
        //     company_name: "0byte",
        //     title: "Co-Founder & CEO",
        //     href: "https://0byte.tech/",
        //     from_to_date: "Sep 2024 - Present",
        //     description: " I’ve been leading the web front of 0byte—“SSL for AI content,” an in-progress zero-knowledge protocol that embeds tamper-evident proofs into AI-generated media and anchors them on Solana. I’m architecting a Next.js (App Router) + Tailwind interface where users can drag-and-drop media, generate proofs, and verify authenticity in a single click. By wiring the UI directly to our Python/Rust SDK via edge APIs, I’ve already cut proof round-trip latency to < 700 ms and added optimistic states for instant feedback. Strict TypeScript contracts, accessibility reviews, and automated tests keep the codebase solid while early user testing shows a 40 % jump in engagement. Working hand-in-hand with my co-founder on the ZK backend, I’m continuously refining features, polishing UX, and guiding 0byte toward a public launch."

        // },
        {
            logo: "https://avatars.githubusercontent.com/u/100866366?s=200&v=4",
            company_name: "AssessPrep",
            title: "Frontend Developer",
            href: "https://www.assessprep.com/",
            from_to_date: "Sep 2023 - Jun 2024",
            description: " Increased user engagement by 30% through the development of AI-powered features, including GPT Plus model integration for PDF-based question generation. Reduced critical bug reports by 40% by implementing a comprehensive error tracking and resolution system, significantly improving overall user experience. Improved team productivity by 20% through the development of an integration between question segment reporting and Slack, optimizing workflow eﬃciency."

        },
        // {
        //     logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFnhicLFvzh7g/company-logo_200_200/company-logo_200_200/0/1630626353923/techinfy_logo?e=1748476800&v=beta&t=0CEbpabuF6WqsDVsnj8XfUR7xwWEdWDWIvMht04tST0",
        //     company_name: "Techinfy Solutions",
        //     title: "Business and Data Analyst",
        //     href: "https://www.techinfy.in/",
        //     from_to_date: "Sep 2021 - Feb 2022",
        //     description: "Played a key role in developing and implementing the HRMS for centralized employee data management, a Legal Module for streamlined case handling and lawyer communications, and a Note Sheet Module to digitize internal government communications. Responsibilities included gathering client requirements, preparing documentation, and maintaining daily client liaison, significantly reducing processing time and minimizing errors across the organization's operations."
        // },

    ]
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <BlurFade>
                <h2 className='font-bold text-xl'>Work Experiences</h2>
                {
                    experiences.map((item, index) => (
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

export default Experiences