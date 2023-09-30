// controllers/authController.js
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const config = require('../config/auth')

const register = async (req, res) => {
  try {
    const { username, password, age, firstname, lastname } = req.body

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({
      username,
      password: hashedPassword,
      age,
      firstname,
      lastname
    })

    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await User.findByUsername(username)

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const token = jwt.sign({ username: user.username }, config.secret)

    res.json({ token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = {
  register,
  login
}
