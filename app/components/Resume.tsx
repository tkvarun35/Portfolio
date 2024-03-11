"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import data from "@/Details.json";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

function Resume() {
  const resumeCollectionRef = collection(db, "Resume");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      const q = query(resumeCollectionRef, where("status", "==", "active"));
      const data = await getDocs(q);

      // @ts-ignore
      setUrl(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0].url);
    };
    getProjects();
  }, []);
  return (
    <Dialog>
      <DialogTrigger className="md:hover:underline md:hover:text-red-950 md:dark:hover:text-red-200">
        Resume
      </DialogTrigger>
      <DialogContent>
        <iframe
          src={url || data.resumeLink}
          style={{ border: 0 }}
          className="w-full md:h-[45rem] h-[30rem]"
        />
      </DialogContent>
    </Dialog>
  );
}

export default Resume;
