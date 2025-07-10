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
import LastUpdated from './LastUpdated'
import HallOfFame from './hall-of-fame'

const HomePage = () => {
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <Title />
            <About />
            {/* <Gallery /> */}
            <HallOfFame />
            <Experiences />
            <Education />
            <Projects />
            {/* <ContributionsGraph /> */}
            {/* <ContactMe /> */}
            <LastUpdated />
            <div className='absolute bottom-24 left-0 right-0'>
                <FloatingDockDemo />
            </div>
        </div>
    )
}

export default HomePage