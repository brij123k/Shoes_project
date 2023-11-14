import React from "react";
import LOGO from "./image/Logo.png";

import "./home.css";
const home = () => {
  return (
    <>
      <div className="container_nav">
        <div className="Section_nav">
          <div className="logo_nav">
            <img src={LOGO} alt="" />
          </div>
          <div className="content_nav">
            <ul>
              <li>HOME</li>
              <li>ROADMAP</li>
              <li>FEATURES</li>
              <li>PARTNERS</li>
              <li>TEAM</li>
            </ul>
          </div>
          <div>
            <button className="Join_button ">JOIN OUR DISCORD</button>
          </div>
        </div>

        {/*  _____________________________************_____________________________ */}

        <div className="Section_hero">
          <div className="">
            <h1>Magical Shoes</h1>
            <p>on the Blockchain</p>
            <p>loream23</p>
          </div>
          <div className="hero_Img">
          </div>

        </div>
      </div>
    </>
  );
};

export default home;
