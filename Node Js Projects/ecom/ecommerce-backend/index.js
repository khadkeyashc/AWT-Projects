const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// 👇 This is the new root route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce Backend API!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

