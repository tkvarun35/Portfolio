import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/giphy.gif";
import { edu_tas, exo_2 } from "../fonts/fonts";
import data from "@/Details.json";

function Navbar() {
  const NavOptions = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About Me",
      scrollTo: "/#about",
    },
    {
      id: 3,
      name: "Contact Me",
      scrollTo: "/#contact",
    },
  ];

  return (
    <nav className="bg-white dark:bg-[#121212] border-gray-200 w-full sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center md:justify-between  mx-auto p-4">
        <Link
          href="/"
          className="hover:underline hover:text-red-950 cursor-default"
        >
          <Image
            src={Logo}
            alt=""
            width={70}
            height={70}
            className="rounded-3xl"
          />
        </Link>

        <div className={exo_2.className}>
          <div
            className="hidden w-full  md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-[#121212] dark:text-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-black">
              {NavOptions.map((item) => (
                <Link
                  key={item.id}
                  href={item.link || item.scrollTo || ""}
                  className="hover:underline hover:text-red-950 dark:hover:text-red-200"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <div
            className={`${edu_tas.className} md:hidden pl-1  flex justify-items-center text-xl`}
          >
            {data.nickName && (
              <Link href="/">
                <h1>{data.nickName}</h1>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
