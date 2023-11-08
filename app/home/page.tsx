import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Dashboard from "../components/Dashboard";
import GithubCalender from "../components/GithubCalender";
import LinkBar from "../components/LinkBar";
import MyProjects from "../components/MyProjects";

function Portfolio() {
  return (
    <div className="flex-col space-y-10 overflow-hidden ">
      <Dashboard />
      <GithubCalender />
      <LinkBar />
      <br />
      <br />
      <br />
      <hr className="h-px w-10/12 my-8 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
      <MyProjects />
      <hr className="h-px w-10/12 my-8 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
      <AboutMe />
      <hr className="h-px w-10/12 my-8 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
      <ContactMe />
    </div>
  );
}

export default Portfolio;
