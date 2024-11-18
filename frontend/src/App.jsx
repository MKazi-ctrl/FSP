import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';

import ProfilePage from '/components/ProfilePage';  // Corrected path

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
        <div className="sidebar">
          <nav>
            <Link to="/" className="nav-link">Profile</Link>
            <Link to="/settings" className="nav-link">Settings</Link>
            {/* Add more links as needed */}
          </nav>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            {/* Add more routes if necessary */}
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
