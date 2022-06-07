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
        <MobileMenu toggleMenu={toggleMenu} /> :
        <div className="text-5xl bg-black h-16 text-white mx-auto px-8 py-2 fixed top-0 z-50 w-screen flex justify-between">
          <HashLink smooth to='/portfolio/#' className="font-sans text-4xl font-bold">
            tzy.
          </HashLink>
          <div className="flex items-center space-x-4 mobile:hidden">
            <HashLink smooth to='/portfolio/#about' className="text-2xl tablet:text-xl">
              About
            </HashLink>
            <HashLink smooth to='/portfolio/#experience' className="text-2xl tablet:text-xl">
              Experience
            </HashLink>
            <HashLink smooth to='/portfolio/#projects' className="text-2xl tablet:text-xl">
              Projects
            </HashLink>
            <HashLink smooth to='/portfolio/#education' className="text-2xl tablet:text-xl">
              Education
            </HashLink>
            <HashLink smooth to='/portfolio/#contactMe' className="text-2xl tablet:text-xl">
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