import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

const ProjectsCard = ({ project }) => {
    // console.log(project.video);
    return (
        <Card className="overflow-hidden h-auto">
            {project.gif ? (
                <a href={project.web} target='_blank'>
                    <video
                        src={project.gif}
                        alt={project.title}
                        className="w-full object-cover h-auto"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </a>
            ) : (
                <div className="w-full h-auto flex items-center justify-center">
                    <Image src={project.banner} alt={project.title} className="w-full h-full object-cover" />
                </div>
            )}
            <CardHeader>
                <CardTitle className="text-md">{project.title}</CardTitle>
                <CardDescription className="text-sm dark:text-white/60 text-black/60">{project.from_to_date}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-sm dark:text-white/40 text-black/40'>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.keywords.map((keyword, index) => (
                        <Button key={index} size="xs" variant="tag" className="text-[10px] text-black dark:text-white font-medium px-2.5 py-0.5 rounded-md ">
                            {keyword}
                        </Button>
                    ))}
                </div>
            </CardContent>
            <CardFooter className='flex space-x-2'>
                {project.web && (
                    <div>
                        <a href={project.web} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <Button size="xs" className="text-[10px]">Website</Button>
                        </a>
                    </div>
                )}
                {project.repo && (
                    <div>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            <Button size="xs" className="text-[10px]">GitHub</Button>
                        </a>
                    </div>
                )}
            </CardFooter>
        </Card>
    )
}

export default ProjectsCard