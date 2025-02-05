export const fetchSession = async () => {
    const response = await fetch('/api/session');
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch session');
    }
    return response.json();
  };
  
  export const login = async (username) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to login');
    }
    return response.json();
  };
  
  export const logout = async () => {
    const response = await fetch('/api/logout', { method: 'POST' });
    if (!response.ok) {
      throw new Error('Failed to logout');
    }
  };
  
  export const setStoredWord = async (word) => {
    const response = await fetch('/api/stored-word', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update word');
    }
  };
  