import { useState } from 'react';
import Auth from './components/Auth';
import Profile from './components/Profile'; // componenta protejată
import Register from './components/Register';
import './App.css';

function App() {
  const [view, setView] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // funcție care schimbă starea când userul face login cu succes
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Aplicația de Login</h1>
      {!isLoggedIn && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: 20 }}>
  <button onClick={() => setView('login')}>Login</button>
  <button onClick={() => setView('register')}>Register</button>
</div>
      )}

      {isLoggedIn ? (
        <Profile />
      ) : view === 'login' ? (
        <Auth onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Register />
      )}
    </div>
  );
}

export default App;