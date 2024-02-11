import { Button } from "@/components/ui/button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGitlab } from "react-icons/bi";
import data from "@/Details.json";
import Link from "next/link";
import Resume from "./Resume";
import { SiGoogledocs } from "react-icons/si";

function LinkBar() {
  const Links = {
    Github: {
      id: 1,
      name: "Github",
      logo: "BsGithub",
      link: data.githubLink,
    },
    Linkedin: {
      id: 2,
      name: "LinkedIn",
      logo: "BsLinkedin",
      link: data.linkedInLink,
    },
    Twitter: {
      id: 3,
      name: "Twitter",
      logo: "FaSquareXTwitter",
      link: data.twitterLink,
    },
    Gitlab: {
      id: 4,
      name: "Gitlab",
      logo: "BiLogoGitlab",
      link: data.gitlabLink,
    },
  };
  return (
    <>
      <div className="space-y-4 md:space-y-0 md:space-x-5 pt-10 flex flex-col md:flex-row justify-center">
        <div className="flex justify-center">
          <div className="flex justify-center md:hidden rounded-xl bg-[#334155] w-32 h-10 p-1 dark:hover:bg-slate-800 text-white">
            {/* <div className="w-32 h-10 rounded-xl bg-[#334155]  text-center "> */}
            <SiGoogledocs className="m-2 " /> <Resume />
            {/* </div> */}
          </div>
        </div>
        {Links["Github"].link && (
          <div className="flex justify-center">
            <Link
              href={Links["Github"].link}
              target="_blank"
              key={Links["Github"].id}
              className=" w-min"
            >
              <Button className="w-32 rounded-xl dark:hover:bg-slate-800">
                <BsGithub className="mr-2 h-4 w-4" /> {Links["Github"].name}
              </Button>
            </Link>
          </div>
        )}
        {Links["Linkedin"].link && (
          <div className="flex justify-center">
            <Link
              href={Links["Linkedin"].link}
              target="_blank"
              key={Links["Linkedin"].id}
              className="w-min"
            >
              <Button className="w-32 rounded-xl dark:hover:bg-slate-800">
                <BsLinkedin className="mr-2 h-4 w-4" /> {Links["Linkedin"].name}
              </Button>
            </Link>
          </div>
        )}

        {Links["Twitter"].link && (
          <div className="flex justify-center">
            <Link
              href={Links["Twitter"].link}
              target="_blank"
              key={Links["Twitter"].id}
              className="w-min"
            >
              <Button className="w-32 rounded-xl dark:hover:bg-slate-800">
                <FaSquareXTwitter className="mr-2 h-4 w-4" />{" "}
                {Links["Twitter"].name}
              </Button>
            </Link>
          </div>
        )}

        {Links["Gitlab"].link && (
          <div className="flex justify-center">
            <Link
              href={Links["Gitlab"].link}
              target="_blank"
              key={Links["Gitlab"].id}
              className="w-min"
            >
              <Button className="w-32 rounded-xl dark:hover:bg-slate-800">
                <BiLogoGitlab className="mr-2 h-4 w-4" /> {Links["Gitlab"].name}
              </Button>
            </Link>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <hr className="h-px w-10/12 my-8 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
}

export default LinkBar;
