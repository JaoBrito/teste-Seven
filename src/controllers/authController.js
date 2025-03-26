const { registerUser, loginUser } = require('../services/authService');
const { validateUser } = require('../utils/validation')

const register = async (req, res) => {

  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message
    });
  }

  const { name, email, password } = req.body;
  try {
    const user = await registerUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { register, login };