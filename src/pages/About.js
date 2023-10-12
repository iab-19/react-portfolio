import React, { useState } from 'react';
import ib from '../assets/ib.jpg';
import naruto from '../assets/naruto-vol1.jpg';
import lantern from '../assets/blackest-night.jpg';
import butterfly from '../assets/butterfly-nebula.jpg';
// import spider from '../assets/spider.jpg';
import board from '../assets/sk8.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import './styles.css';

const imageData = [
    {
        label: "Naruto",
        alt: "First Volume of Naruto",
        url: naruto
    },
    {
        label: "Lanterns",
        alt: "Cover The Blackest Night Saga",
        url: lantern
    },
    {
        label: "Butterfly Nebula",
        alt: "Butterfly Nebula",
        url: butterfly
    },
    {
        label: "Skateboard",
        alt: "Skate",
        url: board
    },
];

const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
        {/* <p className='legend'>{image.label}</p> */}
    </div>
));
export default function About() {
    const [currentIndex, setCurrentIndex] = useState();

    function handleChange(index) {
        setCurrentIndex(index);
    }
    return (
        <section className="about">
            <h1>About Me</h1>
            <img src={ib} alt='Ibrahima' id='ib'></img>
            <h4>Introduction</h4>
            <section className='card'><p>I am Ibrahima Barry and I am a Full Stack Developer based in Maryland.</p>
            <p>Born in New Jersey and raised in Gambia, I took an interest in everything technology. From disassembling Playstations
                to see what they look like on the inside to swapping out RAM to get a faster laptop
            </p>
            <p>Due to my love for Physics and Math, I moved to the UK to Attend College and University, where I obtained
                a degree in Electronic Engineering from the University Of Essex.
            </p>
            </section>
            <h4>Hobbies & Interests</h4>
            <section className='card'>
            <p></p>
            <p>Astronomy, Manga/Comic books, Video Games, Skateboarding</p>
            </section>
            <div className='App'>
                {/* <img src={naruto} className="interest-img" alt='First Volume of Naruto'></img>
                <img src={lantern} className="interest-img" alt='Cover The Blackest Night Saga'></img>
                <img src={butterfly} className="interest-img" alt='Butterfly Nebula'></img>
                <img src={spider} className='interest-img' alt="Cover for Marvel's Spider-Man"></img>
                <button className='button display-left' onClick={}></button>
                <button className='button display-right' onClick={}></button> */}
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    infinitLoop={true}
                    selectedItem={imageData[currentIndex]}
                    onChange={handleChange}
                    className='carousel-container interest-imdg'
                    >
                        {renderSlides}
                    </Carousel>
            </div>
        </section>
    )
}
