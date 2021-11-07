import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="service component__space" id="Resume">
      <div className="heading">
        <h1 className="heading">My Awesome Service</h1>
        {/* <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  Software Developer - (PRLX WEB)
                </h1>
                <h1 className="service__text">From (02/06/2021 - till date)</h1>
                <p className="p service__text p__color">
                  Researching, designing, implementing, and managing software
                  programs Testing and evaluating new programs. Identifying
                  areas for modification in existing programs and subsequently
                  developing these modifications Design highly scalable,
                  testable code. Fix programming bugs. • Participate and provide
                  some input in project code reviews.
                </p>
                <p className="p service__text p__color">
                  Runs software tests designed by more experienced engineers.
                  Reviews test result and perform root cause analyses to
                  identify problems. Make recommendations to the immediate team
                  to enhance performance productivity.
                </p>
                {/* <p className="p service__text p__color">close to the earth.</p> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  Associate Software Developer - (BlackGold Innovation Pvt Ltd)
                </h1>
                <h1 className="service__text">
                  From (04/05/2020) To (31/05/2021)
                </h1>
                <p className="p service__text p__color">
                  Developing the Admin portal for Ecomm verse web application in
                  which we can manage various identity services policies. Access
                  tools for managing in the areas of authentication, orders and
                  fulfilling, products, customers, analytics, marketing, etc.
                </p>
                <p className="p service__text p__color">
                  Actively participate in technical innovations, external
                  presentations. Experience in managing projects across cross
                  teams, building sustainable processes, and coordinating
                  release schedules.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  Associate Software Engineer Intern - (Innoventes Technologies)
                </h1>
                <h1 className="service__text">
                  From (16/12/2019) To (31/03/2020)
                </h1>
                <p className="p service__text p__color">
                  Develop the end to end front end aspect for the project called
                  Daily sales Report with the following technologies React js,
                  Ionic connecting with backend API
                </p>
                <p className="p service__text p__color">
                  From start to finish in order to complete a typical Web design
                  project. It divides and categorizes the work and then breaks
                  these high-level sections into tasks and resources that can be
                  used as a road map for a project.
                </p>
                {/* <p className="p service__text p__color">close to the earth.</p> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  BE Computer Science and Engineering
                </h1>
                <p className="p service__text p__color">
                  At Sri Ramakrishna Institute Of Technology - (From 2016-2020)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
