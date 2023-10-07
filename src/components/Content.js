import React, { useState } from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

import Header from './Header';
import Footer from './Footer';




function Content() {
    const [currentPage, setCurrentPage] = useState('Resume');


    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
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
