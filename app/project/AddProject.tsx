"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, db, getAuth } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

interface dataProps {
  projectName?: string;
  smallDescrpition?: string;
  description?: string;
  deployedLink?: string;
  codeLink?: string;
  imageLink?: string;
  priority?: string | number;
}

function AddProject() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<dataProps>({});
  const [imageFile, setImageFile] = useState<File>();
  const [imageUploaded, setImageUploaded] = useState<boolean>(true);
  const [disableAdd, setDisableAdd] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async () => {
    const uploadDoc = async () => {
      const dbRef = collection(db, "Project");
      addDoc(dbRef, data)
        .then((e) => {
          toast.success("Data Uploaded");
          setData({
            priority: "",
            codeLink: "",
            projectName: "",
            deployedLink: "",
            description: "",
            imageLink: "",
            smallDescrpition: "",
          });

          inputRef.current!.value = "";

          setImageUploaded(true);
        })
        .catch((e) => {
          toast.error("Upload Failed");
        });
    };
    if (
      data.projectName !== undefined &&
      data.smallDescrpition !== undefined &&
      data.priority != undefined &&
      data.projectName !== "" &&
      data.smallDescrpition !== "" &&
      data.priority != ""
    ) {
      uploadDoc();
    } else {
      toast.error("Fill required fields!");
    }
  };
  const uploadImage = async () => {
    console.log("upload initiated");

    if (imageFile) {
      const storageRef = ref(storage, `images/${imageFile?.name + uuidv4()}`);

      await uploadBytes(storageRef, imageFile as Blob).then((snapshot) => {
        getDownloadURL(storageRef)
          .then((url) => {
            // Insert url into an <img> tag to "download"

            setData({ ...data, imageLink: url });
            toast.success("Image Uploaded");
            setImageUploaded(true);
            setDisableAdd(false);
          })
          .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case "storage/object-not-found":
                // File doesn't exist
                break;
              case "storage/unauthorized":
                // User doesn't have permission to access the object
                break;
              case "storage/canceled":
                break;

              case "storage/unknown":
                break;
            }
          });
      });
    }
  };

  const handleSignOut = () => {
    const auth = getAuth;
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out");
        router.push("/login");
        toast.success("Logged Out");
      })
      .catch((error) => {
        // An error happened.
        console.log("error occurred", error);
        toast.error("Logout Failed");
      });
  };

  return (
    <div>
      <Toaster />
      <Button
        onClick={handleSignOut}
        className="bg-red-500 float-right m-3 rounded-xl dark:hover:bg-red-800"
      >
        Logout
      </Button>
      <p className="flex justify-center font-semibold text-2xl">
        Add Your Project
      </p>
      <div className="flex flex-col pt-5 space-y-10">
        <div className=" flex  justify-center space-x-2 ">
          <p className="">Priority:</p>
          <Input
            type="number"
            className="w-4/12 rounded-xl"
            value={data.priority || ""}
            onChange={(e) => {
              setData({ ...data, priority: e.target.value });
            }}
          />
        </div>
        <div className=" flex  justify-center space-x-2  ">
          <p className="">Enter Project Name:</p>
          <Input
            type="text"
            className="w-4/12 rounded-xl "
            value={data.projectName || ""}
            onChange={(e) => {
              setData({ ...data, projectName: e.target.value });
            }}
          />
        </div>
        <div className=" flex  justify-center space-x-2 ">
          <p className="">Enter Small description:</p>
          <textarea
            className="w-4/12 border-2  rounded-xl"
            value={data.smallDescrpition || ""}
            onChange={(e) => {
              setData({ ...data, smallDescrpition: e.target.value });
            }}
          />
        </div>
        <div className=" flex  justify-center space-x-2 ">
          <p className="">Enter Description:</p>
          <textarea
            className="w-4/12 border-2 rounded-xl "
            value={data.description || ""}
            onChange={(e) => {
              setData({ ...data, description: e.target.value });
            }}
          />
        </div>
        <div className=" flex  justify-center space-x-2 ">
          <p className="">Enter Deployed Link:</p>
          <Input
            type="url"
            className="w-4/12 rounded-xl"
            value={data.deployedLink || ""}
            onChange={(e) => {
              setData({ ...data, deployedLink: e.target.value });
            }}
          />
        </div>
        <div className=" flex  justify-center space-x-2 ">
          <p className="">Enter Code Link:</p>
          <Input
            type="url"
            className="w-4/12 rounded-xl"
            value={data.codeLink || ""}
            onChange={(e) => {
              setData({ ...data, codeLink: e.target.value });
            }}
          />
        </div>
        <div className=" flex  justify-center space-x-2 ">
          <p className="">Upload Image:</p>
          <Input
            type="file"
            className="w-4/12 rounded-xl "
            ref={inputRef}
            onChange={(e) => {
              if (!e.target.files) return;
              if (e.target.files.length === 0) {
                setDisableAdd(false);
                setImageUploaded(true);
                return;
              }
              setImageFile(e.target.files[0]);
              console.log(e.target.files);
              setImageUploaded(false);
              setDisableAdd(true);
            }}
            accept="image/*"
          />
          <Button
            onClick={uploadImage}
            disabled={imageUploaded}
            className="rounded-xl"
          >
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            className="rounded-xl m-3"
            disabled={disableAdd}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
