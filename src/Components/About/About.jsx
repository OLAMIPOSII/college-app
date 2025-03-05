import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="ABOUT IMAGE" className="about-img" />
        <img src={play_icon} alt="PLAY ICON" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrrow's Leaders Today.</h2>
        <p>
          Embark on a transformstive educational journey with our university's
          comprehensieve education programs. our cutting edge curriculum is
          designed to empower students wuth the knowmledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focous pn innovation and hands on learning as well as
          personalized mentorship our programs prepare aspiring educators to
          make a meaningful impact in educational institues.
        </p>
      </div>
    </div>
  );
};

export default About;
