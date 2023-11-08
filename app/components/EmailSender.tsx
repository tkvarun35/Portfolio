"use client";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { LineWave } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import data from "@/Details.json";

export const EmailSender = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<Element>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "", //service_id
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "", //Template_ID
        form.current || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY //Public_Key
      )
      .then(
        (result) => {
          form.current?.reset();
          setIsLoading(false);
          toast.success("Email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-80">
      <Toaster />
      <form ref={form} onSubmit={sendEmail}>
        <input
          className="p-4 w-full m-2 bg-gray-100 rounded-xl border-0 outline-none dark:text-slate-800"
          placeholder="Your Name"
          name="from_name"
          type="text"
          disabled={isLoading}
          required
        />
        <input
          className="p-4 m-2 w-full border-0 bg-gray-100 rounded-xl outline-none dark:text-slate-800"
          placeholder="Your Email"
          name="reply_to"
          type="email"
          disabled={isLoading}
          required
        />
        <textarea
          className="p-4 m-2 w-full max-h-full border-0 bg-gray-100 rounded-xl outline-none mb-4 dark:text-slate-800"
          placeholder="What's on your mind"
          name="message"
          disabled={isLoading}
          required
        ></textarea>

        <div className="flex justify-center">
          <Button
            role="button"
            className="relative w-36 gradient-border m-1  cursor-pointer rounded-xl flex items-center justify-center bg-black hover:bg-black dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 hover:text-white  text-white disabled:cursor-not-allowed disabled:opacity-50 "
            type="submit"
            disabled={isLoading}
          >
            {" "}
            {isLoading ? (
              <div className="pb-2 ps-2 flex ">
                <LineWave
                  height="35"
                  width="50"
                  color="white"
                  ariaLabel="line-wave"
                />
              </div>
            ) : (
              "Send"
            )}
          </Button>
        </div>

        <input
          type="text"
          name="to_name"
          hidden
          defaultValue={data.name}
          readOnly
        />
      </form>
    </div>
  );
};
