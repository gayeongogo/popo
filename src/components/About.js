import React from 'react';
import { Link } from "react-router-dom";
import './style/About.scss';

const About = () => {

	const resumeURL = "https://drive.google.com/file/d/1M_PFUE5KjR_k7n4magN-Vc4JXl5JvFTO/view?usp=share_link";

    return (
        <div id="about" className="section section2">
			<div className="about container">
				<div className="bg">
					<div className="yellowCircle bg-ye"></div>
					<div className="blueCircle bg-bl"></div>
				</div>
				<div className="about-main">
					<div className="about-main-desc">
						<p className="desc1">한 걸음 나아가는 개발자, 고가연 입니다.</p>
						<p className="desc2">
							안녕하세요 :) 프론트엔드 개발자를 꿈꾸는 고가연입니다.
							<br/><br/>
							늘 새로운 것을 추구하고, 더 효율적인 방법을 생각하고, 발견하고, 활용하는 것을 좋아하는 저는 사용자가 보다 편리하게 이용할 수 있는 기능들을 설계하고 구현하고자 하는 목표를 가지고 있습니다.  
							<br/><br/>
							프론트엔드 개발자가 되기 위한 기반 능력을 다지면서 느낀 것은 아주 작은 문제라 할지라도 이를 더 나은 방법으로 바꿔나가는 과정에서의 탐구와 이해가 더 큰 성장을 만든다는 것이었습니다. 
							<br/><br/>
							한 걸음 더 성장하기 위해 작은 문제도 깊게 몰두하고 파헤치며, 고객의 니즈와 피드백에 귀기울여 더 나은 프로젝트와 환경을 만드는 개발자가 되겠습니다.
						</p>
					</div>
					<div className="about-main-info">
						<div className="infoImg">
							<p className="infoDetail">
								<i className="fas fa-thumbtack"></i> Go Ga Yeon
								<br/>
								<i className="fas fa-thumbtack"></i> 2000. 01. 26
								<br/>
								<i className="fas fa-thumbtack"></i> anyang unv.
							</p>
							<img src={process.env.PUBLIC_URL + '/img/click.png'} alt="infoClick" className='infoClick'/>
						</div>
						<Link to="/" className="resume" onClick={() => {window.open(resumeURL)}}>
							<span className="resume-text">
								입사지원서
								<br/>
								바로가기
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
    );
};

export default About;