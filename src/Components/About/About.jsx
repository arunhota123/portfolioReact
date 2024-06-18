import React from "react";
import './About.css';
import about_img from '../Assets/Designer__6_-removebg-preview (1).png';
export const About = () => {
    return (
        <div className="about">
            <div className="about-img animate-on-scroll"><img src={about_img} alt="" /></div>
            <div className="about-text animate-on-scroll" id="right-about">
                <h2>About<span>Me</span></h2>
                <h4>Full Stack Developer!</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic culpa veritatis voluptates? Natus
                    commodi quod, tenetur qui perspiciatis unde inventore iure nisi, aut sunt ratione dolor rem! Laboriosam,
                    non.</p>
            </div>
        </div>
    )
}