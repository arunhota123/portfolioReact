import React from "react";
import { Link } from "react-scroll";
import './Navbar.css';
export const Navbar = () => {
    return (
        // <div className="navbar">
        //     <div className="navLeft">
        //         <h2>Arun's Portfolio</h2>
        //     </div>
        //     <div className="navRight">
        //         <nav>
        //             <Link to="banner" smooth={true} duration={500}>Home</Link>
        //             <Link to="about" smooth={true} duration={500}>About Me</Link>             
        //             <Link to="skills" smooth={true} duration={500}>Skills</Link>               
        //             <Link to="projects" smooth={true} duration={500}>Projects</Link>
        //             <Link to="contact" smooth={true} duration={500}>Contact Me</Link>
        //         </nav>
        //     </div>
        // </div>
        <nav className="navbar navbar-dark text-light navbar-expand-lg border-body fixed-top">
            <div className="container-fluid ">
                <h2>Arun's Portfolio</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            <Link to="banner" smooth={true} duration={500} className="nav-link active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" smooth={true} duration={500} className="nav-link active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="skills" smooth={true} duration={500} className="nav-link active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projects" smooth={true} duration={500} className="nav-link active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" smooth={true} duration={500} className="nav-link active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}