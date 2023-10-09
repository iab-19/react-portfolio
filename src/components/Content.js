import React, { useState } from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

import Header from './Header';
import Footer from './Footer';




function Content() {
    const [currentPage, setCurrentPage] = useState('About');


    const renderPage = () => {
        // if (currentPage === 'Resume') {
        //     return <Resume />;
        // }
        // if (currentPage === 'About') {
        //     return <About />;
        // }
        // if (currentPage === 'Contact') {
        //     return <Contact />;
        // }
        // if (currentPage === 'Portfolio') {
        //     return <Portfolio />;
        // }

        switch(currentPage) {
            case 'Resume':
                return <Resume />;
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            default:
                return <Portfolio />;
        }

        // return <Contact />

    };


    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </main>
    );
}


export default Content;
