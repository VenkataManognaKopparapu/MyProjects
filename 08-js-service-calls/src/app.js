import { 
    checkSession, 
    fetchLogin as loginService,
    logout as logoutService,
    getWord,
    updateWord,
  } from './services';
  import state, { 
    login,
    logout,
    setWord,
    setError,
  } from './state';
  import { render } from './view';
  
  checkSession()
    .then(({ username }) => {
      login(username);
      return getWord();
    })
    .then(({ storedWord }) => {
      setWord(storedWord);
      render();
    })
    .catch(() => {
      render();
    });
  
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('login-form')) {
      const username = e.target.elements.username.value.trim();
      if(!username) {
        setError('required-username');
        render();
        return;
      }
      const validUsernameRegex = /^[A-Za-z0-9_]+$/;
      if(!validUsernameRegex.test(username)) {
      setError('invalid-username');
      render();
      return;
     }
      loginService(username)
        .then(({ username }) => {
          login(username);
          return getWord();
        })
        .then(({ storedWord }) => {
          setWord(storedWord);
          render();
        })
        .catch(err => {
          setError(err.error);
          render();
        });
    }
  
    if(e.target.classList.contains('word-form')) {
      const word = e.target.elements.word.value;
      updateWord(word)
        .then(({ storedWord }) => {
          setWord(storedWord);
          render();
        })
        .catch(err => {
          setError(err.error);
          render();
        });
    }
  });
  
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('logout')) {
      logoutService()
        .then(() => {
          logout();
          render();
        })
        .catch(err => {
          setError(err.error);
          render();
        });
    }
  });