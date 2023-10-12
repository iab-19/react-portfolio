import React from 'react';
import weather from '../assets/Portfolio-images/weather.png';
import scheduler from '../assets/Portfolio-images/workday.png';
import kanye from '../assets/Portfolio-images/kanye.png';
import readme from '../assets/Portfolio-images/readme.png';
import svg from '../assets/logo.svg';
import employee from '../assets/Portfolio-images/employee.png';
import githubIcon from '../assets/github-mark/github-mark.png';

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h1>Portfolio</h1>
            <p>Here are the projects I have completed</p>
            <div className='row'>
                <div className='project'>
                <a href='https://iab-19.github.io/odd_quote_out_kanye_edition/'><p>Odd Quote Out: Kanye Edition</p></a>
                    <img src={kanye} alt='Odd Quote Out' className='portfolio-image'></img>
                    <div>
                        <a href='https://github.com/iab-19/odd_quote_out_kanye_edition'><img src={githubIcon} className='github-icon' alt="github link"></img></a>
                    </div>
                </div>

                <div className='project'>
                    <p>SVG Logo Generator</p>
                    <img src={svg} alt='SVG Generator' className='portfolio-image'></img>
                    <div>
                        <a href='https://github.com/iab-19/svg-logo-maker'><img src={githubIcon} className='github-icon' alt="github link"></img></a>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='project'>
                    <p>Professional README Generator</p>
                    <img src={readme} alt='readme generator' className='portfolio-image'></img>
                    <div>
                        <a href='https://github.com/iab-19/professional-readme-generator'><img src={githubIcon} className='github-icon' alt="github link"></img></a>
                    </div>
                </div>

                <div className='project'>
                    <p>Employee Tracker</p>
                    <img src={employee} alt='Employee Tracker' className='portfolio-image'></img>
                    <div>
                        <a href='https://github.com/iab-19/employee-tracker'><img src={githubIcon} className='github-icon' alt="github link"></img></a>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='project'>
                <a href='https://iab-19.github.io/weather_dashboard/'><p>Weather Dashboard</p></a>
                    <img src={weather} alt='Weather Dashboard' className='portfolio-image'></img>
                    <div>
                        <a href='https://github.com/iab-19/weather_dashboard'><img src={githubIcon} className='github-icon' alt="github link"></img></a>
                    </div>
                </div>

                <div className='project'>
                <a href='https://iab-19.github.io/work-day-scheduler/'><p>Workday Scheduler</p></a>
                    <img src={scheduler} alt='Workday Scheduler' className='portfolio-image'></img>
                    <div>
                        <a href='https://github.com/iab-19/work-day-scheduler'><img src={githubIcon} className='github-icon' alt="github link"></img></a>
                    </div>
                </div>
            </div>


        </section>
    )
}
