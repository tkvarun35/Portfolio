import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import data from "@/Details.json";

function Resume() {
  return (
    <Dialog>
      <DialogTrigger className="hover:underline hover:text-red-950 dark:hover:text-red-200">
        Resume
      </DialogTrigger>
      <DialogContent>
        <iframe
          src={data.resumeLink}
          style={{ border: 0 }}
          className="w-full md:h-[45rem] h-[30rem]"
        />
      </DialogContent>
    </Dialog>
  );
}

export default Resume;
