import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(true);

    const handleLogin = () => {
        if (username && password) {
            setLoggedIn(true);
        } else {
            alert('Vui lòng điền tên đăng nhập và mật khẩu.');
        }
    };

    return (
        <div id='App'>
            {
                isLoggedIn ? (
                    <Header />
                ) : (<div className='App'>
                    <h2 className='textCenter'>Đăng nhập</h2>
                    <form className="login-form">
                        <div className="form-group">
                            <label>Tên đăng nhập:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="button" onClick={handleLogin}>Đăng nhập</button>
                    </form>
                </div>
                )
            }
        </div>
    )
}

export default App;
