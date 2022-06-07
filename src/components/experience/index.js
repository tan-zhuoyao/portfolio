import './experience.css';
import { JPMC, UNC, NUS, Switcheo } from '../../assets';

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
              <div className='flex'>
                <img className="h-20 w-20 m-auto ml-0 mr-2" src={JPMC} alt=""></img>
                <div>
                  <div className='text-3xl font-medium mobile:text-2xl'>
                    JPMorgan Chase & Co.
                  </div>
                  <div className='text-xl font-medium mobile:text-lg'>Summer Analyst (Software Engineering)</div>
                  <div className='text-xl font-medium mobile:text-lg'> June 2022 - Present</div>
                </div>
              </div>
              <ul className="list-disc ml-6 mt-2">
                <li>Corporate & Investment Banking Division</li>
                <li>Regulatory Reporting</li>
              </ul>

            </div>

            <div id="content">
              <div className='flex'>
                <img className="h-20 w-20 m-auto ml-0 mr-2" src={UNC} alt=""></img>
                <div>
                  <div className='text-3xl font-medium mobile:text-2xl'>
                    University of North Carolina Chapel Hill
                  </div>
                  <div className='text-xl font-medium mobile:text-lg'>Exchange Student</div>
                  <div className='text-xl font-medium mobile:text-lg'>Jan 2022 - May 2022 (Spring '22)</div>
                </div>
              </div>
              <ul className="list-disc ml-6 mt-2">
                <li>Relevant Coursework taken:</li>
                <li className='ml-9'>COMP550: Algorithms & Analysis (A)</li>
                <li className='ml-9'>COMP562: Theory of Machine Learning (A)</li>
                <li className='ml-9'>STOR565: Machine Learning (A)</li>
                <li>Achieved GPA: 4.0/4.0</li>
              </ul>
            </div>

            <div id="content">
              <div className='flex'>
                <img className="h-20 w-20 m-auto ml-0 mr-2" src={Switcheo} alt=""></img>
                <div>
                  <div className='text-3xl font-medium mobile:text-2xl'>
                    Switcheo Labs
                  </div>
                  <div className='text-xl font-medium mobile:text-lg'>Software Engineering Intern</div>
                  <div className='text-xl font-medium mobile:text-lg'>June 2021 - Dec 2021</div>
                </div>
              </div>
              <ul className="list-disc ml-6 mt-2">
                <li>Designed and implemented the persistence of off-chain trade and ordering data into various databases to reduce SQL calls and enhance speed.</li>
                <li>Migrated and restructured Switcheo Tradehub's blockchain codebase to support the Cosmos Stargate upgrade, to optimise for cross-chain interoperability.</li>
                <li>Conceptualised the development and deployment of Scilla Smart Contracts onto Zilliqa blockchain to facilitate minting and trading of 10,000 Non-Fungible Tokens (NFT). Tested thoroughly and prevented potential contract exploits. The contract handled $2.1 million in transactions over a span of 3 days.</li>
              </ul>
            </div>

            <div id="content">
              <div className='flex'>
                <img className="h-20 w-20 m-auto ml-0 mr-2" src={NUS} alt=""></img>
                <div>
                  <div className='text-3xl font-medium mobile:text-2xl'>
                    National University of Singapore
                  </div>
                  <div className='text-xl font-medium mobile:text-lg'>Student</div>
                  <div className='text-xl font-medium mobile:text-lg'>May 2019 - Present (Expected Graduation: May 2023)</div>
                </div>
              </div>
              <ul className="list-disc ml-6 mt-2">
                <li>Computer Science major with a minor in Statistics</li>
                <li>Expecting to graduate with First Class Honors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Experience;