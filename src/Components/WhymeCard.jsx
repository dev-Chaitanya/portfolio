import React from "react";
import "./Whyme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
export const WhymeCard = (props) => {
  return (
    <>
      <Card className="whyCard" sx={{ width: `${props.width}`, height: `${props.height}` }}>
        <CardContent className="card-content">{props.children}</CardContent>
      </Card>
    </>
  );
};
