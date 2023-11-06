import Dashboard from "../components/Dashboard";
import GithubCalender from "../components/GithubCalender";
import LinkBar from "../components/LinkBar";
import MyProjects from "../components/MyProjects";

function Portfolio() {
  return (
    <div className="flex-col space-y-10">
      <Dashboard />
      <GithubCalender />
      <LinkBar />
      <MyProjects />
    </div>
  );
}

export default Portfolio;
