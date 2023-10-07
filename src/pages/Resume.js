import React, { useState} from "react";
// import pdf from '../assets/Ibrahima_Barry_Resume.pdf';
import resumePdf from '../assets/iab.pdf'

function Resume() {
    const [showPdf, setShowPdf] = useState(false);
    const handleClick = () => {
        setShowPdf(!showPdf);
    }
    return (
        <section className="resume">
            <h1>Resume</h1>
            <div className="resume-nav">
                <h3>Download my <button id="resume" onClick={handleClick}>resume</button></h3>

                {showPdf&&(<h3><button id="resume" onClick={handleClick}>Go back</button></h3>)}
            </div>
            {showPdf? (<div><object data={resumePdf} width="100%" height="800" type="application/pdf" aria-label="pdf resume" /></div>) : (
                <>
                <h2>Front-End Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
                <br />
                <h2>Back-End Proficiencies</h2>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>APIs</li>
                </ul>


                </>


            )}


        </section>
    )
}

export default Resume;
