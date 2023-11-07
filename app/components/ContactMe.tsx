import { edu_tas } from "../fonts/fonts";

import ContactWays from "./ContactWays";

function ContactMe() {
  return (
    <div id="contact">
      <div className="p-10 flex justify-center space-y-0 ">
        <div className={edu_tas.className}>
          <p className="text-3xl font-bold "> Contact Me</p>
        </div>
      </div>
      <div className="max-w-3xl flex justify-center text-center m-auto">
        <p className="">Will Love To Hear From You 💖</p>
      </div>
      <div className="max-w-3xl flex justify-center m-auto mt-10">
        <ContactWays />
      </div>
    </div>
  );
}

export default ContactMe;
