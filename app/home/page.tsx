import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Dashboard from "../components/Dashboard";
import GithubCalender from "../components/GithubCalender";
import LinkBar from "../components/LinkBar";
import MyProjects from "../components/MyProjects";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <div className="flex-col space-y-10">
      <Dashboard />
      <GithubCalender />
      <LinkBar />
      <MyProjects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Portfolio;
