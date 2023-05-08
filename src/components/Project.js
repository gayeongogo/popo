import React from 'react';
import './style/Project.scss';
import Carousel from './Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Project = () => {
    return (
        <div id="project" className="section section4">
			<div className="project container">
				<div className="bg">
					<div className="yellowCircle bg-ye"></div>
					<div className="pinkCircle bg-pi"></div>
				</div>
                <Carousel/>
			</div>
		</div>
    );
};

export default Project;