import React from "react";
import './Skills.css';
export const Skills = () => {
    return (
        <>
            <center>
                <h1 className="sub-title">My <span>Skills</span></h1>
            </center>
            <div className="skill">
                <div className="container1 ">
                    <h1 className="heading1">Technical Skills</h1>
                    <div className="Technical-bars animate-on-scroll">

                        <div className="tbar "><i style={{ color: "#147bbc" }} className='bx bxl-html5'></i>
                            <div className="info">
                                <span>HTML</span>
                            </div>
                            <div className="progress-line html ">
                                <span></span>
                            </div>
                        </div>
                        <div className="tbar"><i style={{ color: "#c95d2e" }} className='bx bxl-css3'></i>
                            <div className="info">
                                <span>CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span></span>
                            </div>
                        </div>
                        <div className="tbar"><i style={{ color: "#b0bc1e" }} className='bx bxl-javascript'></i>
                            <div className="info">
                                <span>Javascript</span>
                            </div>
                            <div className="progress-line javascript">
                                <span></span>
                            </div>
                        </div>
                        <div className="tbar"><i style={{ color: "#c32ec9" }} className='bx bxl-python'></i>
                            <div className="info">
                                <span>Python</span>
                            </div>
                            <div className="progress-line python">
                                <span></span>
                            </div>
                        </div>
                        <div className="tbar"><i style={{ color: "#147bbc" }} className='bx bxl-postgresql'></i>
                            <div className="info">
                                <span>SQL</span>
                            </div>
                            <div className="progress-line sql">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container1 ">
                    <h1 className="heading1">Professional Skills</h1>
                    <div className="radial-bars animate-on-scroll">

                        <div className="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">90%</div>
                            <div className="text">Creativity</div>
                        </div>
                        <div className="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">90%</div>
                            <div className="text">Communication</div>
                        </div>
                        <div className="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">90%</div>
                            <div className="text">Problem Solving</div>
                        </div>
                        <div className="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">90%</div>
                            <div className="text">Team Work</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}