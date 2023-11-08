import { Button } from "@/components/ui/button";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGitlab } from "react-icons/bi";
import data from "@/Details.json";

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
    <div className="space-y-4 md:space-y-0 md:space-x-5 pt-10 flex flex-col md:flex-row justify-center">
      <a
        href={Links["Github"].link}
        target="_blank"
        key={Links["Github"].id}
        className="flex justify-center"
      >
        <Button className="w-32 rounded-xl dark:hover:bg-slate-800">
          <BsGithub className="mr-2 h-4 w-4" /> {Links["Github"].name}
        </Button>
      </a>
      <a
        href={Links["Linkedin"].link}
        target="_blank"
        key={Links["Linkedin"].id}
        className="flex justify-center"
      >
        <Button className="w-32 rounded-xl dark:hover:bg-slate-800">
          <BsLinkedin className="mr-2 h-4 w-4" /> {Links["Linkedin"].name}
        </Button>
      </a>
      <a
        href={Links["Twitter"].link}
        target="_blank"
        key={Links["Twitter"].id}
        className="flex justify-center"
      >
        <Button className="w-32 rounded-xl dark:hover:bg-slate-800">
          <FaSquareXTwitter className="mr-2 h-4 w-4" /> {Links["Twitter"].name}
        </Button>
      </a>
      <a
        href={Links["Gitlab"].link}
        target="_blank"
        key={Links["Gitlab"].id}
        className="flex justify-center"
      >
        <Button className="w-32 rounded-xl dark:hover:bg-slate-800">
          <BiLogoGitlab className="mr-2 h-4 w-4" /> {Links["Gitlab"].name}
        </Button>
      </a>
    </div>
  );
}

export default LinkBar;
