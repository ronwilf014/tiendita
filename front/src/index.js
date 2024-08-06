import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsProvider } from './context/productsContext';
import {FiltersProvider} from "./context/filters.js"
import {CarritoProvider} from "./context/carritoContext.js"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <CarritoProvider>
    <FiltersProvider>
     <App/>
     </FiltersProvider>
    </CarritoProvider>
  </ProductsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
