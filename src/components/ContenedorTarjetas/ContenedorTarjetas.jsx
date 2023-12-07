import './contenedortarjeta.css'
import Tarjetas from '../../assets/Tarjetas'
import { useEffect, useState } from 'react'
import axios from 'axios';

const ContenedorTarjetas = () => {
    const [datos, setDatos] = useState([]);
    const ts = 2
    const key = "3e105e6aa93a91bd85cde560bdd4e7e8";
    const hash = "6f15c1b9c10b368ac634992ac5472445";
    const categoria = "comics"
    const url = `https://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`;

    useEffect(() => {

        const solicitud = async () => {

            try {
                const respuesta = await axios.get(url);
                console.log(respuesta.data.data.results);
                setDatos(respuesta.data.data.results);

            } catch (error) {
                console.log("hubo un error:", error);

            }
        };
        solicitud();
    }, [])




    return (
        <>
            <main className='contenedor'>
                {/* <Tarjetas
                    ruta="https://cdn.marvel.com/content/1x/lokis2_lob_crd_04.jpg"
                    titulo="Card title"
                    descripcion="Soy una descripcion" />       
                     */ }


                {datos.map((item) => (
                    <Tarjetas
                        key={item.id}
                        ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                        titulo={item.title}
                    />
                ))}
            </main>
        </>
    )
}

export default ContenedorTarjetas

