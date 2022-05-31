import { HashLink } from "react-router-hash-link";

const MobileMenu = (props) => {
  return (
    <div className="flex-col space-y-4">
      <div className="text-center">
        <HashLink smooth to='/#about' className="text-4xl" onClick={props.func}>
          About
        </HashLink>
      </div>
      <div className="text-center">
        <HashLink smooth to='/#projects' className="text-4xl" onClick={props.func}>
          Projects
        </HashLink>
      </div>
      <div className="text-center">
        <HashLink smooth to='/#education' className="text-4xl" onClick={props.func}>
          Education
        </HashLink>
      </div>
      <div className="text-center">
        <HashLink smooth to='/#contactMe' className="text-4xl" onClick={props.func}>
          Contact Me
        </HashLink>
      </div>
    </div>
  );
}

export default MobileMenu;