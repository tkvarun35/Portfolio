import { Button } from "@/components/ui/button";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGitlab } from "react-icons/bi";

function LinkBar() {
  const Links = {
    Github: {
      id: 1,
      name: "Github",
      logo: "BsGithub",
      link: "https://github.com/tkvarun35/",
    },
    Linkedin: {
      id: 2,
      name: "LinkedIn",
      logo: "BsLinkedin",
      link: "https://www.linkedin.com/in/varun-kumar-tiwari-246981204/",
    },
    Twitter: {
      id: 3,
      name: "Twitter",
      logo: "FaSquareXTwitter",
      link: "https://twitter.com/iamvarunkt",
    },
    Gitlab: {
      id: 4,
      name: "Gitlab",
      logo: "BiLogoGitlab",
      link: "https://gitlab.com/tkvarun35",
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
        <Button className="bg-slate-700   ">
          <BsGithub className="mr-2 h-4 w-4" /> {Links["Github"].name}
        </Button>
      </a>
      <a
        href={Links["Linkedin"].link}
        target="_blank"
        key={Links["Linkedin"].id}
        className="flex justify-center"
      >
        <Button className="bg-slate-700">
          <BsLinkedin className="mr-2 h-4 w-4" /> {Links["Linkedin"].name}
        </Button>
      </a>
      <a
        href={Links["Twitter"].link}
        target="_blank"
        key={Links["Twitter"].id}
        className="flex justify-center"
      >
        <Button className="bg-slate-700">
          <FaSquareXTwitter className="mr-2 h-4 w-4" /> {Links["Twitter"].name}
        </Button>
      </a>
      <a
        href={Links["Gitlab"].link}
        target="_blank"
        key={Links["Gitlab"].id}
        className="flex justify-center"
      >
        <Button className="bg-slate-700">
          <BiLogoGitlab className="mr-2 h-4 w-4" /> {Links["Gitlab"].name}
        </Button>
      </a>
    </div>
  );
}

export default LinkBar;
