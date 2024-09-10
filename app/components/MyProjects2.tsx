"use client"

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import ProjectCard from "./ProjectCard";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType} from 'embla-carousel';
import AutoPlay from "embla-carousel-autoplay"
import { db } from "@/firebase/config";
import { edu_tas } from "../fonts/fonts";



const options: EmblaOptionsType = {
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
}

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

function EnhancedProjectSlideshow() {
    const projectsCollectionRef = collection(db, "Project");
    //@ts-ignore
    const [projects, setProjects] = useState<[ProjectProps]>([]);

    useEffect(() => {

        const getProjects = async () => {
            const q = query(projectsCollectionRef, orderBy("priority"));
            const data = await getDocs(q);
            //@ts-ignore
            setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getProjects();
    }, []);


    const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoPlay({ delay: 5000 })])
    const [current, setCurrent] = useState(1)

    useEffect(() => {
        if (emblaApi) {
            const onSelect = () => {
                setCurrent(emblaApi.selectedScrollSnap() + 1)
            }
            emblaApi.on("select", onSelect)
            return () => {
                emblaApi.off("select", onSelect)
            }
        }
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
            <div className="p-10 flex justify-center space-y-0 " id="project">
                <div className={edu_tas.className}>
                    <p className="text-3xl font-bold "> My Projects</p>
                </div>
            </div>
            <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
                <div className="relative overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {projects.map((project, id) => {
                            return <ProjectCard key={id} {...project} />

                        })}
                    </div>
                </div>
                <button
                    onClick={scrollPrev}
                    className="absolute left-4 md:-left-10 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md  md:block"
                >
                    <FaAngleLeft className="w-6 h-6 " />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-4 md:-right-10 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md  md:block"
                >

                    <FaAngleRight className="w-6 h-6" />
                </button>

            </div>
            <hr className="h-px w-10/12 my-8 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
        </>

    )
}

export default EnhancedProjectSlideshow;