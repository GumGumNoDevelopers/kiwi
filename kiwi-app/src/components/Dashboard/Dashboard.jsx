//-------------------------------------------------------------------------
// All rights reserved by @GomGomNoDevelopers.
//-------------------------------------------------------------------------

import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const totalIncome = 5000;
    const totalExpenses = 3000;
    const remainingBudget = 2000;

    return (
        <div className="dashboard">
            <h2>Financial Overview</h2>

            <div className="summary">
                <div className="summary-item">
                    <h3>Total Income</h3>
                    <p>${totalIncome}</p>
                </div>
                <div className="summary-item">
                    <h3>Total Expenses</h3>
                    <p>${totalExpenses}</p>
                </div>
                <div className="summary-item">
                    <h3>Remaining Budget</h3>
                    <p>${remainingBudget}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
