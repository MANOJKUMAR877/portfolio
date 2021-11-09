import React from "react";
import "./Project.css";
import Project1 from "./img/HRMS.jpg";
import Project2 from "./img/room.jpg";
import Project3 from "./img/e1.jpeg";
import Project4 from "./img/4.png";
import Project5 from "./img/5.jpeg";
import Project6 from "./img/6.jpeg";
function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">Some of my projects to your eyes</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  Human Resource Management System
                </h4>
                {/* <p className="project__text">
                  Getting tickets to the big show
                </p> */}
                {/* <a href="#" className="project__btn">
                  View Details
                </a> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box" style={{width:"100%"}}>
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                
                <h4 className="project__text">
                 E-Commerce Web App
                </h4>
                {/* <a href="#" className="project__btn">
                  View Details
                </a> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Room Booking System</h4>

                {/* <a href="#" className="project__btn">
                  View Details
                </a> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
               
                <h4 className="project__text">
                 Online Quizz APP
                </h4>
                {/* <a href="#" className="project__btn">
                  View Details
                </a> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project5} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
               
                <h4 className="project__text">
                 Real Time Chat APP
                </h4>
                {/* <a href="#" className="project__btn">
                  View Details
                </a> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project6} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                {/* <h5 className="project__text"></h5> */}
                <h4 className="project__text">
                  Kinetic Temperature Sensing Robot
                </h4>
                {/* <a href="#" className="project__btn">
                  View Details
                </a> */}
              </div>
            </div>
          </div>

          {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
