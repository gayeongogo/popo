import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/Carousel.scss';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };


    const githubURL1 = "https://github.com/gayeongogo/project1.git";
    const githubURL2 = "https://github.com/gayeongogo/mangoboard.git";
    const githubURL3 = "https://github.com/gayeongogo/project3.git";
    const githubURL4 = "https://github.com/gayeongogo/movieapp.git";
    const githubURL5 = "https://github.com/gayeongogo/kurly.git";
    const githubURL6 = "https://github.com/gayeongogo/foodResipe.git";
    const githubURL7 = "https://github.com/gayeongogo/popo.git";
    const web1 = "https://gayeongogo.github.io/project1/";
    const web2 = "https://gayeongogo.github.io/mangoboard/";
    const web3 = "https://gayeongogo.github.io/project3/";
    const web4 = "https://gayeongogo.github.io/movieapp/";
    const web5 = "https://gayeongogo.github.io/kurly/";
    const web6 = "https://gayeongogo.github.io/foodResipe/";
    const web7 = "https://gayeongogo.github.io/popo/";
      
    return (
        <div className='carousel'>
            <Slider {...settings}>
                <div className="project-cont">
                    <div className="project-image">
                        <img src={process.env.PUBLIC_URL + '/img/project1.png'} alt="project1" />
                    </div>
                    <div className="project-desc">
                        <h1 className="project-desc-date">December 2022</h1>
                        <h2 className="project-desc-title">대검찰청 클론코딩</h2>
                        <div className="project-desc-skill">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JQUARY</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                        </div>
                        <div className="project-desc-details">
                            웹표준과 웹 접근성을 중시한 대검찰청 클론코딩 프로젝트입니다. html과 css를 사용하여 화면을 구성했으며, jqury 슬라이드를 제작 구현했습니다. 메인페이지와 서브페이지 총 7페이지로 구성되었습니다.
                        </div>
                        <div className="project-desc-links">
                            <i onClick={() => {window.open(githubURL1)}} className="fab fa-github"></i>
                            <i onClick={() => {window.open(web1)}} className="fas fa-globe"></i>
                        </div>
                    </div>
                </div>
                <div className="project-cont">
                    <div className="project-image">
                        <img src={process.env.PUBLIC_URL + '/img/project2.png'} alt="project1" />
                    </div>
                    <div className="project-desc">
                        <h1 className="project-desc-date">December 2022</h1>
                        <h2 className="project-desc-title">망고보드 클론코딩</h2>
                        <div className="project-desc-skill">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JQUARY</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                        </div>
                        <div className="project-desc-details">
                            메인페이지 클론코딩과 더불어 반응형 페이지로 리뉴얼하여 제작했습니다. 미디어쿼리를 활용하여 모바일 환경에서 이용할 수 있는 모바일 메뉴바를 구현하고, swiper 라이브러리를 활용하여 슬라이드를 구현했습니다.
                        </div>
                        <div className="project-desc-links">
                            <i onClick={() => {window.open(githubURL2)}} className="fab fa-github"></i>
                            <i onClick={() => {window.open(web2)}} className="fas fa-globe"></i>
                        </div>
                    </div>
                </div>
                <div className="project-cont">
                    <div className="project-image">
                        <img src={process.env.PUBLIC_URL + '/img/project3.png'} alt="project3" />
                    </div>
                    <div className="project-desc">
                        <h1 className="project-desc-date">Jenuary 2023</h1>
                        <h2 className="project-desc-title">베베드피노 반응형 페이지</h2>
                        <div className="project-desc-skill">
                            <ul>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>JQUARY</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                        </div>
                        <div className="project-desc-details">
                            기존 기업 웹사이트를 참고하여 메인페이지를 반응형 페이지로 리뉴얼하여 작업했습니다. 미디어쿼리를 활용하여 모바일과 PC 모두 보기 편하도록 제작했습니다.
                        </div>
                        <div className="project-desc-links">
                            <i onClick={() => {window.open(githubURL3)}} className="fab fa-github"></i>
                            <i onClick={() => {window.open(web3)}} className="fas fa-globe"></i>
                        </div>
                    </div>
                </div>
                <div className="project-cont">
                    <div className="project-image">
                        <img src={process.env.PUBLIC_URL + '/img/project4.png'} alt="project4" />
                    </div>
                    <div className="project-desc">
                        <h1 className="project-desc-date">January 2023</h1>
                        <h2 className="project-desc-title">영화 사이트</h2>
                        <div className="project-desc-skill">
                            <ul>
                                <li>REACT</li>
                                <li>SCSS</li>
                            </ul>
                        </div>
                        <div className="project-desc-details">
                            리액트를 사용하여 제작한 영화 웹사이트입니다. 라우터로 각 페이지를 구분하였고 영화 API를 이용하여 영화정보 페이지, 좋아하는 영화를 기록할 수 있는 페이지를 각각 제작했습니다.
                        </div>
                        <div className="project-desc-links">
                            <i onClick={() => {window.open(githubURL4)}} className="fab fa-github"></i>
                            <i onClick={() => {window.open(web4)}} className="fas fa-globe"></i>
                        </div>
                    </div>
                </div>
                <div className="project-cont">
                    <div className="project-image">
                        <img src={process.env.PUBLIC_URL + '/img/project5.png'} alt="project5" />
                    </div>
                    <div className="project-desc">
                        <h1 className="project-desc-date">Febuary 2023</h1>
                        <h2 className="project-desc-title">마켓컬리 회원가입 페이지</h2>
                        <div className="project-desc-skill">
                            <ul>
                                <li>REACT</li>
                                <li>SCSS</li>
                            </ul>
                        </div>
                        <div className="project-desc-details">
                            리액트를 활용한 마켓컬리 회원가입 페이지입니다. 유효성 검사, 아이디 및 비밀번호 중복확인, 주소검색, 약관동의 등의 조건을 수행하고 해당 사항들이 모두 충족되어야 가입 될 수 있도록 구현했습니다.
                        </div>
                        <div className="project-desc-links">
                            <i onClick={() => {window.open(githubURL5)}} className="fab fa-github"></i>
                            <i onClick={() => {window.open(web5)}} className="fas fa-globe"></i>
                        </div>
                    </div>
                </div>
                <div className="project-cont">
                    <div className="project-image">
                        <img src={process.env.PUBLIC_URL + '/img/project6.png'} alt="project6" />
                    </div>
                    <div className="project-desc">
                        <h1 className="project-desc-date">Febuary 2023</h1>
                        <h2 className="project-desc-title">레시피 검색 사이트</h2>
                        <div className="project-desc-skill">
                            <ul>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                        </div>
                        <div className="project-desc-details">
                            자바스크립트를 이용한 레시피 검색 사이트입니다. 레시피 api를 통해 각종 레시피를 fetch로 불러오며, 검색을 통해 원하는 레시피를 찾을 수 있도록 제작하였습니다.
                        </div>
                        <div className="project-desc-links">
                            <i onClick={() => {window.open(githubURL6)}} className="fab fa-github"></i>
                            <i onClick={() => {window.open(web6)}} className="fas fa-globe"></i>
                        </div>
                    </div>
                </div>
                
                <div className="project-cont">
                    <div className="project-image">
                        <img src={process.env.PUBLIC_URL + '/img/project7.png'} alt="project7" />
                    </div>
                    <div className="project-desc">
                        <h1 className="project-desc-date">March 2023 ~ing</h1>
                        <h2 className="project-desc-title">개인 포트폴리오</h2>
                        <div className="project-desc-skill">
                            <ul>
                                <li>REACT</li>
                                <li>SCSS</li>
                            </ul>
                        </div>
                        <div className="project-desc-details">
                            리액트를 활용한 개인 포트폴리오입니다. 반응형 페이지로 제작하였으며 풀페이지 스크린, 스크롤 이벤트 등을 리액트 라이브러리를 활용하여 구현하였습니다.
                        </div>
                        <div className="project-desc-links">
                            <i onClick={() => {window.open(githubURL7)}} className="fab fa-github"></i>
                            <i onClick={() => {window.open(web7)}} className="fas fa-globe"></i>
                        </div>
                    </div>
                </div>
            
            </Slider>
        </div>
      );
};

export default Carousel;