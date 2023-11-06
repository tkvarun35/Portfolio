"use client";
import GitHubCalendar from "react-github-calendar";
import { edu_tas } from "../fonts/fonts";

function GithubCalender() {
  return (
    <div className={edu_tas.className}>
      <div className=" space-y-10">
        <p className="flex justify-center text-2xl">
          My Github Contributions ⭐️
        </p>
        <div className="flex justify-center">
          <GitHubCalendar username="tkvarun35" colorScheme="light" />
        </div>
      </div>
    </div>
  );
}

export default GithubCalender;
