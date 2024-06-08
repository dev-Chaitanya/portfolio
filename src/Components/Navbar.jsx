import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Profile } from "./Profile";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const pages = ["HOME", "ABOUT", "WORK", "Skill" ,"Testimonial","Contact" ,];
const target = ["#Home", "#About", "#Work", "#Skill","#Testimonial","#Contact"];
export const Navbar = () => {
  const [isDisplay, setisDesplay] = useState({ currentDispaly: false });
  function handelMenu() {
    if (isDisplay.currentDispaly === false) {
      setisDesplay({ currentDispaly: true });
    } else {
      setisDesplay({ currentDispaly: false });
    }
  }
  return (
    <>
      <div className="NavBar">
        <Profile
          className="profile"
          width={"80px"}
          height={"80px"}
          src={"profile.jpg"}
        />
        <nav className={`Nav`}>
          <Button
            onClick={handelMenu}
            className={`Menu`}
            variant=""
            sx={{ backgroundColor: "none" }}
          >
            <MenuIcon sx={{ color: "#fffcf2" }} />
          </Button>
          <ul
            className={`NavList-box ${
              isDisplay.currentDispaly ? "MenuClose" : ""
            }`}
          >
            {pages.map((page, index) => {
              return (
                <List key={page}>
                  <ListItem>
                    <ListItemButton
                      className="nav-list"
                      component="a"
                      href={target[index]}
                    >
                      <ListItemText
                        primary={page}
                        primaryTypographyProps={{
                          fontSize: 20,
                          fontWeight: "bold",
                          letterSpacing: 0,
                          fontFamily: "'Bespoke Stencil', sans-serif",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
