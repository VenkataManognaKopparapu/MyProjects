const crypto = require('crypto');

const sessions = {};

function createSession(username) {
  const sid = crypto.randomUUID();
  sessions[sid] = { username };
  return sid;
}

function getSession(sid) {
  return sessions[sid];
}

function deleteSession(sid) {
  delete sessions[sid];
}

module.exports = { createSession, getSession, deleteSession };
