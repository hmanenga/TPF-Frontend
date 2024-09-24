require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory user storage
const users = new Map();

// Test route
app.get("/api", (req, res) => {
  res.json({ text: "my api!" });
});

// Protected route
app.get("/api/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, process.env.TOKEN_KEY, (err, data) => {
    if (err) {
      return res.sendStatus(403);
    }
    res.json({ text: "This is a protected route!", data });
  });
});

// Registration route
app.post("/api/users", (req, res) => {
  const { email, password } = req.body;

  // Debug log for received data
  console.log("Received email:", email);
  console.log("Received password:", password);

  // Check if user already exists
  if (users.has(email)) {
    return res.status(400).json({ error: "User already exists" });
  }

  // Create new user and add to in-memory storage
  const newUser = { email, password }; // In a real app, hash the password
  users.set(email, newUser);

  // Create token
  const token = jwt.sign({ email }, process.env.TOKEN_KEY);
  
  res.status(201).json({
    token,
    message: "User registered successfully",
  });
});

// Login route
app.post("/api/auth", (req, res) => {
  const { email, password } = req.body;

  // Simulate a login process
  const user = users.get(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, process.env.TOKEN_KEY);
  res.json({ token });
});

// Middleware to ensure token exists
function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ")[1];
    req.token = bearer;
    next();
  } else {
    res.sendStatus(403);
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
