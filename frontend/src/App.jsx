import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';

import Navbar from './components/NavBar.jsx';
import ProfilePage from './components/ProfilePage.jsx';  // Corrected path
import DashboardPage from './components/DashBoardPage.jsx';
import LoyaltyPointsPage from './components/LoyaltyPointsPage.jsx';
import SupportTicketsPage from './components/SupportTicketsPage.jsx';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL);

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}posts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (

    <Router>

      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/loyalty" element={<LoyaltyPointsPage />} />
            <Route path="/support" element={<SupportTicketsPage />} />
            {/* Add more routes if necessary */}
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
