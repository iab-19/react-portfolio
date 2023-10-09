import React from 'react';
export default function Contact() {
    return (
        <section className='contact'>
            <h1>Contact</h1>
            <form id='contactForm'>
                <label >Name:</label><br />
                <input type="text" id='name'></input><br />
                <label >Email Address:</label><br />
                <input type='email'></input><br />
                <label >Message</label><br />
                <textarea type='text' id="message" rows="5" cols="40"></textarea><br /> <br />
                <input type='submit' value="Submit" id='submitButton'></input>
            </form>
        </section>
    )
}
