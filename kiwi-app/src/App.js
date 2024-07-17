//-------------------------------------------------------------------------
// All rights reserved by @GomGomNoDevelopers. 
//-------------------------------------------------------------------------

import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import kiwiIcon from './assets/images/kiwi.png'; // Import a smaller icon-sized image

function App() {
    // Initially set isLoggedIn to false
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <div className="header-content">
                    <img src={kiwiIcon} alt="Kiwi Icon" className="header-image" />
                    <h1 className="header-title">Kiwi Finance Management App</h1>
                </div>
            </header>
            <main className="App-main">
                {isLoggedIn ? (
                    <Dashboard />
                ) : (
                    <Login onLogin={() => setIsLoggedIn(true)} />
                )}
            </main>
            <footer className="App-footer">
                {'@GomGomNoDevelopers'}
            </footer>
        </div>
    );
}

export default App;
