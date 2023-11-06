import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/giphy.gif";
import { exo_2 } from "../fonts/fonts";

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
      link: "/about",
    },
    {
      id: 3,
      name: "Contact Me",
      link: "/contact",
    },
  ];

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image
          src={Logo}
          alt=""
          width={70}
          height={70}
          className="rounded-3xl"
        />
        <div className={exo_2.className}>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-black">
              {NavOptions.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="hover:underline hover:text-red-950"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
