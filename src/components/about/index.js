const About = () => {
  return (
    <div id="about" className="bg-white dark:bg-black text-white font-sans flex-col">
      <div className="h-16"></div>
      <div className="pl-10 sticky top-16 text-black bg-white dark:bg-black dark:text-white text-5xl font-bold pb-2">
        ABOUT
      </div>
      <div className="flex tablet:flex-col">
        <div className="grid place-content-center tablet:w-screen">
          <div className="text-black dark:text-white text-2xl font-medium p-20">
            I am a Computer Science graduate from the National University of Singapore, with a minor in statistics.
            My area of interests are FinTech, Blockchain Technology, Machine Learning and Data Science.
            <br />
            <br />
            I am actively seeking a role as a software engineer to apply my technical skills and knowledge in these areas to develop innovative software solutions. 
            I am eager to contribute to a dynamic team and work on projects that involve cutting-edge technologies and have a positive impact on various industries. 
            Feel free to reach out to me for opportunities!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;