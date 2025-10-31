// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app
const app = express();

// ✅ Enable CORS (so frontend can connect)
app.use(cors());

// ✅ Parse JSON data from frontend
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Temporary in-memory database (just for testing)
let users = [];

// ✅ Register Route
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Check if user already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists!' });
  }

  // Add user to array
  users.push({ username, email, password });
  console.log('✅ Registered Users:', users);

  return res.status(201).json({ message: 'Registration successful!' });
});

// ✅ Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password!' });
  }

  return res.status(200).json({ message: `Welcome ${user.username}! Login successful.` });
});

// ✅ Default route
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// ✅ Start server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
