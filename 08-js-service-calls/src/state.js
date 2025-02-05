const state = {
    username: '',
    word: '',
    error: '',
  };
  
  export function login(username) {
    state.username = username;
    state.error = '';
  }
  
  export function logout() {
    state.username = '';
    state.word = '';
    state.error = '';
  }
  
  export function setWord(word) {
    state.word = word;
  }
  
  export function setError(error) {
    state.error = error;
  }
  
  export default state;