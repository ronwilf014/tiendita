import express from 'express';
import productsRoutes from './routes/products.routes.js'
import tiendasRoutes from './routes/tiendas.routes.js'
import cors  from 'cors';



const app = express();

app.use(cors());

// midellwares //
app.use(express.json({ limit: '100mb' })); // Aumenta el límite de tamaño para JSON
app.use(express.urlencoded({ extended: true, limit: '100mb' })); // Aumenta el límite de tamaño para URL-encoded data


app.use(productsRoutes);
app.use(tiendasRoutes);

export default app