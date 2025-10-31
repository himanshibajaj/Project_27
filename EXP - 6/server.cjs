// server.js
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;
const SECRET_KEY = 'himanshi_secret_key'; // JWT secret key

app.use(cors());
app.use(bodyParser.json());

// Sample users (no MongoDB needed)
const users = [
  { username: 'himanshi', password: '12345', role: 'student' },
  { username: 'admin', password: 'admin123', role: 'admin' }
];

// Register route
app.post('/api/register', (req, res) => {
  const { username, password, role } = req.body;

  const userExists = users.find(u => u.username === username);
  if (userExists) return res.status(400).json({ message: 'User already exists!' });

  users.push({ username, password, role });
  res.json({ message: 'Registration successful!' });
});

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  // Generate JWT token
  const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ message: 'Login successful!', token });
});

// Protected route example
app.get('/api/dashboard', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(403).json({ message: 'Token missing!' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token!' });
    res.json({ message: `Welcome ${user.username}! You are logged in as ${user.role}.` });
  });
});

app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));

app.get('/', (req, res) => {
  res.send("JWT Authentication Backend Running Successfully!");
});
// To run this server, use the following commands:
//npm init -y
//npm install express cors jsonwebtoken body-parser
//cinspect - network - login button - respone - jwt token