// controllers/productController.js
import { Tienda } from './../models/tiendasModel.js';
import { Product } from './../models/productModel.js';
import { uploadImage, deleteImage } from '../libs/cloudinary.js';

// Obtener todos los productos
export const getAllStores = async (req, res) => {
  try {
    const tiendas = await Tienda.findAll();
    tiendas ? res.send(tiendas) : res.sendStatus(404);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Obtener un producto por su ID
export const getStoreById = async (req, res) => {
  console.log(req)
  const tiendaId = req.params.id;
  try {
    const tienda = await Tienda.findByPk(tiendaId);
    if (!tienda) {
      return res.status(404).json({ error: 'Tienda no encontrada' });
    }

    const productos = await Product.findAll({ where: { TiendaId: tiendaId } });

    res.json({ tienda, productos });
  } catch (error) {
    console.error('Error al obtener la tienda y sus productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Crear un nueva tienda
export const createStore = async (req, res) => {
  try {
    const { name, location, img_perfil, img_portada, eslogan, telefono, email, redes_sociales } = req.body;

    const newStore = new Tienda({ 
      name, 
      location,
      img_perfil,
      img_portada,
      eslogan,
      telefono,
      email,
      redes_sociales
    });
    await newStore.save();
    return res.json(newStore);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};


// Actualizar un producto existente por su ID
export const updateStore = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.send(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar un producto existente por su ID
export const deleteStore = async (req, res) => {
  try {
    const { id } = req.params;
    const tienda = await Tienda.destroy({
      where:{
        id_tienda: id
      }
    });

    if (!tienda) return res.sendStatus(404);
    res.status(200).json({ message: `Se ha eliminado la tienda con ID ${id}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
