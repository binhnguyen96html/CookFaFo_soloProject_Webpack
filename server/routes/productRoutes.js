const productController = require('../controllers/productController')
const express = require('express')

const router = express.Router()

router.get('/:menuKey', productController.getProductsBasedMenuKey, (req, res) => {
    res.status(200).json(res.locals.products)
})

module.exports = router;