import React from 'react'
import HighLight from './HighLight'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  const myProjects = [
    {
      gif: "https://my-projects-gifs.s3.amazonaws.com/zerobyte-wallet.mov",
      title: "ZeroByte Wallet",
      from_to_date: "Oct 2024 - Present",
      description: "A privacy-focused Solana wallet for anonymous transactions, offering easy integration and simplified Web3 payments.",
      keywords: ["Vite", "React", "Tailwind CSS", "Clerk", "Solana SDK"],
      web: "https://wallet.0byte.tech/",
      repo: "https://github.com/zr0byte/zerobyte-wallet"
    },
    {
      gif: "https://my-projects-gifs.s3.amazonaws.com/zerobyte.mov",
      title: "ZeroByte",
      from_to_date: "Sep 2024 - Present",
      description: "ZeroByte is a blockchain platform that enables private, secure, and fast cryptocurrency transactions, preserving user anonymity in digital finance.",
      keywords: ["Vite","React", "Tailwind CSS", "Solana SDK", "zkSNARK", "Anchor"],
      web: "https://dev.0byte.tech/",
      repo: "https://github.com/zr0byte/zerobyte/"
    },
    {
      gif: "https://my-projects-gifs.s3.amazonaws.com/taskly.mov",
      title: "Taskly",
      from_to_date: "Aug 2024 - Present",
      description: "A revamped task management app built with Next.js 14, React, and enhanced UI using Tailwind CSS, Shadcn UI, and Magic UI.",
      keywords: ["Next.js 14","React", "Tailwind CSS", "Clerk"],
      web: "",
      repo: "https://github.com/sidpan2011/your-todo-v2"
    },
    {
      gif: "https://my-projects-gifs.s3.amazonaws.com/your-todo.mov",
      title: "Your To-do App v1",
      from_to_date: "Mar 2024 - Apr 2024",
      description: "A simple UI friendly todo app, you can create, edit, pin to top and mark as done and more using React, CSS and Redux.",
      keywords: ["Vite","React", "CSS", "Redux"],
      web: "https://yourto-do.netlify.app/",
      repo: "https://github.com/sidpan2011/your-todo"
    },
    {
      gif: "https://my-projects-gifs.s3.amazonaws.com/typing-master.mov",
      title: "Typing Master",
      from_to_date: "Jun 2023 - Aug 2023",
      description: "A minimalist game to improve typing speed, offering detailed performance analysis (WPM, accuracy, errors) with a user-friendly interface.",
      keywords: ["JavaScript", "CSS", "HTML"],
      web: "https://typing-master0.netlify.app/",
      repo: "https://github.com/sidpan2011/Typing-Master"
    },
    
  ]
  return (
    <div className='my-8'>
      <HighLight text={"My Projects"} />
      <h1 className='mt-8 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-5xl md:text-4xl leading-none text-center text-black dark:text-white font-semibold tracking-tight text-balance text-3xl translate-y-[-1rem] animate-fade-in'>Check out my latest work</h1>
      <div className='max-w-lg text-center mx-auto my-3'>
        <p className='text-xl dark:text-white/50 text-black/50 font-light'>Explore a selection of my best web projects, ranging from sleek websites to complex applications.</p>
      </div>
      {/* This will contain the projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
        {myProjects.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects