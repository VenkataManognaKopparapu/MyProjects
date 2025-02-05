import express from 'express';
import cookieParser from 'cookie-parser';
import { randomUUID } from 'crypto';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('./dist'));

const sessions = {};
const storedWords = {};

app.use((req, res, next) => {
  const sid = req.cookies?.sid;
  if (sid && sessions[sid]) {
    req.user = sessions[sid];
  }
  next();
});

app.post('/api/login', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  if (username === 'dog') {
    return res.status(403).json({ error: 'Access denied for this user.' });
  }

  const sid = randomUUID();
  sessions[sid] = { username };
  storedWords[username] = storedWords[username] || '';

  res.cookie('sid', sid, { httpOnly: true });
  res.json({ username });
});

app.post('/api/logout', (req, res) => {
  const sid = req.cookies?.sid;
  if (sid) {
    delete sessions[sid];
    res.clearCookie('sid');
  }
  res.status(204).send();
});

app.get('/api/session', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'No active session' });
  }

  const { username } = req.user;
  const word = storedWords[username] || '';
  res.json({ username, word });
});

app.get('/api/stored-word', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  const { username } = req.user;
  const word = storedWords[username] || '';
  res.json({ word });
});

app.post('/api/stored-word', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  const { username } = req.user;
  const { word } = req.body;

  if (!word) {
    return res.status(400).json({ error: 'Stored word cannot be empty' });
  }

  storedWords[username] = word;
  res.json({ success: true });
});

app.post('/api/clear-stored-word', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  const { username } = req.user;
  if (storedWords[username]) {
    storedWords[username] = '';
  }

  res.json({ success: true, message: 'Stored word cleared successfully.' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
