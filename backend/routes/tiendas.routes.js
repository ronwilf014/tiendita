import { Router } from 'express';
import { createStore, deleteStore, getAllStores, getStoreById, updateStore } from '../controllers/tiendas.controllers.js';

const router = Router();

// Ruta para obtener todos los productos
router.get('/tiendas', getAllStores);

// Ruta para obtener un producto específico por su ID
router.get('/tiendas/:id', getStoreById);

// Ruta para crear un nuevo producto
router.post('/tiendas', createStore);

// Ruta para actualizar un producto existente por su ID
router.put('/tiendas/:id', updateStore);

// Ruta para eliminar un producto existente por su ID
router.delete('/tiendas/:id', deleteStore);

export default router;
