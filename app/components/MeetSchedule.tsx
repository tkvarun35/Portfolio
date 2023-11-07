import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CalScheduler from "./Cal";
import { SiGooglemeet } from "react-icons/si";

function MeetSchedule() {
  return (
    <Dialog>
      <DialogTrigger className="flex flex-row  ">
        <SiGooglemeet className="mx-2 my-1 " />
        Schedule a meet
      </DialogTrigger>
      <DialogContent className=" ">
        <CalScheduler />
      </DialogContent>
    </Dialog>
  );
}

export default MeetSchedule;
