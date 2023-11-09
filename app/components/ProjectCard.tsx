import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BiLinkExternal } from "react-icons/bi";
import { FaCode } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { HiExternalLink } from "react-icons/hi";

// import img from "/";

interface ProjectCardProps {
  id?: string | number;
  projectName?: string;
  smallDescrpition?: string;
  description?: string;
  deployedLink?: string;
  codeLink?: string;
  imageLink?: string;
}

const useTruncatedElement = ({ ref }: { ref: any }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isReadingMore, setIsReadingMore] = useState(false);

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {};

    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, [ref]);

  return {
    isTruncated,
    isReadingMore,
    setIsReadingMore,
  };
};
function ProjectCard(project: ProjectCardProps) {
  const ref = useRef<any>(null);
  const { isTruncated, isReadingMore, setIsReadingMore } = useTruncatedElement({
    ref,
  });
  return (
    <div className="flex  justify-center p-3 md:w-4/12 ">
      <Card className="flex flex-col rounded-xl dark:border-[0.1px]">
        {project.imageLink && (
          <Link
            href={project.deployedLink || project.codeLink || ""}
            target="_blank"
            className="m-1 relative group"
          >
            <Image
              src={project.imageLink}
              alt="Image"
              className=" object-fill  w-full h-36  rounded hover:blur-[1.5px]"
              width={500}
              height={100}
              quality={75}
              priority={true}
            />
            <HiExternalLink className=" absolute top-0 right-0 z-10  hidden group-hover:block text-3xl text-slate-800 bg-slate-300	rounded p-1" />
          </Link>
        )}
        <CardHeader>
          <CardTitle>{project.projectName}</CardTitle>
          <CardDescription>{project.smallDescrpition}</CardDescription>
        </CardHeader>
        <CardContent>
          <p
            ref={ref}
            className={`break-words text-sm ${
              !isReadingMore && "line-clamp-4"
            }`}
          >
            {project.description}
          </p>
          {isTruncated && !isReadingMore && (
            <button
              onClick={() => setIsReadingMore(true)}
              className="underline mt-1 bg-slate-100 rounded-md dark:bg-[#121212] dark:text-cyan-100"
            >
              Read more
            </button>
          )}
          {isTruncated && isReadingMore && (
            <button
              onClick={() => setIsReadingMore(false)}
              className="underline mt-1  bg-slate-100 rounded-md dark:bg-[#121212] dark:text-cyan-100"
            >
              Read less
            </button>
          )}
        </CardContent>
        <CardFooter className=" relative mt-auto flex flex-wrap  justify-center">
          {project.deployedLink && (
            <Link href={project.deployedLink} target="_blank" className="m-1 ">
              <Button className="bg-green-600 dark:bg-teal-600 dark:hover:bg-teal-700 hover:bg-green-700 w-40 rounded-xl">
                <BiLinkExternal className="m-1" />
                Visit Project
              </Button>
            </Link>
          )}
          {project.codeLink && (
            <Link href={project.codeLink} target="_blank" className="m-1 ">
              <Button className="w-40 rounded-xl">
                <FaCode className="m-1" />
                Visit Code
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProjectCard;
