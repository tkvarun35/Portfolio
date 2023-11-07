import data from "@/Details.json";
function Footer() {
  return (
    <div>
      <hr className=" border-gray-200  dark:border-gray-700 " />
      <span className=" flex justify-center my-3  text-gray-500 text-center dark:text-gray-400 ">
        © 2023&nbsp;
        <a href="/" className="hover:underline ">
          {data.name}™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
