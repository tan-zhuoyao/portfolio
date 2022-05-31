import ReactRevealText from 'react-reveal-text/lib/ReactRevealText';
import { useState, useEffect } from 'react';
import './welcome.css';

const Welcome = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    setShowName(true);
  }, [showName]);

  return (
    <div className="h-full text-white">
      <div className="welcome h-full bg-no-repeat bg-cover" >
        <div className="h-16"></div>
        <div className="font-sans text-6xl font-bold text-black ml-10 mt-10 mobile:ml-8 mobile:mt-10 mobile:text-4xl">
          Hello World,
        </div>
        <div className="font-sans text-6xl font-bold text-black ml-10 mobile:ml-8 mobile:text-4xl">
          my name is
        </div>
        <div className="font-sans text-8xl font-extrabold text-black ml-10 mt-2 mobile:ml-8 mobile:mt-1 mobile:text-5xl">
          <ReactRevealText show={showName}>Zhuo Yao</ReactRevealText>
        </div>
      </div>
    </div >
  );
}

export default Welcome;