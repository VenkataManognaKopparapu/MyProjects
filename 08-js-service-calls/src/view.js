import state from './state';

const MESSAGES = {
  'network-error': 'There was a problem connecting to the network, please try again',
  'auth-missing': 'Your session has expired, please login again',
  'required-username': 'Please enter a valid username',
  'auth-insufficient': 'Invalid username, please enter valid username',
  'invalid-username': 'Username can only contain letters, numbers, and underscores',
  default: 'Something went wrong, please try again',
};

function render() {
  const app = document.querySelector('#app');
  if(!state.username) {
    app.innerHTML = renderLogin();
    return;
  }
  app.innerHTML = renderWord();
}

function renderLogin() {
  return `
    <div class="login">
      <form class="login-form">
        <label>Username: <input name="username"></label> 
        <button type="submit">Login</button>
      </form>
      ${state.error ? `<div class="error">${MESSAGES[state.error] || MESSAGES.default}</div>` : ''}
    </div>
  `;
}

function renderWord() {
  return `
    <div class="word-panel">
      <p class="welcome-message">Welcome <span class="username-highlight">${state.username}</span></p>
      <div class="word-display">Current word: ${state.word}</div>
      <form class="word-form">
        <input name="word" 
        placeholder="Enter new word">
        <button type="submit">Update Word</button>
      </form>
      <button class="logout">Logout</button>
      ${state.error ? `<div class="error">${MESSAGES[state.error] || MESSAGES.default}</div>` : ''}
    </div>
  `;
}

export { render };