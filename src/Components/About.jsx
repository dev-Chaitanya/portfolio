import React from "react";
import "./About.css";
import { useInView } from "react-intersection-observer";
import Slide from "@mui/material/Slide";
// import Collapse from "@mui/material/Collapse";
export const About = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true, // Animation triggers only once
    // threshold: 0.4,
    // Trigger when 10% of the element is visible
  });
  

  return (
    <div id="About">
      <div className="typography">
        <h1 className="typo-Title">ABOUT ME</h1>
      </div>
      <div className={`About-card`} ref={ref}>
        <Slide
          in={inView}
          direction="right"
          timeout={2000}
        >
          <div className="About-img">
            <img className={``} src="profile2.jpg" alt="profile" />
          </div>
        </Slide>
      
          <div className="About-card-typo"  ref={ref}> 
            <div className={`typo-card`}  >
            <div style={{position:"relative",overflow:"hidden"}}>
                <Slide in={inView} direction="left" timeout={2000}>
              <div className="typo-card-body">
                <h2>
                  <span className="About-typo-subTitle text">Name </span>
                </h2>
                <p>Chaitanya   </p>
              </div>
                </Slide>
                </div>
            </div>
            <div className="typo-card">
            <div style={{position:"relative",overflow:"hidden"}}>
                <Slide direction="up" in={inView}  timeout={1000}>
              <div className="typo-card-body">
                <h2>
                  <span className="About-typo-subTitle">Description:</span>
                </h2>
                <p>
                  "Passionate front-end developer skilled in crafting visually
                  stunning and user-friendly web interfaces. Dedicated to
                  turning innovative ideas into dynamic digital experiences
                  through clean, efficient code and a keen eye for design."
                </p>
              </div>
                </Slide>
                </div>
            </div>
            <div className="typo-card">
            <div style={{position:"relative",overflow:"hidden"}}>
                <Slide in={inView} direction="left" timeout={1000} >
              <div className="typo-card-body">
                <h2>
                  <span className="About-typo-subTitle">Education:</span>
                </h2>
                <p>
                  "I hold a degree in BCA from G.H.Raisoni University, where I
                  developed a solid understanding of web development principles
                  and practices. During my studies, I focused on mastering HTML,
                  CSS, JavaScript, and modern frameworks such as React and
                  Angular"
                </p>
              </div>
                </Slide>
                </div>
            </div>
            <div className="typo-card">
              <div style={{position:"relative",overflow:"hidden"}}>
              <Slide in={inView} timeout={2000} direction="up">
              <div className="typo-card-body">
                <h2>
                  <span className="About-typo-subTitle">Technical Skills:</span>
                </h2>
                <p>
                  "Languages: HTML, CSS, JavaScript
                  <br />
                  Frameworks: React, Angular,Vue.js
                  <br />
                  Tools: Git, Webpack, Sass, Bootstrap"
                </p>
              </div>
              </Slide>
              </div>

            </div>
            <div className="typo-card">  
              <div className="typo-card-body">
                <p>
                  <q>
                    I believe that great web design is about more than just
                    aesthetics; it's about creating an intuitive and accessible
                    user experience. I strive to write clean, efficient code and
                    stay updated with the latest industry trends to deliver the
                    best possible solutions
                  </q>
                </p>
                </div>
            </div>
          </div>
 
      </div>
    </div>
  );
};
