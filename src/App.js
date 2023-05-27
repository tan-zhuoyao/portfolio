import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from './components/frontpage';
import NavBar from './components/navbar';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  },[]);

  const [isDarkEnabled, setIsDarkEnabled] = useState(true);

  return (
    <div className="relative">
      <Router>
        <NavBar isDarkEnabled={isDarkEnabled} setIsDarkEnabled={setIsDarkEnabled}/>
        <Routes>
          <Route exact path='/portfolio' element={<FrontPage isDarkEnabled={isDarkEnabled}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
