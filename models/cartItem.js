const mongoose = require('mongoose');
// Define a Mongoose schema for items in the cart
const cartItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
});

// Create a model based on the cart item schema
const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;