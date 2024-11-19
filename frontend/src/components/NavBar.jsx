import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import ProfileIcon from '../assets/profile.svg';
import DashboardIcon from '../assets/graph.svg';
import LoyaltyIcon from '../assets/medal-star.svg';
import SupportIcon from '../assets/messages.svg';
import SettingsIcon from '../assets/setting.svg';

const Navbar = () => {
    return (
        <div className="sidebar">
            <nav>
                <Link to="/" className="nav-link">
                    <img src={ProfileIcon} alt="Profile Icon" className="icon" />
                </Link>
                <Link to="/dashboard" className="nav-link">
                    <img src={DashboardIcon} alt="Dashboard Icon" className="icon" />
                </Link>
                <Link to="/loyalty" className="nav-link">
                    <img src={LoyaltyIcon} alt="Loyalty Points Icon" className="icon" />
                </Link>
                <Link to="/support" className="nav-link">
                    <img src={SupportIcon} alt="Support Tickets Icon" className="icon" />
                </Link>
                <Link to="/settings" className="nav-link">
                    <img src={SettingsIcon} alt="Settings Icon" className="icon" />
                </Link>
                {/* Add more links as needed */}
            </nav>
        </div>
    );
};

export default Navbar;