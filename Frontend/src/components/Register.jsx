import React, { useState, useEffect } from 'react';
import { register } from '../services/registerService';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'STUDENT',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    createStars();
    injectStyle();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await register(formData);
      console.log('Register successful:', data);
      setMessage('Înregistrare reușită!');
    } catch (err) {
      setError(err.message);
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

  const injectStyle = () => {
    const style = document.createElement('style');
    style.textContent = `
      body, html, #root {
        height: 100%;
        margin: 0;
      }

      .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: linear-gradient(to bottom, #331566, #6b36a7);
        overflow: hidden;
      }

      .stars {
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
        position: absolute;
        bottom: 0;
        width: 100%;
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
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 20%;
      }

      .tree {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: #1c0e2a;
        clip-path: polygon(0% 100%,5% 95%,8% 85%,10% 95%,12% 80%,15% 90%,18% 75%,20% 85%,22% 95%,25% 80%,28% 90%,30% 75%,32% 85%,35% 95%,38% 80%,40% 90%,42% 75%,45% 85%,48% 95%,50% 80%,52% 90%,55% 75%,58% 85%,60% 95%,62% 80%,65% 90%,68% 75%,70% 85%,72% 95%,75% 80%,78% 90%,80% 75%,82% 85%,85% 95%,88% 80%,90% 90%,92% 75%,95% 85%,98% 95%,100% 100%);
      }

      .register-container {
        background: rgba(106, 54, 167, 0.3);
        backdrop-filter: blur(8px);
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 50px 40px;
        width: 420px;
        max-width: 90%;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        z-index: 10;
        text-align: center;
        margin: auto;
        margin-top: 5%;
        color: white;
        position: relative;
      }

      .register-container h2 {
        font-size: 2.2rem;
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

      .radio-group {
        text-align: left;
        margin-bottom: 20px;
        font-size: 15px;
      }

      .radio-group label {
        margin-right: 20px;
      }

      .register-btn {
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
      }

      .register-btn:hover {
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
      {/* Fundal animat */}
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

      {/* Formular */}
      <div className="register-container">
        <h2>Înregistrare</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              name="username"
              placeholder="Nume utilizator"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <span className="icon">👤</span>
          </div>
          <div className="input-group">
            <input
              type="email"
              className="input-field"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="icon">📧</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              className="input-field"
              name="password"
              placeholder="Parolă"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="icon">🔒</span>
          </div>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="role"
                value="STUDENT"
                checked={formData.role === 'STUDENT'}
                onChange={handleChange}
              /> Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="TEACHER"
                checked={formData.role === 'TEACHER'}
                onChange={handleChange}
              /> Profesor
            </label>
          </div>
          <button type="submit" className="register-btn">Înregistrare</button>
        </form>
        {message && <p style={{ color: 'lightgreen' }}>{message}</p>}
        {error && <p style={{ color: 'lightcoral' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Register;