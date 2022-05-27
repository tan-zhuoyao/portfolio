const NavBar = () => {
  const showMenu = () => {
    console.log("clicked");
  };

  return (
    <div class="text-5xl bg-black h-16 text-white mx-auto px-8 py-2 fixed top-0 z-50 w-screen flex justify-between">
      <div class="font-sans text-4xl font-bold">
        tzy.
      </div>
      <div class="flex items-center space-x-4 mobile:hidden">
        <a
          href="/"
          class="text-2xl tablet:text-xl"
        >
          About
        </a>
        <a
          href="/"
          class="text-2xl tablet:text-xl"
        >
          Projects
        </a>
        <a
          href="/"
          class="text-2xl tablet:text-xl"
        >
          Education
        </a>
        <a
          href="/"
          class="text-2xl tablet:text-xl"
        >
          Contact Me
        </a>
      </div>
      <div class="hidden mobile:flex">
        <button class="outline-none mobile-menu-button" onClick={showMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  );
}

export default NavBar;