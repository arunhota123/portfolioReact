import React from "react";
import './Projects.css';
import img1 from '../Assets/Untitled design (2).png';
import img2 from '../Assets/Screenshot 2024-05-23 170322.jpg';
import img3 from '../Assets/1_qn44K8C2-ojteEgbGAgnYA.png'
export const Projects = () => {
    return (
        <div className="project">
            <div id="project" style={{ marginTop: '-200px' }}>
                <div className="main-text">
                    <h2>Latest<span>Project</span></h2>
                    <center>
                        <div className="portfolio-content" style={{ paddingTop: '50px' }}>
                            <div className="row">
                                <img src={img1} alt="" />
                                <div className="layer">
                                    <h5>E-Commerce Website</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic qui ipsa
                                        dolorem, officia tempore temporibus nulla laborum tenetur voluptates quae itaque
                                        perferendis ipsum. Ipsum perferendis minus tenetur omnis culpa?</p>
                                </div>
                            </div>
                            <div className="row">
                                <img src={img2} alt="" />
                                <div className="layer">
                                    <h5>Power Bi project</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic qui ipsa
                                        dolorem, officia tempore temporibus nulla laborum tenetur voluptates quae itaque
                                        perferendis ipsum. Ipsum perferendis minus tenetur omnis culpa?</p>
                                </div>
                            </div>
                            <div className="row">
                                <img src={img3} alt="" />
                                <div className="layer">
                                    <h5>Sentiment Analysis</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic qui ipsa
                                        dolorem, officia tempore temporibus nulla laborum tenetur voluptates quae itaque
                                        perferendis ipsum. Ipsum perferendis minus tenetur omnis culpa?</p>
                                </div>
                            </div>
                        </div>
                    </center>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row">
                                    <img src={img1} alt="" />
                                    <div className="layer">
                                        <h5>E-Commerce Website</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic qui ipsa
                                            dolorem, officia tempore temporibus nulla laborum tenetur voluptates quae itaque
                                            perferendis ipsum. Ipsum perferendis minus tenetur omnis culpa?</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row">
                                    <img src={img2} alt="" />
                                    <div className="layer">
                                        <h5>Power Bi project</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic qui ipsa
                                            dolorem, officia tempore temporibus nulla laborum tenetur voluptates quae itaque
                                            perferendis ipsum. Ipsum perferendis minus tenetur omnis culpa?</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row">
                                    <img src={img3} alt="" />
                                    <div className="layer">
                                        <h5>Sentiment Analysis</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic qui ipsa
                                            dolorem, officia tempore temporibus nulla laborum tenetur voluptates quae itaque
                                            perferendis ipsum. Ipsum perferendis minus tenetur omnis culpa?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}