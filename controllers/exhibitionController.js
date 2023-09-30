// controllers/exhibitionController.js
const Exhibition = require('../models/Exhibition')

const addExhibition = async (req, res) => {
  try {
    const { name, location, date } = req.body
    const userId = req.user.username // Assuming user data is stored in the JWT token

    const exhibitionId = await Exhibition.create({
      userId,
      name,
      location,
      date
    })

    res
      .status(201)
      .json({ message: 'Exhibition data added successfully', exhibitionId })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const updateExhibition = async (req, res) => {
  try {
    const { id } = req.params
    const { name, location, date } = req.body

    await Exhibition.update({ id, name, location, date })

    res.json({ message: 'Exhibition data updated successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const deleteExhibition = async (req, res) => {
  try {
    const { id } = req.params

    await Exhibition.delete(id)

    res.json({ message: 'Exhibition data deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const getExhibition = async (req, res) => {
  try {
    const userId = req.user.username // Assuming user data is stored in the JWT token

    const exhibitionData = await Exhibition.getExhibitionByUserId(userId)

    res.json({ exhibitionData })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = {
  addExhibition,
  updateExhibition,
  deleteExhibition,
  getExhibition
}
