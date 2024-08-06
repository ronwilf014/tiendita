import { useState, createContext, useContext, useEffect } from 'react';
import { getProductsRequests, getProductsById } from '../api/products.js';

const contextProducts = createContext();

export const useProducts = () => {
  const context = useContext(contextProducts);
  return context;
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await getProductsRequests();
      setProducts(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getAProduct = async (id) => {
    try {
      setLoading(true);
      const res = await getProductsById(id);
      return  res
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <contextProducts.Provider
      value={{
        products,
        loading,
        error,
        getProducts,
        getAProduct,
      }}
    >
      {children}
    </contextProducts.Provider>
  );
};
