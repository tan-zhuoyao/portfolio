import Photo from "../../assets/passport_photo.png"

const About = () => {
  return (
    <div id="about" className="bg-black text-white font-sans flex-col">
      <div className="h-16"></div>
      <div className="pl-10 sticky top-16 bg-black text-6xl font-bold">
        ABOUT
      </div>
      <div className="flex tablet:flex-col">
        <div className="w-1/2 tablet:w-screen p-20 tablet:pb-0">
          <img className="w-3/4 m-auto mt-auto mb-auto" src={Photo} alt="" />
        </div>
        <div className="w-1/2 grid place-content-center tablet:w-screen">
          <div className="text-2xl font-medium p-20">
            I am a final-year Computer Science major at the National University of Singapore, with a minor in statistics.
            My area of interests are FinTech, Blockchain Technology, Machine Learning and Data Science. Besides college,
            I also run a tutoring business on the side where I conduct Math classes for students aged between 7 to 18.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;