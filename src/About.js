import React from "react";
import "./About.css";
import aboutImg from "./img/manoj.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Accomplished Software Professional who is expertise in
                Stakeholder Management, Requirements Analysis, Vendor
                Management, Strong program and project management professional
                with experience in Software Development Life Cycle (SDLC),
                Process Improvement, and Project Management Office (PMO).
              </p>
              <p className="about__text p__color">
                Developed and delivered many responsive web applications.
                Created reusable components in React to complete the development
                in a short time. Break down high-level objectives into specific
                software development tasks and follow through on their
                execution.
              </p>
              <p className="about__text p__color">
                Ownership to develop plans and deliver components to meet the
                schedule and quality expectations of the product owner. Write
                code that is easy to understand and fits with existing patterns.
                Gathering requirements, writing functional specifications, and
                reviewing user stories and technical specifications.
              </p>
              <div className="about__button d__flex align__items__center">
                <a
                  href="https://www.instagram.com/manojkumar_baskaran/"
                  target="_blank"
                >
                  <button className="about btn pointer">Instagram</button>
                </a>
                {/* <i class="fab fa-instagram"></i> */}
                <a
                  href="https://www.linkedin.com/in/manojkumar-k-b-1a2a40150/"
                  target="_blank"
                >
                  <button className="about btn pointer">Linked In</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
