import express from 'express';
import cors from 'cors';

const app = express()

app.use(express.json())

app.use(cors())

const products = require('./routes/productRoutes');

app.use('/products', products);

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})