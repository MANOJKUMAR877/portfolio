import React from "react";
import "./Contact.css";
import contactImg from "./img/dp7.jpg";
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Feel free to contact.</h1>
              <p className="hire__text white">
                I am available for freelance work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+91 8778780507 / +49 1512 4646313</strong> or email{" "}
                <strong style={{ cursor: "pointer" }}>
                  kbmanojkumar.20cs@gmail.com
                </strong>
              </p>
            </div>
            <div className="input__box">
              <form action="https://formspree.io/f/mwkadanv" method="POST">
                <input
                  type="text"
                  name="name"
                  required
                  className="contact name"
                  placeholder="Your name *"
                />
                <input
                  type="email"
                  name="email"
                  required
                  className="contact email"
                  placeholder="Your Email *"
                />
                <input
                  type="text"
                  name="subject"
                  required
                  className="contact subject"
                  placeholder="Write a Subject"
                />
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Write Your message"
                ></textarea>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
