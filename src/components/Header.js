import React from 'react';


function Header({ currentPage, handlePageChange}) {
    return (
        <header>
            <h1 id='ib-h1'>Ibrahima Barry</h1>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <a
                    href='#About Me'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                    href='#Contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                    href='#Portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                    href='#Resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
