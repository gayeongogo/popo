import React, { useState } from 'react';
import Modal from './Modal'
import './style/Skill.scss';

const Skill = () => {

	const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

	const hideModal = () => {
        setModalOpen(false);
    };

    return (
        <div id="skill" className="section section3">
			<div className="skill container">
				<div className="bg">
					<div className="pinkCircle bg-pi"></div>
					<div className="blueCircle bg-bl"></div>
				</div>
				<div className="skill-area">
					<div className="skill-area-main">
						<div className="keywords">
							<h1 className="skill-title">All About My Skill</h1>
							<ul>
								<li><i className="fab fa-js-square"></i> javascript</li>
								<li>jquary</li>
								<li><i className="fab fa-react"></i> react</li>
								<li><i className="fab fa-github"></i> github</li>
								<li><i className="fab fa-html5"></i> html</li>
								<li><i className="fab fa-css3-alt"></i> css</li>
								<li><i className="fab fa-sass"></i> scss</li>
								<li><i className="fab fa-bootstrap"></i> bootstrap</li>
								<li>photoshop</li>
								<li><i className="fab fa-vuejs"></i> vue</li>
								<li><i className="fab fa-figma"></i> figma</li>
								<li>zeplin</li>
							</ul>
						</div>
						<div className="license">
							<span className="license-title">License</span>
							<ul>
								<li>GTQ 1급 <span>한국산업인력공단, 2022. 02</span></li>
								<li>컴퓨터활용능력 2급 <span>대한상공회의소, 2022. 02</span></li>
								<li>조주기능사 <span>한국산업인력공단, 2021. 10</span></li>
								<li>운전면허2종보통 <span>2023. 03</span></li>
							</ul>
						</div>
						<button className='btn-black' onClick={showModal}>VIEW MORE</button>
					</div>
					<div className="skill-area-detail">
						<div className="card">
							<ul className="card-list">
								<span className="card-name">REACT</span>
								<li>React 기본 문법을 이해하고 활용할 수 있다.</li>
								<li>React 라이브러리를 활용할 수 있다.</li>
								<li>Conmponent로 재사용 가능한 UI 구조를 만들 수 있다.</li>
								<li>React Router DOM을 활용하여 페이지를 구성할 수 있다.</li>
							</ul>
						</div>
						<div className="card">
							<ul className="card-list">
								<span className="card-name">JAVASCRIPT</span>
								<li>javascript 기본문법을 이해하고 동적 소스를 작성할 수 있다.</li>
								<li>jquary 및 jquaryUI를 사용할 수 있다.</li>
								<li>vanila javascript로 슬라이드를 제작할 수 있다.</li>
								<li>오픈소스를 수정 및 활용할 수 있다.</li>
								<li>axios API를 사용할 수 있다.</li>
							</ul>
						</div>
						<div className="card">
							<ul className="card-list">
								<span className="card-name">HTML</span>
								<li>웹 표준 및 웹 접근성을 활용하여 웹페이지를 제작할 수 있다.</li>
								<li>시멘틱 마크업을 이용할 수 있다.</li>
								<li>크로스브라우징에 대응할 수 있다.</li>
							</ul>
						</div>
						<div className="card">
							<ul className="card-list">
								<span className="card-name">CSS</span>
								<li>scss문법에 익숙하다.</li>
								<li>미디어쿼리를 이용할 수 있으며 반응형, 적응형 페이지를 제작할 수 있다.</li>
								<li>keyframe을 이용하여 animation을 구현할 수 있다.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{
				modalOpen && <Modal showModal={showModal} hideModal={hideModal}/>
			}
		</div>
    )
};

export default Skill;