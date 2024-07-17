//-------------------------------------------------------------------------
// All rights reserved by @GomGomNoDevelopers.
//-------------------------------------------------------------------------

import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Hardcoded credentials for testing
    const validUsername = 'admin';
    const validPassword = 'password';

    const handleLogin = (event) => {
        event.preventDefault();
        
        if (username === validUsername && password === validPassword) {
            onLogin(); 
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">

            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <div className="form-control">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
