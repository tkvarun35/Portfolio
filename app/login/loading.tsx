"use client";
import { BounceLoader } from "react-spinners";
function loader() {
  return (
    <div className="flex justify-center w-screen h-screen">
      <BounceLoader
        color="#36d7b7"
        className="w-screen h-full m-auto absolute"
      />
    </div>
  );
}

export default loader;
