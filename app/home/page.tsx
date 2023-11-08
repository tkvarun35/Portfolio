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
      <MyProjects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default Portfolio;
