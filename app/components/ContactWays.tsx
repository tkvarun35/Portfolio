"use client";
import { EmailSender } from "./EmailSender";
import MeetSchedule from "./MeetSchedule";
import { AiFillMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { satisfya } from "../fonts/fonts";
import data from "@/Details.json";

function ContactWays() {
  const email = data.email;
  const mobileNo = data.mobileNo;
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:divide-x-2 space-x-10">
      <div className="m-2">
        <EmailSender />
      </div>

      <div className="flex flex-col pt-10 px-10 mb-10 space-y-5">
        <div className={satisfya.className}>
          <span className="text-2xl m-3">My Contact Details</span>
        </div>

        <a
          href={`https://wa.me/${mobileNo}`}
          target="_blank"
          className="text-blue-900 flex "
        >
          <BsWhatsapp className="align-middle my-1 mx-2" /> WhatsApp Me
        </a>
        <a href={`mailto:${email}`} className="text-cyan-600 flex ">
          <AiFillMail className="align-middle my-1 mx-2" /> {email}
        </a>
        <MeetSchedule />
      </div>
    </div>
  );
}

export default ContactWays;
