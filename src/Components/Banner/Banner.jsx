import React from "react";
import home_img from '../Assets/1677254417161 (1).jpg';
import './Banner.css';
export const Banner = () => {
    return (
        <div className="banner">
            <div className="home-content animate-on-scroll">
                <h3>Hello, It's Me</h3>
                <h1>Arun Hota</h1>
                <h3>And I'm am a Web Developer.</h3>
                <div className="home-sci">
                    <i className='bx bxl-linkedin'></i>
                    <i className='bx bxl-gmail'></i>
                    <i className='bx bxl-whatsapp'></i>
                </div>
            </div>
            <div className="home-imgHover">
                <img src={home_img} alt="" />
            </div>
        </div>
    )
}