"use client";
import GitHubCalendar from "react-github-calendar";
import { edu_tas } from "../fonts/fonts";
import data from "@/Details.json";
import { cloneElement } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useTheme } from "next-themes";

function GithubCalender() {
  const { resolvedTheme } = useTheme();
  return (
    <div className={edu_tas.className}>
      <div className=" space-y-10">
        <p className="flex justify-center text-2xl">
          My Github Contributions ⭐️
        </p>
        <div className="flex justify-center">
          <GitHubCalendar
            username={data.githubUsername}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            showWeekdayLabels={true}
            theme={{
              light: ["#f0f0f0", "#87e2bf", "#4b8583", "#f73859", "#384259"],
              dark: [
                "hsl(0, 0%, 22%)",
                "#69578b",
                "#7DB9B6",
                "#F5E9CF",
                "#E96479",
              ],
            }}
            renderBlock={(block, activity) =>
              cloneElement(block, {
                "data-tooltip-id": "react-tooltip",
                "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
              })
            }
          />
          <ReactTooltip id="react-tooltip" />
        </div>
      </div>
    </div>
  );
}

export default GithubCalender;
