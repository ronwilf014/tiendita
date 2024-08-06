import { useState, createContext, useContext, useEffect } from 'react';
import { getStoresRequests, getStoresById } from '../api/tiendas.js';

const contextStores = createContext();

export const useStores = () => {
  const context = useContext(contextStores);
  return context;
};

export const StoresProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getStores = async () => {
    try {
      setLoading(true);
      const res = await getStoresRequests();
      setStores(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getAStore = async (id) => {
    try {
      setLoading(true);
      const res = await getStoresById(id);
      return  res.data
    } catch (error) {
      return error.message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStores();
  }, []);


  return (
    <contextStores.Provider
      value={{
        stores,
        loading,
        error,
        getStores,
        getAStore,
      }}
    >
      {children}
    </contextStores.Provider>
  );
};
