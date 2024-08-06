// index.js
import { sequelize } from './sequelize.js';
import { PORT } from './config.js';
import app from './app.js';

// Conexión a la base de datos
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
}).catch((error) => {
  console.error('Error al sincronizar la base de datos:', error);
});


/// CODIGO PARA GENERAR UN ARCHIVO CON TODOS LOS REGISTROS DE UNA TABLA EN FORMATO JSON

/*import { sequelize } from './sequelize.js';
import { PORT } from './config.js';
import app from './app.js';
import fs from 'fs';

// Conexión a la base de datos
sequelize.sync({ force: false }).then(async () => {
  console.log('Base de datos sincronizada');

  // Consulta para obtener todos los registros de la tabla Products
  const query = "SELECT json_group_array(json_object('id_product', id_product, 'name', name, 'category', category, 'description', description,'price',price,'images',images,'colors',colors,'sizes',sizes,'highlights',highlights,'details',details)) AS data FROM Products;";
  const [results] = await sequelize.query(query, { raw: true });
  const jsonData = results[0].data;

  // Guardar el resultado en un archivo JSON
  fs.writeFileSync('data.json', jsonData, 'utf8');

  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
}).catch((error) => {
  console.error('Error al sincronizar la base de datos:', error);
});

*/