import StoreDetailComponent from '../../components/storeDetailComponent'
import { useStores } from "../../context/tiendasContext" 



const TiendaDetailPage = () => {
  const  {getAStore, loading, error } = useStores()
  const imgPerfil = "img_perfil"
  const imgPortada = "img_portada"
  return (
      <StoreDetailComponent getAStore={getAStore} loading={loading} error={error} imgPerfil={imgPerfil} imgPortada={imgPortada}/>
      )
};

export default TiendaDetailPage;
