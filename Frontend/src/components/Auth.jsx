import React, { useState, useEffect } from 'react';
import { login } from '../services/authService';

const Auth = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    createStars();
    injectStyles();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ username, password });
      setMessage(data.message || 'Autentificare reușită');
      onLoginSuccess(); // notifică App că loginul a reușit
    } catch (err) {
      setMessage(err.message || 'Eroare la autentificare');
    }
  };

  const createStars = () => {
    const stars = document.getElementById('stars');
    if (!stars) return;
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const size = Math.random() * 3;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = Math.random() * 0.8 + 0.2;
      star.style.animation = `twinkle ${Math.random() * 3 + 1}s infinite alternate`;
      stars.appendChild(star);
    }
  };

  const injectStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
      }

      body, html, #root {
        height: 100%;
      }

      .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, #331566, #6b36a7);
        z-index: -1;
        overflow: hidden;
      }

      .stars, .mountains, .trees {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .star {
        position: absolute;
        background-color: white;
        border-radius: 50%;
      }

      .mountains {
        bottom: 0;
        height: 40%;
      }

      .mountain {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60%;
        background: linear-gradient(to top, #38184d, #5b2a8b);
        clip-path: polygon(0% 100%,5% 80%,10% 90%,15% 70%,20% 85%,25% 70%,30% 95%,35% 75%,40% 90%,45% 80%,50% 60%,55% 80%,60% 70%,65% 90%,70% 85%,75% 95%,80% 70%,85% 80%,90% 60%,95% 70%,100% 90%,100% 100%);
      }

      .mountain:nth-child(2) {
        height: 30%;
        opacity: 0.8;
        background: linear-gradient(to top, #2d1240, #4a2575);
        clip-path: polygon(0% 100%,10% 80%,20% 95%,30% 75%,40% 90%,50% 80%,60% 95%,70% 70%,80% 85%,90% 75%,100% 90%,100% 100%);
      }

      .trees {
        bottom: 0;
        height: 20%;
      }

      .tree {
        background-color: #1c0e2a;
        clip-path: polygon(0% 100%,5% 95%,8% 85%,10% 95%,12% 80%,15% 90%,18% 75%,20% 85%,22% 95%,25% 80%,28% 90%,30% 75%,32% 85%,35% 95%,38% 80%,40% 90%,42% 75%,45% 85%,48% 95%,50% 80%,52% 90%,55% 75%,58% 85%,60% 95%,62% 80%,65% 90%,68% 75%,70% 85%,72% 95%,75% 80%,78% 90%,80% 75%,82% 85%,85% 95%,88% 80%,90% 90%,92% 75%,95% 85%,98% 95%,100% 100%);
      }

      .login-container {
        background: rgba(106, 54, 167, 0.3);
        backdrop-filter: blur(8px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 40px;
        width: 400px;
        max-width: 90%;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10;
        text-align: center;
        position: relative;
        margin: auto;
        margin-top: 5%;
      }

      .login-title {
        font-size: 2.5rem;
        color: white;
        margin-bottom: 30px;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      }

      .input-group {
        position: relative;
        margin-bottom: 25px;
      }

      .input-field {
        width: 100%;
        padding: 15px 20px;
        border-radius: 50px;
        border: none;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 16px;
        outline: none;
        transition: all 0.3s ease;
      }

      .input-field::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      .icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        font-size: 20px;
      }

      .login-btn {
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 50px;
        background-color: white;
        color: #6a36a7;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: 20px;
      }

      .login-btn:hover {
        background-color: #f0f0f0;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      @keyframes twinkle {
        0% { opacity: 0.2; }
        100% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  };

  return (
    <div>
      {/* Background elements */}
      <div className="background">
        <div className="stars" id="stars"></div>
        <div className="mountains">
          <div className="mountain"></div>
          <div className="mountain"></div>
        </div>
        <div className="trees">
          <div className="tree"></div>
        </div>
      </div>

      {/* Login form */}
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span className="icon">👤</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="icon">🔒</span>
          </div>
          <button type="submit" className="login-btn">Login</button>
          {message && <p style={{ color: 'white' }}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Auth;