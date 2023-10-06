import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';



function Content() {
    const [currentPage, setCurrentPage] = useState('About');


    const renderPage = () => {
        switch(currentPage) {
            //  change to if else statement
            case 'Contact':
                return <Contact />;
                // break;
            case 'Portfolio':
                return <Portfolio />;
                // break;
            case 'Resume':
                return <Resume />;
                // break;
            default:
                return <About />
        }
    };


    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}


export default Content;
