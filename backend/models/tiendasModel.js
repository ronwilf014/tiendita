import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.js';
import { Product } from './productModel.js';



export const Tienda = sequelize.define('Tienda', {
  id_tienda: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img_perfil: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img_portada: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  eslogan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  redes_sociales: {
    type: DataTypes.JSON,
    allowNull: false,
  },
},);

Tienda.hasMany(Product,{
  foreignKey:'TiendaId',  // este nommbre estara en la tabla de Product pero no va a estar creado en el modelo de Product, por otra parte es el parametro o propiedad que se enviara en el Json para especificar que es la tienda de ese producto
  sourceKey: 'id_tienda' // este valor significa que la tabla product hara su relacion mediante la propiedad id de esta tabla
});

Product.belongsTo(Tienda,{
  foreignKey:'TiendaId',
  targetId: 'id_tienda'
})

