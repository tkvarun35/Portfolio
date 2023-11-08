"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import firebase_app, { getAuth } from "@/firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

export function InputForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user is logged in", user);
        router.push("/project");

        // ...
      }
    });
  }, []);

  const handleSubmit = () => {
    if (!email || !password) {
      toast.error("Please fill all the fields!");
      return;
    }
    const auth = getAuth;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "userData");
        toast.success("Successfully LoggedIn!");

        router.push("/project");
        // ...
      })
      .catch((error) => {
        console.log(error, "error");
        toast.error("Incorrect Credentials");
      });
  };

  return (
    <div className="space-y-3">
      <Toaster />
      <div className="w-full space-y-1">
        <p>Username:</p>
        <Input
          type="email"
          placeholder="Email"
          className="w-60 rounded-xl"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-1">
        <p>Password:</p>
        <Input
          type="password"
          placeholder="password"
          className="rounded-xl"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-center pt-5">
        <Button onClick={handleSubmit} className="rounded-xl">
          Submit
        </Button>
      </div>
    </div>
  );
}
