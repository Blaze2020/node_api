// models/Exhibition.js
const db = require('../config/database')

class Exhibition {
  static async create ({ userId, name, location, date }) {
    try {
      const [rows] = await db.execute(
        'INSERT INTO user_data.Exhibition (user_id, Exhibition_id, Exhibition_name, year) VALUES (?, 1?, ?, ?);',
        [userId, name, location, date]
      )
      return rows.insertId
    } catch (error) {
      throw error
    }
  }

  static async update ({ id, name, location, date }) {
    try {
      await db.execute(
        'UPDATE exhibition SET Exhibition_id = ?, Exhibition_name = ?, date = ? WHERE id = ?',
        [name, location, date, id]
      )
    } catch (error) {
      throw error
    }
  }

  static async delete (id) {
    try {
      await db.execute('DELETE FROM user_data.Exhibition WHERE user_id = ?', [id])
    } catch (error) {
      throw error
    }
  }

  static async getExhibitionByUserId (userId) {
    try {
      const [rows] = await db.execute(
        'SELECT * FROM user_data.Exhibition WHERE user_id = ?',
        [userId]
      )
      return rows
    } catch (error) {
      throw error
    }
  }
}

module.exports = Exhibition
