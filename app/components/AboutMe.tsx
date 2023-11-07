import Image from "next/image";
import { edu_tas, satisfya } from "../fonts/fonts";
import data from "@/Details.json";

function AboutMe() {
  const leetcodeUsername = data.leetCodeUsername;
  const githubUsername = data.githubUsername;
  return (
    <div id="about" className="m-10 pb-10  ">
      <div className="p-10 flex justify-center space-y-0 ">
        <div className={edu_tas.className}>
          <p className="text-3xl font-bold "> About Me</p>
        </div>
      </div>
      <div className="max-w-3xl flex justify-center text-center m-auto">
        <p className="">
          Hello, I'm {data.name}, a passionate computer science enthusiast based
          in India, currently pursuing my Bachelor's degree in Computer Science
          from AKTU University.
        </p>
      </div>
      <div className="pb-4">
        <div className="px-10 pt-10 pb-5 flex justify-center md:justify-normal space-y-0 ">
          <div className={satisfya.className}>
            <p className="text-2xl font-semibold px-72"> Technical Expertise</p>
          </div>
        </div>
        <div className="max-w-3xl flex justify-center  mx-auto">
          <p className="">
            With a strong foundation in frontend technologies such as ReactJS,
            NextJS, AngularJS, JavaScript, HTML, CSS, Tailwind, Django, Docker,
            Bash Scripting, Expect Scripting, JavaScript, PHP and TypeScript, I
            have honed my expertise in web development.
          </p>
        </div>
      </div>
      <div className="pb-4">
        <div className="px-10 pt-10 pb-5 flex justify-center md:justify-normal space-y-0 ">
          <div className={satisfya.className}>
            <p className="text-2xl font-semibold px-72">
              Professional Experience
            </p>
          </div>
        </div>
        <div className="max-w-3xl flex justify-center text-start m-auto">
          <p className="">
            <b> Frontend and Backend Developer | Team ERP@KIET</b>
            <br />
            I actively contributed to the development of our college's in-house
            ERP system, managing various modules like Marks Monitoring System
            and Hostel Management.
            <br />
            <br />
            <b> Internship Highlights</b>
            <br /> During my internship, I utilized ReactJS to create impactful
            projects, including a Spotify-inspired music player and a fully
            functional Exam Portal designed for remote exams during the Covid-19
            pandemic.
          </p>
        </div>
      </div>
      <div className="pb-4">
        <div className="px-10 pt-10 pb-5 flex justify-center md:justify-normal space-y-0 ">
          <div className={satisfya.className}>
            <p className="text-2xl font-semibold px-72"> Soft Skills</p>
          </div>
        </div>
        <div className="max-w-3xl flex  mx-auto">
          <p className="">
            In addition to technical skills, I possess strong soft skills,
            including effective communication, teamwork, creativity, and
            leadership. These skills have allowed me to actively contribute to
            extracurricular activities and enhance user experiences.
          </p>
        </div>
      </div>

      <div className="pb-4">
        <div className="px-10 pt-10 pb-5 flex justify-center md:justify-normal space-y-0 ">
          <div className={satisfya.className}>
            <p className="text-2xl font-semibold px-72"> Achievements</p>
          </div>
        </div>
        <div className="max-w-3xl flex justify-center  mx-auto">
          <span className="ps-2">
            <ul className="list-disc">
              <li>
                Enhanced the user interface and functionality of
                Innotech.kiet.edu, our college's technical festival website.
              </li>
              <li>
                Currently serving as the Management Head in Team ERP, leading
                student-led development initiatives.
              </li>
            </ul>
          </span>
        </div>
      </div>

      <div className="pb-4">
        <div className="px-10 pt-10 pb-5 flex justify-center md:justify-normal space-y-0 ">
          <div className={satisfya.className}>
            <p className="text-2xl font-semibold px-72"> My LeetCode Stats</p>
          </div>
        </div>
        <div className="max-w-3xl flex justify-center  mx-auto">
          <span className="ps-2">
            <Image
              src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?ext=heatmap`}
              alt="Leetcode Stats"
              width={0}
              height={0}
              className="rounded-2xl"
              style={{ width: "100%", height: "auto" }}
            />
          </span>
        </div>
      </div>
      <div className="pb-4">
        <div className="px-10 pt-10 pb-5 flex justify-center md:justify-normal space-y-0 ">
          <div className={satisfya.className}>
            <p className="text-2xl font-semibold px-72"> My Github Stats</p>
          </div>
        </div>
        <div className="max-w-3xl flex justify-center  mx-auto">
          <span className="space-y-2 md:flex md:space-x-10">
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=catppuccin_latte`}
              alt="Github Stats"
              width={0}
              height={0}
              className="rounded-2xl"
              style={{ width: "50%", height: "auto" }}
            />
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact`}
              alt="Github Lang Stats"
              width={0}
              height={0}
              style={{ width: "50%", height: "auto" }}
              className="rounded-2xl"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
