import React from 'react'
import BlurFade from './ui/blur-fade'
import HighLight from './HighLight'
import Image from 'next/image'


const Education = () => {
    const experiences = [
        {
            logo: "https://media.licdn.com/dms/image/v2/C560BAQGiWBwKAnC5Yw/company-logo_200_200/company-logo_200_200/0/1646650883502?e=1748476800&v=beta&t=TjYBixPyrErw03gmu01B-7gHzsMC56OGMnmhJWHVWWk",
            company_name: "Unacademy",
            title: "GATE (Graduate Aptitude Test in Engineering) Computer Science",
            from_to_date: "May 2022 - Mar 2023"

        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png",
            company_name: "Lovely Professional University",
            title: "Bachelor of Technology, Electronics and Communication Engineering",
            from_to_date: "Aug 2017 - Aug 2021"
        },
        // {
        //     logo: "https://i.pinimg.com/originals/5a/4e/f9/5a4ef9b9d7806da10afb1e9b3efdb22d.png",
        //     company_name: "Kendriya Vidyalaya",
        //     title: "Higher Secondary Education (10+2)",
        //     from_to_date: "Sep 2024 - Present"

        // },
        

    ]
    return (
        <div className='my-3 w-full max-w-2xl mx-auto'>
            <BlurFade>
                <h2 className='font-bold text-xl'>Education</h2>
                {
                    experiences.map((item, index) => (
                        <div className='flex justify-between items-center mb-6 mt-4'>
                            <div className=' flex items-center' key={index}>
                                <Image src={item.logo} alt={item.company_name} width={40} height={40} className='rounded-md mr-3 mt-1' />
                                <div>
                                    <h3>{item.company_name}</h3>
                                    <p className='text-sm dark:text-white/70 text-black/70'>{item.title}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-sm dark:text-white/40 text-black/40'>{item.from_to_date}</p>
                            </div>
                        </div>
                    ))

                }

            </BlurFade >
        </div >
    )
}

export default Education