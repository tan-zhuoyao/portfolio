import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import MobileMenu from "../mobilemenu";

const NavBar = () => {
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div>
      {mobileMenu ?
        <div className="h-screen bg-black text-white mx-auto px-8 py-2 fixed top-0 z-50 w-screen">
          <div className="h-16 bg-black flex flex-row-reverse px-4">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-6 h-6" fill="white" stroke="white">
                <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z" />
              </svg>
            </button>
          </div>
          <MobileMenu func={toggleMenu} />
        </div> :
        <div className="text-5xl bg-black h-16 text-white mx-auto px-8 py-2 fixed top-0 z-50 w-screen flex justify-between">
          <HashLink smooth to='/#' className="font-sans text-4xl font-bold">
            tzy.
          </HashLink>
          <div className="flex items-center space-x-4 mobile:hidden">
            <HashLink smooth to='/#about' className="text-2xl tablet:text-xl">
              About
            </HashLink>
            <HashLink smooth to='/#projects' className="text-2xl tablet:text-xl">
              Projects
            </HashLink>
            <HashLink smooth to='/#education' className="text-2xl tablet:text-xl">
              Education
            </HashLink>
            <HashLink smooth to='/#contactMe' className="text-2xl tablet:text-xl">
              Contact Me
            </HashLink>
          </div>
          <div className="hidden mobile:flex">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      }
    </div>
  );
}

export default NavBar;