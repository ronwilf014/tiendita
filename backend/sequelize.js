// sequelize.js
import { Sequelize } from 'sequelize';

// Ruta donde se almacenará la base de datos SQLite
const DB_PATH = './data/database.sqlite';

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: DB_PATH,
  define: {
    timestamps: false // Deshabilita las marcas de tiempo automáticas
  }
});

// Exportar la instancia de Sequelize
export { sequelize };

// Verificar la conexión con la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos SQLite');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
})();
