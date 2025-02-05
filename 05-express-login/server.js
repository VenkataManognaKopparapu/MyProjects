const express = require('express');
const cookieParser = require('cookie-parser');
const sessionManager = require('./session');
const pages = require('./pages');
const app = express();
const PORT = 3000;

const users = {}; 

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('./public'));

app.get('/', (req, res) => {
  const sid = req.cookies.sid;
  const session = sessionManager.getSession(sid);
  if (session) {
    const username = session.username;
    const storedWord = users[username] || '';  
    res.send(pages.generateDataPage(username, storedWord)); 
  } else {
    res.send(pages.generateLoginPage()); 
  }
});

app.post('/login', (req, res) => {
  const username = req.body.username?.trim(); 

  
  if (!username) {
    const errorMessage = 'invalid username';
    return res.status(400).send(pages.generateErrorPage(errorMessage, 400));
  }

 
  if (!username.match(/^[a-zA-Z0-9]+$/)) {
    const errorMessage = 'invalid username.';
    return res.status(400).send(pages.generateErrorPage(errorMessage, 400));
  }

  
  if (username === 'dog') {
    const errorMessage = 'user not allowed';
    return res.status(403).send(pages.generateErrorPage(errorMessage, 403));
  }

  
  const sid = sessionManager.createSession(username);
 
  if (!users[username]) {
    users[username] = ''; 
  }
  res.cookie('sid', sid); 
  res.redirect('/'); 
});

app.post('/logout', (req, res) => {
  const sid = req.cookies.sid;
  sessionManager.deleteSession(sid); 
  res.clearCookie('sid'); 
  res.redirect('/'); 
});

app.post('/update', (req, res) => {
  const sid = req.cookies.sid;
  const session = sessionManager.getSession(sid); 
  if (session) {
    const username = session.username;
    const newWord = req.body.word;  
    
   
    users[username] = newWord; 
  }
  res.redirect('/'); 
});
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
