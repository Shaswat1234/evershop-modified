
const express = require('express');
const { getProductsForUser } = require('../services/productService');
const router = express.Router();

router.get('/products', async (req, res) => {
    const userId = req.user.id; // Assuming user ID is available in the session
    const products = await getProductsForUser(userId);
    res.json(products);
});

module.exports = router;
