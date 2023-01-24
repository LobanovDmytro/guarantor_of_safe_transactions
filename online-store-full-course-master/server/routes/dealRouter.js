const Router = require('express')
const router = new Router()
const dealController = require('../controllers/dealController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create',authMiddleware, dealController.create)
router.post('/getUserDeals', authMiddleware, dealController.getUserDeal)
router.post('/getOne', dealController.getOneDeal)
router.post('/update', authMiddleware, dealController.changeDeal)
router.get('/get',authMiddleware, dealController.getAll)

module.exports = router
