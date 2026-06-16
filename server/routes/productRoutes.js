import express from 'express';
import {
  getProducts, getProductBySlug, createProduct,
  updateProduct, deleteProduct, updateVariantStock
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';
import { adminOnly } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:slug', getProductBySlug);
router.post('/', protect, adminOnly, createProduct);
router.put('/:id', protect, adminOnly, updateProduct);
router.delete('/:id', protect, adminOnly, deleteProduct);
router.patch('/:id/variant-stock', protect, adminOnly, updateVariantStock);

export default router;