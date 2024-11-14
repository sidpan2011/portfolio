import React from 'react'
import Title from './Title'
import { FloatingDockDemo } from './FloatingDock'
import About from './About'
import { Gallery } from './Gallery'
import Experiences from './Experiences'
import Education from './Education'
import Projects from './Projects'
import ContactMe from './ContactMe'
import ContributionsGraph from './ContributionsGraph'

const HomePage = () => {
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <Title />
            <About />
            <Gallery />
            <Experiences />
            <Education />
            <Projects />
            <ContributionsGraph />
            <ContactMe />
            <div className='absolute bottom-24 left-0 right-0'>
                <FloatingDockDemo />
            </div>
        </div>
    )
}

export default HomePage