import express from 'express';
const router = express.Router();
import productController from '../controllers/productController';

router.get('/', productController);

module.exports = router;
