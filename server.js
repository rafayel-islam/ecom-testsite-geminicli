import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import fs from 'fs';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// --- Database Setup ---
const dbPath = './db.json';
let users = [];

// Load users from db.json or create it if it doesn't exist
try {
    if (fs.existsSync(dbPath)) {
        const dbData = fs.readFileSync(dbPath, 'utf-8');
        // Handle empty file case
        if (dbData) {
            users = JSON.parse(dbData).users;
        } else {
            fs.writeFileSync(dbPath, JSON.stringify({ users: [] }));
        }
    } else {
        fs.writeFileSync(dbPath, JSON.stringify({ users: [] }));
    }
} catch (error) {
    console.error("Error handling database file:", error);
    // If parsing fails, reset the db file
    fs.writeFileSync(dbPath, JSON.stringify({ users: [] }));
}


// Registration endpoint
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body; // Added name

  if (!name || !email || !password) { // Added name check
    return res.status(400).json({ message: 'Name, email, and password are required' });
  }

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = { name, email, password: hashedPassword }; // Added name
  users.push(newUser);

  // Save updated users array to db.json
  try {
      fs.writeFileSync(dbPath, JSON.stringify({ users }, null, 2));
      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error("Failed to save user:", error);
      return res.status(500).json({ message: 'Error registering user' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});