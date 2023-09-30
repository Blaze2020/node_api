// controllers/academicController.js
const Academic = require('../models/Academic')

const addAcademic = async (req, res) => {
  try {
    const { institution, degree, year } = req.body
    const userId = req.user.username // Assuming user data is stored in the JWT token

    const academicId = await Academic.create({
      userId,
      institution,
      degree,
      year
    })

    res
      .status(201)
      .json({ message: 'Academic data added successfully', academicId })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const updateAcademic = async (req, res) => {
  try {
    const { id } = req.params
    const { institution, degree, year } = req.body

    await Academic.update({ id, institution, degree, year })

    res.json({ message: 'Academic data updated successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const deleteAcademic = async (req, res) => {
  try {
    const { id } = req.params

    await Academic.delete(id)

    res.json({ message: 'Academic data deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const getAcademic = async (req, res) => {
  try {
    const userId = req.user.username // Assuming user data is stored in the JWT token

    const academicData = await Academic.getAcademicByUserId(userId)

    res.json({ academicData })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = {
  addAcademic,
  updateAcademic,
  deleteAcademic,
  getAcademic
}
