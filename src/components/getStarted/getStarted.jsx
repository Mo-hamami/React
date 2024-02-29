import React from "react";
import "./getStarted.css";

const getStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="SecondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:mo11hamami@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default getStarted;
