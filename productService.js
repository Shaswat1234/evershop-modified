
const getProductsForUser = async (userId) => {
    const subscribedProducts = await db.query(
        'SELECT * FROM products WHERE productId IN (SELECT productId FROM user_subscriptions WHERE userId = ?)',
        [userId]
    );
    return subscribedProducts;
};

module.exports = {
    getProductsForUser
};
