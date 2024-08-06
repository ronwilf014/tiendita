import CardsSlider from '../../components/cardsSlider';
import SliderComponent from '../../components/slider';
import Footer from '../../components/footer';
import { useProducts } from "../../context/productsContext" 
import { useStores } from "../../context/tiendasContext" 
import ElementsInGrid from "../../components/elementsInGrid" 

const HomePage = () => {
  
  const {products} = useProducts()
  const {stores} = useStores()
  const imageKey = "img_perfil"; 

   return(
    <div>
      <SliderComponent/>

      <CardsSlider items={stores} title="Nuestras marcas" imageKey={imageKey}/>

      <ElementsInGrid products={products} title="Nuestros productos" />

      <Footer />

    </div>
   )
}


export default HomePage;