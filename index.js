const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/render', upload.single('image'), (req, res) => {
  const style = req.body.style || 'Modern';
  console.log('Image uploaded. Style selected:', style);
  
  // Simulate a fake rendered image URL
  const renderedImageUrl = 'https://via.placeholder.com/600x400?text=Rendered+' + style;
  const products = [
    { name: 'Product 1', price: '$99', image: 'https://via.placeholder.com/100' },
    { name: 'Product 2', price: '$99', image: 'https://via.placeholder.com/100' }
  ];

  res.json({ renderedImageUrl, products });
});

app.get('/', (req, res) => {
  res.send('Room2Buy backend is running!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
