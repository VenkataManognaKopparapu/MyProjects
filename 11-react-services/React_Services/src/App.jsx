import React, { useState, useEffect } from 'react';
import LoginForm from './Components/LoginForm';
import WordManager from './Components/WordManager';
import { login, logout, fetchSession, setStoredWord } from './Services/Services';

function App() {
  const [user, setUser] = useState(null);
  const [storedWord, setStoredWordState] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await fetchSession();
        if (session && session.username) {
          setUser(session.username);
          setStoredWordState(session.word || '');
        }
      } catch (err) {
        console.error('Error fetching session:', err.message);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (username) => {
    try {
      const data = await login(username);
      setUser(data.username);
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to login.');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setStoredWordState('');
    } catch (err) {
      setError('Failed to logout.');
    }
  };

  const handleWordUpdate = async (word) => {
    try {
      if (!word.trim()) {
        setError('Word cannot be empty.');
        return;
      }
      if (word === storedWord) {
        setError('New word must be different from the current word.');
        return;
      }
      await setStoredWord(word);
      setStoredWordState(word);
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to update word.');
    }
  };

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="app-container">
      {user ? (
        <div className="user-container">
          <h1 className="welcome-message">Welcome, {user}</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          <WordManager storedWord={storedWord} onWordUpdate={handleWordUpdate} />
          {error && <p className="error-message">{error}</p>}
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
