// models/Academic.js
const db = require('../config/database')

class Academic {
  static async create ({ user_id, academic_id, academic_name, year }) {
    try {
      const [rows] = await db.execute(
        'INSERT INTO user_data.academic (user_id, academic_id, academic_name, year) VALUES (?, ?, ?, ?)',
        [user_id, academic_id, academic_name, year]
      )
      return rows.insertId
    } catch (error) {
      throw error
    }
  }

  static async update ({ user_id, academic_id, academic_name, year }) {
    try {
      await db.execute(
        'UPDATE academic SET academic_id = ?, academic_name = ?, year = ? WHERE user_id = ?',
        [academic_id, academic_name, year, id]
      )
    } catch (error) {
      throw error
    }
  }

  static async delete (id) {
    try {
      await db.execute('DELETE FROM academic WHERE user_id = ?', [id])
    } catch (error) {
      throw error
    }
  }

  static async getAcademicByUserId (userId) {
    try {
      const [rows] = await db.execute(
        'SELECT * FROM academic WHERE user_id = ?',
        [userId]
      )
      return rows
    } catch (error) {
      throw error
    }
  }
}

module.exports = Academic
