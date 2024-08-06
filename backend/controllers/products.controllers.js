// controllers/productController.js
import { Product } from './../models/productModel.js';
import { Tienda } from './../models/tiendasModel.js';
import { uploadImage, deleteImage } from '../libs/cloudinary.js';

// Obtener todos los productos con el nombre de la tienda
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Tienda,
          attributes: ["name"]
        },
      ],
    });
    products ? res.send(products) : res.sendStatus(404);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



// Obtener un producto por su ID con información de la tienda
export const getProductById = async (req, res) => {

  try {
    const product = await Product.findByPk(req.params.id);
  
    if (!product) {
      return res.sendStatus(404);
    }

    // Obtener información de la tienda
    const tienda = await Tienda.findByPk(product.id_tienda);


    // Devolver el producto con la información de la tienda
    const productWithTienda = {
      id_product: product.id_product,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      href: product.href,
      images: product.images,
      colors: product.colors,
      sizes: product.sizes,
      quantity: product.quantity,
      totalPrice: product.totalPrice,
      highlights: product.highlights,
      details: product.details,
    };

    res.send(productWithTienda);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// Crear un nuevo producto
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, href, images, colors, sizes, highlights, details, TiendaId } = req.body;

    const newProduct = new Product({ 
      name, 
      description, 
      price, 
      category, 
      href, 
      images, 
      colors, 
      sizes, 
      highlights, 
      details,
      TiendaId
    });
    await newProduct.save();
    return res.json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};


// Actualizar un producto existente por su ID
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.send(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



// Eliminar un producto existente por su ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.destroy({
      where:{
        id_product: id
      }
    });

    if (!product) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
