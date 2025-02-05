import { useState } from 'react';
import compareWords from './compareWords';
import './Game.css';

function Game({ username, onLogout }) {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const secretWord = 'RECAT';

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) {
      setMessage(`${guess} was not a valid word`);
    } else if (guess.toUpperCase() === secretWord) {
      setMessage(`${guess} is the secret word!`);
    } else {
      const commonLetters = compareWords(guess.toUpperCase(), secretWord);
      setMessage(`${guess} had ${commonLetters} letters in common`);
    }
    setGuess('');
  };

  return (
    <div className="game">
      <p>Welcome, {username}!</p>
      <form onSubmit={handleGuessSubmit}>
        <label>
          Enter a 5-letter word:
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
        </label>
        <button type="submit">Submit Guess</button>
      </form>
      <button className="logout-button" onClick={onLogout}>Logout</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Game;
