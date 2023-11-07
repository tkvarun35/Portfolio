"use client";
import { TypeAnimation } from "react-type-animation";
import data from "@/Details.json";

function AnimationText() {
  return (
    <>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          data.dashBoardText[0],
          1000,
          data.dashBoardText[1],
          1000,
        ]}
        wrapper="span"
        speed={20}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </>
  );
}

export default AnimationText;
