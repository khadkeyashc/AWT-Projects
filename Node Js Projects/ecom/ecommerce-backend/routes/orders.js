const express = require('express');
const router = express.Router();
const { getAllOrders, createOrder } = require('../controllers/orderController');

router.get('/', getAllOrders);
router.post('/', createOrder);

module.exports = router;
