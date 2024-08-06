import { useParams } from 'react-router-dom';
import useSWR from "swr"

const StoreDetailComponent = ({ getAStore, imgPerfil, imgPortada }) => {
  const { id } = useParams();
 
  /* Aqui se va a utilizar SWR para traer la data ya que solo con useEffect hace llamadas multiples https://swr.vercel.app/es-ES/docs/getting-started */
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR(`http://localhost:4000/tiendas/${id}`, fetcher)


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('tienda data',data)
  return (
    <>
      {data && (
        <div className="bg-gray-800">
          {/* Imagen de portada */}
          <img
            className="w-full h-60 object-cover object-center"
            src={data.tienda[imgPortada]}
            alt="Imagen de portada"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="-mt-24 flex items-end justify-between">
              {/* Foto de perfil */}
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white"
                src={data.tienda[imgPerfil]}
                alt="Foto de perfil"
              />
              {/* Nombre o título */}
              <h1 className="text-4xl font-bold text-white">{data.tienda.name}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreDetailComponent;
