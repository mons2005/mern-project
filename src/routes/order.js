// routes/orders.js
const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

router.post('/orders', async (req, res) => {
  const { address, phoneNumber, items, totalCost } = req.body;

  const newOrder = new Order({
    address,
    phoneNumber,
    items,
    totalCost
  });

  try {
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to place order', error: error.message });
  }
});

module.exports = router;
