import { HashLink } from "react-router-hash-link";

const MobileMenu = (props) => {
  return (
    <div className="h-screen bg-black text-white mx-auto px-8 py-2 fixed top-0 z-50 w-screen">
      <div className="h-16 bg-black flex flex-row-reverse px-4">
        <button className="outline-none mobile-menu-button" onClick={props.toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-6 h-6" fill="white" stroke="white">
            <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z" />
          </svg>
        </button>
      </div>
      <div className="flex-col space-y-4">
        <div className="text-center">
          <HashLink smooth to='/portfolio/#' className="text-4xl" onClick={props.toggleMenu}>
            Home
          </HashLink>
        </div>
        <div className="text-center">
          <HashLink smooth to='/portfolio/#about' className="text-4xl" onClick={props.toggleMenu}>
            About
          </HashLink>
        </div>
        <div className="text-center">
          <HashLink smooth to='/portfolio/#experience' className="text-4xl" onClick={props.toggleMenu}>
            Experience
          </HashLink>
        </div>
        <div className="text-center">
          <HashLink smooth to='/portfolio/#projects' className="text-4xl" onClick={props.toggleMenu}>
            Projects
          </HashLink>
        </div>
        <div className="text-center">
          <HashLink smooth to='/portfolio/#contactMe' className="text-4xl" onClick={props.toggleMenu}>
            Contact Me
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;