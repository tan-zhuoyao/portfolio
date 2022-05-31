import Welcome from "../welcome";
import About from "../about";
import Projects from "../projects";
import Education from "../education";
import ContactMe from "../contact";

const FrontPage = () => {
  return (
    <div className="bg-black h-screen">
      <Welcome />
      <About />
      <Projects />
      <Education />
      <ContactMe />
    </div>
  );
}

export default FrontPage;