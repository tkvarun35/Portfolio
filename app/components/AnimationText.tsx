"use client";
import { TypeAnimation } from "react-type-animation";

function AnimationText() {
  return (
    <>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Your idea, my code – a perfect match.",
          1000,
          "And yes I also hate spaghetti.",
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
