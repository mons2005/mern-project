// Define CartItem Schema
const cartItemSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  });
  
  // Create Models
  const CartItem = mongoose.model('CartItem', cartItemSchema);
  
  // POST endpoint to add an item to the cart
  app.post('/api/cart', async (req, res) => {
    console.log('Received cart item data:', req.body);
  
    try {
      const { productName, price, quantity } = req.body;
  
      // Validate input
      if (!productName || !price || !quantity) {
        return res.status(400).json({ message: 'Product name, price, and quantity are required' });
      }
  
      // Check if the item already exists in the cart
      const existingItem = await CartItem.findOne({ productName });
  
      if (existingItem) {
        // Update quantity if it exists
        existingItem.quantity += quantity;
        await existingItem.save();
        return res.status(200).json({ message: 'Item quantity updated successfully', item: existingItem });
      } else {
        // Create a new cart item if it doesn't exist
        const newCartItem = new CartItem({ productName, price, quantity });
        await newCartItem.save();
        return res.status(201).json({ message: 'Item added to cart successfully', item: newCartItem });
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ message: 'Error adding item to cart', error });
    }
  });
  