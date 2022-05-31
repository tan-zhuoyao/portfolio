import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from './components/frontpage';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="relative">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<FrontPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
