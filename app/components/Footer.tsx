import data from "@/Details.json";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <hr className=" border-gray-200  dark:border-gray-700 " />
      <span className=" flex justify-center my-3  text-gray-500 text-center dark:text-gray-400 text-xs">
        © 2023&nbsp;
        <Link href="/" className="hover:underline ">
          {data.codeOwner}™
        </Link>
        . All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
