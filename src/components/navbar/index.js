const NavBar = () => {
  console.log(window.innerWidth)
  return (
    <div className="text-5xl bg-black h-16 text-white mx-auto px-8 py-2">
      <div className="flex justify-between">
        <div className="font-sans text-4xl font-bold">
          tzy.
        </div>
        <div className="flex items-center space-x-4 mobile:hidden">
          <a
            href="/"
            className="text-2xl tablet:text-xl"
          >
            About
          </a>
          <a
            href="/"
            className="text-2xl tablet:text-xl"
          >
            Projects
          </a>
          <a
            href="/"
            className="text-2xl tablet:text-xl"
          >
            Education
          </a>
          <a
            href="/"
            className="text-2xl tablet:text-xl"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
};

export default NavBar;