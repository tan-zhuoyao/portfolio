import './experience.css';

const Experience = () => {
  return (
    <div id="experience" className="bg-black text-white font-sans flex-col">
      <div className="h-16"></div>
      <div className="pl-10 sticky top-16 bg-black text-5xl font-bold pb-2 z-10">
        EXPERIENCE
      </div>
      <div className="container">
        <div className="timeline">
          <div className="line"></div>
          <div id="section">
            <div id="bead"></div>
            <div id="content">
              <div className='text-3xl font-medium'>JPMorgan Chase & Co.</div>
              <div className='text-xl font-medium'>Summer Analyst (Software Engineering)</div>
              <div className='text-xl font-medium'> June 2022 - Present</div>
            </div>
            <div id="content">
              <div className='text-3xl font-medium'>University of North Carolina Chapel Hill</div>
              <div className='text-xl font-medium'>Exchange Student</div>
              <div className='text-xl font-medium'> Jan 2022 - May 2022 (Spring '22)</div>
            </div>
            <div id="content">
              <div className='text-3xl font-medium'>Switcheo Labs</div>
              <div className='text-xl font-medium'>Software Engineering Intern</div>
              <div className='text-xl font-medium'> June 2021 - Dec 2021</div>
            </div>
            <div id="content">
              <div className='text-3xl font-medium'>National University of Singapore</div>
              <div className='text-xl font-medium'>Student</div>
              <div className='text-xl font-medium'> May 2019 - Present (Expected Graduation: May 2023)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;