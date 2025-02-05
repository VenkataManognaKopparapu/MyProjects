import React, { useState } from 'react';
import './WordManager.css';

function WordManager({ storedWord, onWordUpdate }) {
  const [newWord, setNewWord] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = () => {
    if (!newWord.trim()) {
      setError('Word cannot be empty.');
      return;
    }
    onWordUpdate(newWord.trim());
    setNewWord('');
    setError('');
  };

  return (
    <div className="word-manager">
      <h2>Your Stored Word: {storedWord || 'None'}</h2>
      <input
        value={newWord}
        onChange={(e) => {
          setError('');
          setNewWord(e.target.value);
        }}
        placeholder="Enter new word"
        className="input-field"
      />
      <button onClick={handleUpdate} className="update-button">
        Update Word
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default WordManager;
