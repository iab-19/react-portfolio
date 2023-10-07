import React from "react";
import githubIcon from '../assets/github-mark/github-mark-white.png';
import linkedinIcon from '../assets/LinkedIn-Logos/LI-Logo.png';

const Footer = () => {
    return (
        <footer className="">
            <div>
                <a href="https://github.com/iab-19">
                    <img src={githubIcon} id="githubIconWhite" alt="GitHub"></img>
                </a>{' '}
                <a href="https://www.linkedin.com/in/ibrahima-alpha-barry/">
                    <img src={linkedinIcon} id="linkedinIcon" alt="LinkedIn"></img>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
