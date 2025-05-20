import React, { useEffect, useState } from 'react';
import { authorizedFetch } from '../services/api';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    authorizedFetch('http://localhost:8080/api/profile') // sau URL-ul tău real
      .then(data => {
        setProfile(data);
        // După ce datele sunt încărcate, redirecționează către pagina externă
        window.location.href = 'http://127.0.0.1:5500/index.html';
      })
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!profile) return <div>Se încarcă profilul...</div>;

  // Acest cod nu va mai fi afișat, pentru că se face redirect imediat
  return (
    <div>
      <h2>Profil utilizator</h2>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <p>Rol: {profile.role}</p>
    </div>
  );
};

export default Profile;	