import React from 'react';

export default function Contact() {
    return (
        <div>
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



        </div>
    )
}
