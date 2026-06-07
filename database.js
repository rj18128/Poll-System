const Database = require('better-sqlite3');

const db = new Database('ecovote.db');

function init() {
  db.prepare(`
    CREATE TABLE IF NOT EXISTS elections (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();

  db.prepare(`
    CREATE TABLE IF NOT EXISTS candidates (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      electionId INTEGER,
      name TEXT NOT NULL,
      party TEXT
    )
  `).run();

  db.prepare(`
    CREATE TABLE IF NOT EXISTS votes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      electionId INTEGER,
      candidateId INTEGER,
      voterToken TEXT
    )
  `).run();
}

module.exports = { init, db };