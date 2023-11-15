"use client";
import { useEffect, useState } from "react";
import { edu_tas } from "../fonts/fonts";
import ProjectCard from "./ProjectCard";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/config";

interface ProjectProps {
  id?: string | number;
  projectName?: string;
  smallDescrpition?: string;
  description?: string;
  deployedLink?: string;
  codeLink?: string;
  imageLink?: string;
  priority?: string | number;
}

function MyProjects() {
  const projectsCollectionRef = collection(db, "Project");
  const [projects, setProjects] = useState<[ProjectProps]>();

  useEffect(() => {
    // console.log(typeof projects, projects[0]);

    const getProjects = async () => {
      // const data = await getDocs(projectsCollectionRef);
      const q = query(projectsCollectionRef, orderBy("priority"));
      const data = await getDocs(q);

      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //@ts-ignore
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProjects();
  }, []);
  return (
    <>
      {projects ? (
        <>
          <div className="p-10 flex justify-center space-y-0 " id="project">
            <div className={edu_tas.className}>
              <p className="text-3xl font-bold "> My Projects</p>
            </div>
          </div>
          <div className="flex  md:justify-center pb-2 ">
            <div className="flex flex-col  flex-wrap justify-center  md:flex-row md:max-w-screen-xl md:space-x-2 ">
              {projects.map((project, id) => {
                return <ProjectCard key={id} {...project} />;
              })}
            </div>
          </div>
          <hr className="h-px w-10/12 my-8 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default MyProjects;
