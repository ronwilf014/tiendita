import React from 'react';
import ProductDetail from '../../components/productDetail'
import { useProducts } from "../../context/productsContext" 



const ProductDetailPage = () => {
  const  {getAProduct} = useProducts()
  return (
      <ProductDetail/>
      )
};

export default ProductDetailPage;
