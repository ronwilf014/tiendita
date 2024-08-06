import { Header } from "./utilies/Header.js"
import  ProductsComponent  from "./utilies/products.js"
import { useFilters } from '../../hooks/useFilters.js'
import initialProducts from '../../mooks/products.json'



const ProductListPage = () => {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <ProductsComponent products={filteredProducts}/>
    </>

  )
}



export default ProductListPage