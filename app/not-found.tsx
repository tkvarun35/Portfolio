import Image from "next/image";
import SVG from "@/public/404.svg";

export default function NotFound() {
  return (
    <>
      <div className="h-full w-screen bg-white flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn&apos;t find this page.{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <a href="/">
              {" "}
              <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
                Back to homepage
              </button>
            </a>
          </div>
          <div className="max-w-lg">
            <Image src={SVG} alt="404Svg" />
          </div>
        </div>
      </div>
    </>
  );
}
