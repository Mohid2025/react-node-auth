const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// TEMP storage (for learning only)
const users = [];

/**
 * SIGNUP
 */
exports.signup = async (req, res) => {
     console.log("SIGNUP BODY:", req.body);

  const { username, email, password } = req.body;

  // Validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check existing user
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    username,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully"
  });
};

/**
 * LOGIN
 */
exports.login = async (req, res) => {
     console.log("LOGIN BODY:", req.body);
     
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Generate token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    "secretkey",
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token
  });
};
