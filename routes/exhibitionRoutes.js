// routes/exhibitionRoutes.js
const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const exhibitionController = require('../controllers/exhibitionController')

router.use(authMiddleware.verifyToken)

router.post('/exhibition', exhibitionController.addExhibition)
router.put('/exhibition/:id', exhibitionController.updateExhibition)
router.delete('/exhibition/:id', exhibitionController.deleteExhibition)
router.get('/exhibition', exhibitionController.getExhibition)

module.exports = router
