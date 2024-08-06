import { createContext, useState, useContext, useEffect } from 'react'
import { getProductsRequests, getProductsById } from '../api/products.js';

// Este es el que tenemos que consumir

export const CarritoContext = createContext()

export const useCar = () => {
  const context = useContext(CarritoContext);
  return context;
};

// Este es el que nos provee de acceso al contexto
export function CarritoProvider ({ children }) {
  const [carProduct, setCarProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const total = carProduct.reduce((acc, product) => acc + product.price * product.quantity, 0);
  
 

  const addCardProduct = async (id) => {
    try {
      setLoading(true);
      const productToAdd = await getProductsById(id);
      console.log('producto buscado',productToAdd)
      setCarProduct((prevCarProduct) => {
        // Buscar si el producto ya está en el carrito
        const existingProductIndex = prevCarProduct.findIndex(item => item.id_product === productToAdd.data.id_product);
        // Si el producto ya está en el carrito, actualizar la cantidad
        if (existingProductIndex !== -1) {
          console.log('111')
          const updatedCart = [...prevCarProduct];
          updatedCart[existingProductIndex].quantity += 1; // o la cantidad que desees agregar
          return updatedCart;
        } else {
          console.log('en el else',productToAdd)
          // Si no está en el carrito, agregar como nuevo producto
          return [...prevCarProduct, { ...productToAdd.data}];
        }
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function updateProductQuantity(productId, quantity) {
    setCarProduct((currentCart) => {
      return currentCart.map((item) => {
        if (item.id_product === productId) {
          return { ...item, quantity: quantity};
        }
        return item;
      });
    });
  };
  

 /* const getCarProducts = async () => {
    try {
      setLoading(true);
      const res = await getProductsRequests();
      setProducts(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };*/
  
  useEffect(()=>{
    console.log('contexCarrrito',carProduct);
  },[carProduct])


  return (
    <CarritoContext.Provider value={{
      addCardProduct,
      updateProductQuantity,
      carProduct,
      total,
      loading,
      error
    }}
    >
      {children}
    </CarritoContext.Provider>
  )
}