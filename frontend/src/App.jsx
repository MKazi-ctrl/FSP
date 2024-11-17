import { useState, useEffect } from 'react'
import './App.css'
import React from 'react';
import ProfilePage from './components/ProfilePage.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DashboardPage from './components/DashBoardPage.jsx';
import LoyaltyPointsPage from './components/LoyaltyPointsPage.jsx';
import SupportTicketsPage from './components/SupportTicketsPage.jsx';


function App() {

  const [data, setData] = useState([])

  useEffect(() => {

    async function fetchData() {

      console.log(import.meta.env.VITE_API_URL)

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}posts`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Profile</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/loyalty">Loyalty Points</Link>
          <Link to="/support">Support Tickets</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/loyalty" element={<LoyaltyPointsPage />} />
          <Route path="/support" element={<SupportTicketsPage />} />
        </Routes>
      </div>
    </Router>


  )


}

export default App
