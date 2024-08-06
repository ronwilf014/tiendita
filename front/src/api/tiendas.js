import axios from 'axios'

export const getStoresRequests = async () => await axios.get('http://localhost:4000/tiendas');

export const getStoresById = async (id) => await axios.get(`http://localhost:4000/tiendas/${id}`)