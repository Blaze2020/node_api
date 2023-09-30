// middleware/authMiddleware.js
const jwt = require('jsonwebtoken')
const config = require('../config/auth')

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    req.user = decoded
    next()
  })
}

module.exports = {
  verifyToken
}
