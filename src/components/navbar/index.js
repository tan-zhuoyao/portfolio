const NavBar = () => {
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
    </div>
  );
}

export default NavBar;