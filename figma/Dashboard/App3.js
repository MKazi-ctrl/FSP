// App.js
import React from 'react';
import ProfileHeader from './ProfileHeader';
import ReturnLink from './ReturnLink';
import DashboardCards from './DashboardCards';
import SupportTicketSummary from './SupportTicketSummary';
import PurchaseHistory from './PurchaseHistory';
import './App.css';

function App() {
    return (
        <div className="app">
            <ProfileHeader />
            <ReturnLink />
            <DashboardCards />
            <SupportTicketSummary />
            <PurchaseHistory />
        </div>
    );
}

export default App;
