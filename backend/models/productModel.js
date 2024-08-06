import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.js';

export const Product = sequelize.define('Product', {
  id_product: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['ropa', 'zapato', 'sombrero']] // Validar que la categoría sea una de las opciones permitidas
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING, // Cambiado a STRING
    allowNull: false,
  },
  href: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.JSON, // Cambiado a JSON
    allowNull: false,
  },
  colors: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  sizes: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  highlights: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 1
  },
  totalPrice: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 1
  }
});


