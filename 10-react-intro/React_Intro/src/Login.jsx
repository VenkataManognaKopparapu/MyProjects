import { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [inputUsername, setInputUsername] = useState('');
  const [error, setError] = useState('');

  const validateUsername = (username) => {
    if (username.toLowerCase() === 'dog') { 
        return 'dog is not a valid user';
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return 'Username must contain only valid characters';
    }
    return ''; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateUsername(inputUsername);
    if (validationError) {
      setError(validationError);
      setInputUsername('');
    } else {
      setError('');
      onLogin(inputUsername.trim()); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="username">
        Username:
        <input
          id="username"
          type="text"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          className="username-input"/>
      </label>
      <button type="submit" className="login-button">
        Login
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default Login;
