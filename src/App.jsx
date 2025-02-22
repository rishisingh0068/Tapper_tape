import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Portfolio from './Components/PortfolioPage/Portfolio';
import DigitalGold from './Components/GoldPage/GoldPage';
import ScreenerPage from './Components/ScreenerPage/ScreenerPage';
import CreditPage from './Components/CreditPage/CreditPage';
import SignInPage from './Components/SignInPage/signInPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">

        <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/GoldPage" element={<DigitalGold />} />
          <Route path="/ScreenerPage" element={<ScreenerPage />} />
          <Route path="/CreditPage" element={<CreditPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
