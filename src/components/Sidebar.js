import React from "react";
import larry from "../larry.JPG";
import github from "../github.png";
import twitter from "../twitter.jpg";
import email from "../email.png";

const Sidebar = () => {
  return (
    <div className="side">
      <img src={larry} alt="Larry Marcum" />
      <p>
        <strong>I am Larry</strong>, a Full-Stack Developer living in San
        Antonio, Texas.
      </p>
      <div className="link-container">
        <a href="#">
          <img src={github} alt="github" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#">
          <img src={email} alt="email" />
        </a>
      </div>
    </div>
  );
};
