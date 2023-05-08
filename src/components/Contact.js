import React from 'react';
import './style/Contact.scss';

const Contact = () => {
    return (
        <div id="contact" className="section section5">
			<div className="bg">
				<div className="orangeCircle bg-or"></div>
				<div className="yellowCircle bg-ye"></div>
				<div className="blueCircle bg-bl"></div>
			</div>
			<div className="contact container">
				<h1 className="contact-title">
					Let's&nbsp;
					<span>W</span>
					<span>o</span>
					<span>r</span>
					<span>k</span>
					<span>&nbsp;</span>
					<span>T</span>
					<span>o</span>
					<span>g</span>
					<span>e</span>
					<span>t</span>
					<span>h</span>
					<span>e</span>
					<span>r</span>
					<span>!</span>
				</h1>
				<div className="contact-card">
					<div className="contact-card-info">
						<p className="myName">Gayeon Go</p>
						<div className="phoneEmail">
							<div className="phone">
								<span>Phone</span>
								<p>010-5711-9220</p>
							</div>
							<div className="email">
								<span>Email</span>
								<p>rkdus1357@gmail.com</p>
							</div>
						</div>
					</div>
					<div className="contact-card-img"></div>
				</div>
			</div>
		</div>
    );
};

export default Contact;