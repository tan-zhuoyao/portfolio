import Welcome from "../welcome";
import About from "../about";
import Projects from "../projects";
import ContactMe from "../contact";
import Experience from "../experience";

const FrontPage = (props) => {
  return (
    <div className="bg-black h-screen">
      <Welcome />
      <About />
      <Experience />
      <Projects />
      <ContactMe isDarkEnabled={props.isDarkEnabled} />
    </div>
  );
}

export default FrontPage;