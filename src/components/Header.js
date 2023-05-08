import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './style/Header.scss';

const Header = () => {

    const [isOpen, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
    }

    const githubURL = "https://github.com/gayeongogo";
    const blogURL = "https://velog.io/@gayeongogo";

    return (
        <div>
            <header id="header" className="header">
                <div className="header-container">
                    <div className="header-inner">
                        <Link activeclassName="active" className="test1 logo" to="test1" spy={true} smooth={true} duration={500}>
                            GAYEON'S<br/>
                            SPACE
                        </Link>
                        <div className="menu">
                            <ul className="menu-list">
                                <li><Link activeclassName="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>HOME</Link></li>
                                <li><Link activeclassName="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>ABOUT</Link></li>
                                <li><Link activeclassName="active" className="test3" to="test3" spy={true} smooth={true} duration={500}>SKILL</Link></li>
                                <li><Link activeclassName="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>PROJECT</Link></li>
                                <li><Link activeclassName="active" className="test5" to="test5" spy={true} smooth={true} duration={500}>CONTACT</Link></li>
                            </ul>
                        </div>
                        <div className="side">
                            <ul className="side-list">
                                <li onClick={() => {window.open(githubURL)}}><i className="fab fa-github"></i></li>
                                <li onClick={() => {window.open(blogURL)}}><i className="fas fa-bold"></i></li>
                            </ul>
                        </div>
                    </div >
                    <div className="header-mobile">
                        <ul className='header-mobile-ele'>
                            <li>
                                <div className="app-btn" onClick={() => toggleMenu()}>
                                    <span className={!isOpen ? "bar bar1" : "bar bar1 add"}></span>
                                    <span className={!isOpen ? "bar bar2" : "bar bar2 add"}></span>
                                    <span className={!isOpen ? "bar bar3" : "bar bar3 add"}></span>
                                </div>
                                <Link activeclassName="active" className="test1 mobile-logo" to="test1" spy={true} smooth={true} duration={500}>
                                    GAYEON'S<br/>
                                    SPACE
                                </Link>
                                <ul className="side-list">
                                    <li onClick={() => {window.open(githubURL)}}><i className="fab fa-github"></i></li>
                                    <li onClick={() => {window.open(blogURL)}}><i className="fas fa-bold"></i></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className={!isOpen ? "mobile-nav" : "mobile-nav show"}>
                            <li><Link activeclassName="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>HOME</Link></li>
                            <li><Link activeclassName="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>ABOUT</Link></li>
                            <li><Link activeclassName="active" className="test3" to="test3" spy={true} smooth={true} duration={500}>SKILL</Link></li>
                            <li><Link activeclassName="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>PROJECT</Link></li>
                            <li><Link activeclassName="active" className="test5" to="test5" spy={true} smooth={true} duration={500}>CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;