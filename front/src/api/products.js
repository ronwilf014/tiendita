import axios from 'axios'

export const getProductsRequests = async () => await axios.get('http://localhost:4000/products');

export const getProductsById = async (id) => await axios.get(`http://localhost:4000/products/${id}`)