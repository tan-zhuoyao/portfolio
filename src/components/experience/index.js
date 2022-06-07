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
              <ul className="list-disc ml-3 mt-2">
                <li>Corporate & Investment Banking Division</li>
                <li>Regulatory Reporting</li>
              </ul>
            </div>

            <div id="content">
              <div className='text-3xl font-medium'>University of North Carolina Chapel Hill</div>
              <div className='text-xl font-medium'>Exchange Student</div>
              <div className='text-xl font-medium'> Jan 2022 - May 2022 (Spring '22)</div>
              <ul className="list-disc ml-3 mt-2">
                <li>Relevant Coursework taken:</li>
                <li className='ml-6'>COMP550</li>
                <li className='ml-6'>COMP562</li>
                <li className='ml-6'>STOR565</li>
                <li>Achieved GPA: 4.0/4.0</li>
              </ul>
            </div>

            <div id="content">
              <div className='text-3xl font-medium'>Switcheo Labs</div>
              <div className='text-xl font-medium'>Software Engineering Intern</div>
              <div className='text-xl font-medium'> June 2021 - Dec 2021</div>
              <ul className="list-disc ml-3 mt-2">
                <li>Designed and implemented the persistence of off-chain trade and ordering data into various databases to reduce SQL calls and enhance speed.</li>
                <li>Migrated and restructured Switcheo Tradehub's blockchain codebase to support the Cosmos Stargate upgrade, to optimise for cross-chain interoperability.</li>
                <li>Conceptualised the development and deployment of Scilla Smart Contracts onto Zilliqa blockchain to facilitate minting and trading of 10,000 Non-Fungible Tokens (NFT). Tested thoroughly and prevented potential contract exploits. The contract handled $2.1 million in transactions over a span of 3 days.</li>
              </ul>
            </div>

            <div id="content">
              <div className='text-3xl font-medium'>National University of Singapore</div>
              <div className='text-xl font-medium'>Student</div>
              <div className='text-xl font-medium'> May 2019 - Present (Expected Graduation: May 2023)</div>
              <ul className="list-disc ml-3 mt-2">
                <li>Computer Science major with a minor in Statistics</li>
                <li>Expecting to graduate with First Class Honors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;