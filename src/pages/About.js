import React from 'react';
import ib from '../assets/ib.jpg';

export default function About() {
    return (
        <section className="about">
            <h1>About Me</h1>
            <p>Here's a bunch of text about me</p>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quasi voluptatem inventore labore odit fugit tempora illum. Consequatur maiores excepturi sequi, nobis magnam soluta deleniti amet eius. Repellendus, blanditiis odit?</p>
            <p>Here's a picture of me</p>
            <img src={ib} alt='Ibrahima' id='ib'></img>
            <p>This is what I like to do</p>
            <p>This is what I like to read</p>
            <p>This is what I like to watch</p>
        </section>
    )
}
