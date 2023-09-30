// models/User.js
const db = require('../config/database')

class User {
  static create ({ username, password, age, firstname, lastname }) {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO user_data.users  (username, password,age,firstname,lastname) VALUES (?, ?,?,?,?)',
        [username, password, age, firstname, lastname],
        (err, results) => {
          if (err) return reject(err)
          resolve(results)
        }
      )
    })
  }

  static findByUsername (username) {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT * FROM user_data.users WHERE username= ?',
        [username],
        (err, results) => {
          if (err) return reject(err)
          resolve(results[0])
        }
      )
    })
  }
}

module.exports = User
