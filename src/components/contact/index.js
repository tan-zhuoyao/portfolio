import LinkedIn from "../../assets/linkedin.png";
import Gmail from "../../assets/gmail.png";
import GithubWhite from "../../assets/github-mark-white.png";
import Github from "../../assets/github-mark.png";

const ContactMe = () => {
  console.log()
  return (
    <div id="contactMe" className="h-screen bg-white text-black dark:bg-black dark:text-white font-sans text-5xl font-bold">
      <div className="h-16"></div>
      <div className="ml-10 sticky top-16">
        CONTACT ME
      </div>
      <div className="content-center max-w-3xl text-2xl font-medium mx-auto mt-16 mobile:ml-12 mobile:mr-12 tablet:ml-12 tablet:mr-12">
        I am always open to new opportunities and expanding my professional network. If you have any job opportunities or would like to connect and collaborate on projects, please feel free to reach out to me.
        <br />
        <br />
        <div className="flex flex-row">
          <a href="https://www.linkedin.com/in/tan-zhuo-yao/" target="_blank" rel="noopener noreferrer" className="mr-5">
            <img src={LinkedIn} alt="linkedin" className="h-10 w-10 mt-1" />
          </a>
          <a href="https://github.com/tan-zhuoyao" target="_blank" rel="noopener noreferrer" className="mr-5">
            <img src={GithubWhite} alt="github" className="h-10 w-10 mt-1" />
          </a>
          <a href="mailto:tanzhuoyao@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={Gmail} alt="gmail" className="h-12 w-12" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;