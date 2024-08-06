import { Router } from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/products.controllers.js';

const router = Router();

// Ruta para obtener todos los productos
router.get('/products', getAllProducts);

// Ruta para obtener un producto específico por su ID
router.get('/products/:id', getProductById);

// Ruta para crear un nuevo producto
router.post('/products', createProduct);

// Ruta para actualizar un producto existente por su ID
router.put('/products/:id', updateProduct);

// Ruta para eliminar un producto existente por su ID
router.delete('/products/:id', deleteProduct);

export default router;
