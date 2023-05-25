const Projects = () => {
  return (
    <div id="projects" className="bg-black text-white font-sans text-5xl font-bold">
      <div className="h-16"></div>
      <div className="pl-10 sticky top-16 bg-black">
        PROJECTS
      </div>
      <div className="ml-10 mt-10 mr-10 p-10 pr-40 mobile:pr-0 mobile:p-0">
        <div className="text-3xl font-semibold">
          The Bear Market Non-Fungible Token
        </div>
        <div className="text-xl">Aug 2021 - Nov 2021</div>
        <ul className="list-disc ml-6 mt-2 font-normal text-base">
          <li>Conceptualised and spearheaded the development and deployment of Scilla Smart Contracts onto Zilliqa blockchain to facilitate minting and trading of 10,000 Non-Fungible Tokens (NFT). Tested thoroughly and prevented potential contract exploits. The contract handled $2.1 million in transactions over a span of 3 days.</li>
          <li>Implemented a backend API server to handle NFT data and support GET and POST requests from frontend side.</li>
          <li>Collaborated with Product and Design professionals to implement a seamless web application for purchase and
            revealing of Non-Fungible Tokens (NFT)</li>
          <li>Web Application: <a className="text-cyan-500 underline hover:text-cyan-200" href="https://thebear.market">https://thebear.market</a></li>
          <li>NFT Smart Contract: <a className="text-cyan-500 underline hover:text-cyan-200" href="https://viewblock.io/zilliqa/address/zil167flx79fykulp57ykmh9gnf3curcnyux6dcj5e">here</a></li>
        </ul>
      </div>
      <div className="ml-10 mt-10 mr-10 p-10 pr-40 mobile:pr-0 mobile:p-0">
        <div className="text-3xl font-semibold">
          SWEe! Flashcard Application
        </div>
        <div className="text-xl">Aug 2020 - Nov 2020</div>
        <ul className="list-disc ml-6 mt-2 font-normal text-base">
          <li>Designed, implemented and released a GUI CLI flashcard application to aid students with learning</li>
          <li>Implemented filtering feature of flashcards to filter flashcards based on category, ratings, favourite status etc.</li>
          <li>Documented the software implementations in a User Guide and Developer guide</li>
        </ul>
      </div>
      <div className="ml-10 mt-10 mr-10 p-10 pr-40 mobile:pr-0 mobile:p-0">
        <div className="text-3xl font-semibold">
          SkyX
        </div>
        <div className="text-xl">May 2020 - Aug 2020</div>
        <ul className="list-disc ml-6 mt-2 font-normal text-base">
          <li>Developed a web scraper to scrape for flight prices to various destinations daily and store data onto Firebase.</li>
          <li>Implemented a charting system to chart flight prices similar to a stock chart, with additional data such as monthly
            high and low and, monthly average and all-time average price for further data analysis.</li>
          <li>Tech Stack: ReactJS, JavaScript, Selenium, Highcharts, Firebase</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;