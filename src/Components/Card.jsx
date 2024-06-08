import React from "react";
import "./Card.css";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FlipCameraAndroidSharpIcon from "@mui/icons-material/FlipCameraAndroidSharp";
import { useInView } from "react-intersection-observer";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { Zoom } from "@mui/material";

export const CustomeCard = (props) => {

  const { ref, inView } = useInView({
    // triggerOnce: true, // Animation triggers only once
    // threshold: 0.4,
    // Trigger when 10% of the element is visible
  });
  const [customeClass, setClass] = useState("");
  const handelFlipCard = () => {
    setClass((prev) => (prev === "flipCard" ? "" : "flipCard"));
  };
  const  mouseLeave = () => {
    if (customeClass === "flipCard") {
      setClass("");
    }
  };
   async function navigator(){
      const shareUrl =  window.location.href;
      return shareUrl;
    }
  async function handelSocialLink() {
    try {
      let navigatorPath= await navigator()
      await navigator.clipboard.writeText(navigatorPath);
      console.log(navigatorPath);
    } catch (error) {
      return error;
    }
  }

  return (
    <Tooltip title="Flip card" placement="top-end">
      <Card
        ref={ref}
        onMouseLeave={ mouseLeave}
        id="container"
        sx={{ aspectRatio: "4:3", width: "400px", height: "400px" }}
      >
        <div className={`card ${customeClass}`}>
          <div className="card-Frontside">
            <div className="flip-btn">
              <Zoom in={inView} timeout={1000}>
                <Button onClick={handelFlipCard}>
                  <FlipCameraAndroidSharpIcon />
                </Button>
              </Zoom>
            </div>
            <div className="bar">
              <Slide direction="left" in={inView} timeout={1000}>
                <Typography
                  href={`http://facebook.com`}
                  target="_blank"
                  component={"a"}
                  onClick={handelSocialLink}
                >
                  <Button className="bar-social-btn">
                    <FacebookIcon
                      className="bar-icon"
                      sx={{ borderRadius: "100%" }}
                    />
                  </Button>
                </Typography>
              </Slide>
              <Slide direction="up" in={inView} timeout={1000}>
  <Typography href={`https://www.instagram.com/direct/inbox/`} target="_blank" component={"a"} onClick={handelSocialLink}>
                  <Button className="bar-social-btn">
                    <InstagramIcon />
                  </Button>
                </Typography>
              </Slide>
              <Slide direction="down" in={inView} timeout={1000}>
                  <Typography
                    component={"a"}
                    href="https://www.linkedin.com/messaging/"
                    target="_blank"
                  >
                <Button className="bar-social-btn">
                    <LinkedInIcon />
                </Button>
                  </Typography>
              </Slide>
            </div>
          </div>
          <div className="card-Backside">
            <div className="flip-btn">
              <Button onClick={handelFlipCard}>
                <FlipCameraAndroidSharpIcon />
              </Button>
            </div>
            <div className="card-header">
              <CardContent>
                <Typography variant="p" component={"h4"}>
                  {props.title}
                </Typography>
              </CardContent>
            </div>
            <div className="card-body">
              <CardContent>{props.children}</CardContent>
            </div>
          </div>
        </div>
      </Card>
    </Tooltip>
  );
};
