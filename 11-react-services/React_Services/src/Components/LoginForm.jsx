import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Username cannot be empty.');
      return;
    }
    try {
      setLoading(true);
      await onLogin(username.trim());
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            setError('');
            setUsername(e.target.value);
          }}
          className="login-input"
        />
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default LoginForm;
