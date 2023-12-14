"use client";
import { TypeAnimation } from "react-type-animation";
import data from "@/Details.json";

function AnimationText() {
  return (
    <>
      <TypeAnimation
        sequence={data.dashBoardText}
        wrapper="span"
        speed={20}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </>
  );
}

export default AnimationText;
