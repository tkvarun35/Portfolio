import React from "react";
import { caveat } from "../fonts/fonts";
import AnimationText from "./AnimationText";
import GithubCalender from "./GithubCalender";

function Dashboard() {
  return (
    <div className="flex justify-center p-5 pb-14">
      <div className={caveat.className}>
        <div className="text-xl md:text-4xl flex flex-col  gap-1 py-2">
          <p className="flex justify-center">Hi!</p>
          <p className="flex justify-center">My name is Varun Tiwari..</p>
        </div>
        <p className="text-sm md:text-4xl ">
          <AnimationText />
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
