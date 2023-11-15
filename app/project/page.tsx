"use client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase_app from "@/firebase/config";
import { useRouter } from "next/navigation";
import AddProject from "./AddProject";

function Project() {
  const router = useRouter();
  const auth = getAuth(firebase_app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log("user is logged in", user);

      // ...
    } else {
      // User is signed out
      // ...
      console.log("No user logged in");
      router.push("/login");
    }
  });

  return <AddProject />;
}

export default Project;
