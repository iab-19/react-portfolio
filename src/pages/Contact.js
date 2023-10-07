import React from 'react';
import github from '../assets/GitHub-Logos/GitHub_Logo.png';

export default function Contact() {
    return (
        <section className='contact'>
            <h1>Contact</h1>
            <form id='contactForm'>
                <label for="name">Name:</label><br />
                <input type="text" id='name'></input><br />
                <label for="email">Email Address:</label><br />
                <input type='email'></input><br />
                <label for="message">Message</label><br />
                <textarea type='text' id="message" rows="5" cols="40"></textarea><br /> <br />
                <input type='submit' value="Submit" id='submitButton'></input>
            </form>
        </section>
    )
}
