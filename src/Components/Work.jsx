import React from "react";
import "./Work.css";
import { CustomeCard } from "./Card";
import { Slide, Typography, Zoom } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
export const Work = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true, // Animation triggers only once
    // threshold: 0.4,
    // Trigger when 10% of the element is visible
  });
  const works = {
    projects: [
      {
        title: "E-Commerce Website",
        role: "Lead Designer",
        description:
          "Designed and developed a responsive e-commerce website featuring an intuitive user interface and seamless user experience. Implemented various functionalities including a shopping cart, product filters, and a payment gateway.",
        skillsUsed: [
          "Adobe XD",
          "Sketch",
          "Figma",
          "HTML",
          "CSS",
          "JavaScript",
          "User Research",
          "Prototyping",
          "Wireframing",
        ],
        tools: ["Adobe XD", "HTML", "CSS", "JavaScript"],
        date: "April 2023",
      },
      {
        title: "Mobile App Redesign",
        role: "UI/UX Designer",
        description:
          "Led the redesign of a mobile application to improve user engagement and retention. Conducted user testing and analysis to inform design decisions, resulting in a more intuitive and aesthetically pleasing interface.",
        skillsUsed: [
          "Figma",
          "InVision",
          "User Testing",
          "Interaction Design",
          "Visual Design",
          "Prototyping",
        ],
        tools: ["Figma", "InVision", "Adobe Photoshop"],
        date: "January 2023",
      },

      {
        title: "Corporate Branding",
        role: "Graphic Designer",
        description:
          "Developed a complete branding package for a corporate client, including logo design, business cards, and marketing materials. Ensured consistency across all visual elements to strengthen brand identity.",
        skillsUsed: [
          "Adobe Illustrator",
          "Adobe Photoshop",
          "Branding",
          "Logo Design",
          "Print Design",
          "Typography",
        ],
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        date: "September 2022",
      },
      {
        title: "Social Media Campaign",
        role: "Visual Designer",
        description:
          "Created a series of visually compelling graphics and animations for a social media marketing campaign. Increased engagement rates and brand visibility through eye-catching designs and strategic content placement.",
        skillsUsed: [
          "Adobe After Effects",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Motion Graphics",
          "Social Media Strategy",
        ],
        tools: ["Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator"],
        date: "June 2022",
      },
      {
        title: "Website Redesign for Non-Profit",
        role: "Web Designer",
        description:
          "Redesigned the website for a non-profit organization to improve user navigation and accessibility. Focused on a clean, modern design that effectively communicated the organization’s mission and services.",
        skillsUsed: [
          "HTML",
          "CSS",
          "JavaScript",
          "Adobe XD",
          "User Experience (UX) Design",
          "Accessibility Design",
        ],
        tools: ["Adobe XD", "HTML", "CSS", "JavaScript"],
        date: "March 2022",
      },
    ],
  };
  const [workCard, setWorkCard] = useState(works);
  const [isDisable, setDisable] = useState({
    design: false,
    illustrate: false,
  });
  function handelIllustrate(e) {
    let buttonName = e.target.innerText;
    console.log(buttonName);
    if (buttonName === "DESIGN") {
      setWorkCard(works);
      setDisable({ design: true, illustrate: false });
      setWorkCard((prev) => {
        const updatedProjects = prev.projects.filter(
          (_, index) =>
            index < Math.floor(prev.projects.length / 2) - 1 ||
            index >= Math.floor(prev.projects.length / 2) + 2
        );
        return { ...prev, projects: updatedProjects };
      });
    } else if (buttonName === "WORK") {
      setDisable({ design: false, illustrate: false });
      setWorkCard((prev) => {
        return { ...prev, projects: works.projects };
      });
    } else {
      setDisable({ illustrate: true, design: false });
      setWorkCard(works);
      setWorkCard((prev) => {
        const updatedProjects = prev.projects.filter(
          (_, index) =>
            index < Math.floor(prev.projects.length / 2) - 2 ||
            index >= Math.floor(prev.projects.length / 2) + 2
        );
        return { ...prev, projects: updatedProjects };
      });
    }
  }
  return (
    <>
      <div id="Work">
        <div className="typography">
          <h1 className="typo-Title">Work</h1>
        </div>
        <div className="illustrate">
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button onClick={handelIllustrate}>work</Button>
            <Button onClick={handelIllustrate} disabled={isDisable.design}>
              Design
            </Button>
            <Button onClick={handelIllustrate} disabled={isDisable.illustrate}>
              UI
            </Button>
          </ButtonGroup>
        </div>
        <div className="Work-contaienr">
          <div className="Work-card-box" ref={ref}>
            {workCard.projects.map((element, index) => {
              return (
                <Zoom in={inView} timeout={1000} key={element.title}>
                  <Slide in={inView} timeout={1000} direction="left">
                    <div className="workCard">
                      <CustomeCard key={element.title} title={element.title}>
                        <Typography variant="p" component={"h3"}>
                          {element.role}
                        </Typography>
                        <br />
                        <Typography variant="p" component={"p"}>
                          {element.description}
                        </Typography>
                        <Typography
                          sx={{ float: "right" }}
                          variant="p"
                          component={"blockquote"}
                        >
                          {element.date}
                        </Typography>
                      </CustomeCard>
                    </div>
                  </Slide>
                </Zoom>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
