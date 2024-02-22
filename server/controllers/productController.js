const Product = require('../models/productModel')

const productController = {};

// @desc  Fetch all products based on MenuKey
// @route   GET /api/products
// @access Public
productController.getProductsBasedMenuKey = async (req, res, next) => {
    try {
        const {menuKey} = req.params;
      //.exec(): This method executes the query asynchronously and returns a promise. When the promise resolves, it will contain the result of the query (an array of documents).
      const products = await Product.find({
        menuKeys: menuKey
      }).exec();

      res.locals.products = products;
      return next();
  
    } catch (error) {
      return next("Error in productController.getProductsBasedMenuKey: " + error.message);
    }
}

module.exports = productController;