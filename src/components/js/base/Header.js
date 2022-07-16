import React from "react";
import Favicon from 'react-favicon';
import favicon from '../../images/news-16x16.png';

function Header() {
    return (
        <>
            <Favicon url={favicon}/>
            <header className="header">
                <div className="container">
                    This is for your main navigation
                </div>
            </header>
        </>
    );
}

export default Header;