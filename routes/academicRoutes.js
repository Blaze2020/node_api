// routes/academicRoutes.js
const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const academicController = require('../controllers/academicController')

router.use(authMiddleware.verifyToken)

router.post('/academic', academicController.addAcademic)
router.put('/academic/:id', academicController.updateAcademic)
router.delete('/academic/:id', academicController.deleteAcademic)
router.get('/academic', academicController.getAcademic)

module.exports = router
