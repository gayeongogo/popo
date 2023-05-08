import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import './style/Main.scss';


const Main = () => {
    const titleRef=useRef();
    const handleMouseMove = (rotate) =>{
        let x = (window.innerWidth / 2 - rotate.clientX) / 20;
        let y = (window.innerHeight / 2 - rotate.clientY) / 10;

        titleRef.current.style.transform = "rotateY(" +  -x + "deg) rotateX(" + y+ "deg)";
    }
    const handleMouseOut = () =>{
        titleRef.current.style.transform = "rotate(0)"
    }
    return (
        <div id="main" className='section section1'>
            <div className="home container" onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
                <div className="home-bg">
                    <div className="orangeCircle bg-or home-or"></div>
                    <div className="yellowCircle bg-ye home-ye"></div>
                    <div className="blueCircle bg-bl"></div>
                </div>
                <div className="home-main">
                    <p className="home-main-text1" ref={titleRef}>
                        Welcome To<br/>
                        GaYeon's PortPolio<br/>
                    </p>
                    <p className="home-main-text2">Front-end Developer</p>
                    <Link activeclassName="active" className="test2 btn-black" to="test2" spy={true} smooth={true} duration={500}>VIEW MORE</Link>
                    
                </div>
                <Link activeclassName="active" className="test5 contactLink" to="test5" spy={true} smooth={true} duration={500}></Link>
                <Link activeclassName="active" className="test4 projectLink" to="test4" spy={true} smooth={true} duration={500}></Link>
                <Link activeclassName="active" className="test3 skillLink" to="test3" spy={true} smooth={true} duration={500}></Link>
                <p className="bottomText">이 페이지는 개인 포트폴리오를 목적으로 제작되었습니다.</p>
            </div>
        </div>
    );
};

export default Main;