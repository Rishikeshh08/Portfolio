import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='logo'>
                    &lt;<span className='spann'>Rishikesh Mandlik</span>/&gt;
                </div>
                <nav>
                    <ul className='navList'>
                        <li className="navItem"><a href="#skills-b" className="link">Skills</a></li>
                        <li className="navItem"><a href="#projects-b" className="link">Projects</a></li>
                        <li className="navItem"><a href="#resume-b" className="link">Resume</a></li>
                        <li className="navItem"><a href="#contact-b" className="link">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;