import React from "react";
import "../CSS/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-page">
        {/* ===== Carousel Section ===== */}
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/Images/NISM.jpeg" className="d-block w-100 h-80" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/Images/AeliyaMarine_1.jpeg" className="d-block w-100 h-80" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/Images/AeliyaMarine_2.jpeg" className="d-block w-100 h-80" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/Images/TechBuzz.jpeg" className="d-block w-100 h-80" alt="..." />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        {/* ===== Personal Portfolio Vibe Section ===== */}
        <div className="container mt-5 mb-5">
          <h2 className="text-center mb-4">My Journey</h2>
          <div className="row text-center">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg h-100 custom-card">
                <div className="card-body">
                  <h5 className="card-title">📚 Education</h5>
                  <p className="card-text">
                    I am currently pursuing <b>MBA in Finance</b> and hold a <b>B.Tech in CSE</b>.  
                    My journey reflects both <b>technical expertise</b> and <b>financial acumen</b>.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg h-100 custom-card">
                <div className="card-body">
                  <h5 className="card-title">🏆 Achievements</h5>
                  <p className="card-text">
                    Certified with <b>NISM</b>, recognized in <b>TechBuzz Event</b>, 
                    and contributed to <b>Aeliya Marine projects</b>.  
                    Each step is a milestone in my professional growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg h-100 custom-card">
                <div className="card-body">
                  <h5 className="card-title">🚀 Future Goals</h5>
                  <p className="card-text">
                    My dream is to excel in <b>FinTech</b>, building innovative financial solutions 
                    with the blend of <b>technology & business knowledge</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
