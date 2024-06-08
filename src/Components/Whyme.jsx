import React, { useEffect ,useState} from "react";
import { WhymeCard } from "./WhymeCard";
// import Button from "@mui/material/Button";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import HtmlRoundedIcon from "@mui/icons-material/HtmlRounded";
import CssRoundedIcon from "@mui/icons-material/CssRounded";
import JavascriptRoundedIcon from "@mui/icons-material/JavascriptRounded";
import "./Whyme.css";
export const Whyme = () => {
  let clientData={
    "testimonials": [
      {
        "imageSrc": "jack.jpg",
        "clientName": "Jack Reacher",
        "clientMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget leo sagittis, consequat elit ut, maximus libero. Vivamus auctor felis at neque vehicula, et fermentum mi feugiat. Integer fermentum, quam nec vulputate gravida, ex libero varius justo, nec cursus lorem magna non justo."
      },
      {
        "imageSrc": "SerindaSwan.jpg",
        "clientName": "Serinda Swan",
        "clientMessage": "Sed sit amet felis magna. Donec ac neque sed mi lobortis fermentum. Vivamus malesuada enim et justo molestie, eu convallis justo pulvinar. Nam elementum est ut mauris vehicula, sit amet eleifend ante placerat."
      },
      {
        "imageSrc": "willaFitzgerald.jpg",
        "clientName": "Willa Fitzgerald",
        "clientMessage": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras a erat at nisi congue dapibus. Vivamus nec purus non eros cursus aliquam."
      },
      {
        "imageSrc": "MariaSten.jpg",
        "clientName": "Mariia Sten",
        "clientMessage": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras a erat at nisi congue dapibus. Vivamus nec purus non eros cursus aliquam."
      },
      {
        "imageSrc": "ShaunSipos.jpg",
        "clientName": "Shaun Sipos",
        "clientMessage": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras a erat at nisi congue dapibus. Vivamus nec purus non eros cursus aliquam."
      },
      {
        "imageSrc": "MalcolmGoodwin.jpg",
        "clientName": "Malcolm Goodwin",
        "clientMessage": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras a erat at nisi congue dapibus. Vivamus nec purus non eros cursus aliquam."
      }
    ]
  }  
 const [clients,setClients]=useState([clientData.testimonials]);

 const [isDragging, setIsDragging] = useState(false);  // this state is uses for check isDragging or not 
 const [startX, setStartX] = useState(0);   // this startX is handel previous mouse pointer value
 const [startScrollLeft, setStartScrollLeft] = useState(0);  //this state is use a sate of startScrollLeft means initial and take previous  scroll figure
 
 useEffect(() => {
  setClients(clientData.testimonials);
  // eslint-disable-next-line 
}, []);

 useEffect(() => {

    const carousel = document.querySelector(".carousel");  // this indicates carousel
    const wrapper = document.querySelector(".Testimonial-wrapper");// this indicates wrapper 
    let timeout;  // this is form SetInterval timeout 

    // this function is dragStart which is used Start the Dragging , it triggers the drag
    const dragStart = (e) => {
      setIsDragging(true);  // set dragging to true
      carousel.classList.add("dragging");  // add class of dragging
      setStartX(e.pageX);  // holds the previous start point
      setStartScrollLeft(carousel.scrollLeft);  // this can hold  the previous position of scroll 
    };

    // this holds a dragging function which will drag
    const dragging = (e) => {
      if (!isDragging) return;  // it check true or false if false it will return in this point 
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX); // else this trigger, which trigers the dragging
    };

    //funtcion to handel drag ,which is stop ,when user stop dragging
    const dragStop = () => {
      setIsDragging(false); // set false 
      carousel.classList.remove("dragging"); // remove dragging class
    };

    //auto scroll 
    const autoScroll = () => {
      clearInterval(timeout);  // when auto scrol run 1s initial it clear the interval beacuse its not for speed up and slow up  
      //then its start with new timmer re -count seconds
      timeout = setInterval(() => {    
        carousel.scrollLeft += firstCardWidth;    // it scroll acourding to a card width 
      }, 2500);
    };

    // infinite scroll - handel after last cad come to scroll 
    const infiniteScroll = () => {
      //first is indaciting if causerl came in last of left side it will going to trigger and set to according to the given amount of cards widht
      if (carousel.scrollLeft === 0) {
        // it give 2 cards width means  , 2 times of width  
        carousel.scrollLeft = carousel.scrollWidth - (3 * carousel.offsetWidth);
        //else if:- it trigger when last card of right side when last card , when caursel ending a scroll in last point 
        // which  trigger  to startig from first card , it take carousel width
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollLeft = firstCardWidth;
      }
    };

    const firstCardWidth = carousel.querySelector(".testi-card").offsetWidth;  // takes first card means a single card width

    autoScroll();  // initial start auto scroll

    carousel.addEventListener("mousedown", dragStart); // trigger dragStart
    carousel.addEventListener("mousemove", dragging);  // ....... draggin func
    document.addEventListener("mouseup", dragStop);//..... dragStop
    carousel.addEventListener('scroll', infiniteScroll);//...... infiniteScroll
    wrapper.addEventListener('mouseenter', () => clearInterval(timeout));   // it clearsInterval(timeout)
    wrapper.addEventListener('mouseleave', autoScroll); // trigger auto scroll

    return () => {
      clearInterval(timeout);
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener('scroll', infiniteScroll);
      wrapper.removeEventListener('mouseenter', () => clearInterval(timeout));
      wrapper.removeEventListener('mouseleave', autoScroll);
    }; 
  }, [isDragging, startX, startScrollLeft]);
   
  // handel buttons of left and right slide 
  const handleSlide = (direction) => {
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".testi-card").offsetWidth;
    carousel.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth +200;
  };
  return (
    <>
      <div id="Whyme">
        <div className="typography">
          <h1 className="typo-Title">Why Me?</h1>
        </div>
        <div id="Skill" className="Skills">
          <div className="skill title">
            <div className="typography">
              <h1 className="typo-Title">Skills</h1>
            </div>
          </div>
          <div className="card-flex">
            <div className="skill-card">
              <WhymeCard width={"100%"} height={"100%"}>
                <Typography className="skill-icon-div">
                  <HtmlRoundedIcon />
                </Typography>
              </WhymeCard>
            </div>
            <div className="skill-card">
              <WhymeCard width={"100%"} height={"100%"}>
                <Typography className="skill-icon-div">
                  <CssRoundedIcon />
                </Typography>
              </WhymeCard>
            </div>
            <div className="skill-card">
              <WhymeCard width={"100%"} height={"100%"}>
                <Typography className="skill-icon-div">
                  <JavascriptRoundedIcon />
                </Typography>
              </WhymeCard>
            </div>
          </div>
        </div>
        <div id="Testimonial" className="Testimonial">
          <div className="typography">
            <h1 className="typo-Title">Testimonial</h1>
          </div>
          <div className="Testimonial-wrapper">
            <i id="left" className="slide-btn btn1" onClick={() => handleSlide("left")}>
              <KeyboardArrowLeftRoundedIcon
                sx={{ width: "60px", height: "60px" }}
              />
            </i>
            <ul className="carousel">
            {clients.map((client, index) => (
              <li className="testi-card" key={index}>
                <WhymeCard width={"100%"} height={"100%"}>
                  <div className="client-typo">
                    <div className="clients">
                      <div className="card-img">
                        <CardMedia className="test-card-img" component="img" image={client.imageSrc} alt="clientPic" />
                      </div>
                      <Typography className="client-name" variant="subtitle1" fontWeight={"bold"} component={"p"}>
                        {client.clientName}
                      </Typography>         
                    </div>
                 
                    <Typography className="client-msg" varient="caption" component={"p"}>
                      {client.clientMessage}
                    </Typography>
                  </div>
                </WhymeCard>
              </li>
            ))}
            </ul>
            <i id="right" className="slide-btn btn2" onClick={() => handleSlide("right")}>
              <KeyboardArrowRightRoundedIcon
                sx={{ width: "60px", height: "60px" }}
              />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};
