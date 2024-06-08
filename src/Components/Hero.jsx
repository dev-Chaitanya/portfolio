import React from "react";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { useInView } from "react-intersection-observer";
import Slide from "@mui/material/Slide";
import "./Hero.css";
const titleName = ["C", "H", "A", "I", "T", "A", "N", "Y", "A"];
const Hero = () => {
  
  const { ref, inView } = useInView({
    // triggerOnce: true, // Animation triggers only once
    // threshold: 0.4,
    // Trigger when 10% of the element is visible
  });
  return (
    <>
      <div id="Home" className="hero">
        <Slide ref={ref} in={inView} direction="right" timeout={900}>
          <div className="typography">
            <Tooltip title="CREATOR" placement="top-start">
              <h1 className="highlight-Title typo-Title">
                {titleName.map((element,index) => {
                  return (
                    <svg key={element+index}>
                      <text
                        className="text-flicker-in-glow"
                        x="50%"
                        y="50%"
                        dy=".35em"
                        textAnchor="middle"
                      >
                        {element}
                      </text>
                    </svg>
                  );
                })}
              </h1>
            </Tooltip>

            <h2 className={`typo-subTitle ${inView ? "typewriter" : ""} `}>
              UI/UX Designer & Developer
            </h2>

            {/* <Collapse
              in={inView}
              direction="up"
              timeout={5000}
              container={containerRef.current}
            > */}
              <div className="hero-body-text">
              <p className="highlight-Para typo-paraText">
                Driven by a passion for learning and innovation, I am a deep
                thinker and motivator who constantly seeks new ideas to enhance
                creativity and design.
              </p>
              </div>
            {/* </Collapse> */}
          </div>
        </Slide>
        <div className="hero-img">
          <Zoom ref={ref} in={inView} timeout={900}>
            <div className="hero-photo">
              <img src="profile.jpg" alt="user.jpg" />
              <div className="paper paper1"></div>
              <div className="paper paper2"></div>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Hero;
