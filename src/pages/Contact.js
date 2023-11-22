import React from 'react';
export default function Contact() {
    return (
        <section className='contact'>
            <h1>Contact</h1>
            <form target='_blank' action='https://formsubmit.co/fb748a76f150d7c07604372283283bf0' method='POST' id='contactForm'>
                <label >Name:</label><br />
                <input type="text" id='name' name='name' required></input><br />
                <label >Email Address:</label><br />
                <input type='email' name='email' required></input><br />
                <label >Message</label><br />
                <textarea type='text' id="message" rows="5" cols="40" name='message' required></textarea><br /> <br />
                <input type='submit' value="Submit" id='submitButton'></input>
            </form>
        </section>
    )
}
