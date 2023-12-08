import './contenedortarjeta.css'
import Tarjetas from '../Tarjetas/Tarjetas'
import { useEffect, useState } from 'react'
import axios from 'axios';

const ContenedorTarjetas = ({ filtro}) => {
    const login = localStorage.getItem("login")
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
    }, [url])




    return (
        <>
        {}
        <main className="contenedor">
        {datos.length === 0 ? (
          <div className="text-center loading">
            <div
              className="spinner-border text-secondary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          datos.map((item) => (
            <Tarjetas
              key={item.id}
              ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
              titulo={item.title}
              descripcion={item.description}
              filtro={filtro}
              id={item.id}
            />
          ))
        )}
      </main>
    </>
  );
};

export default ContenedorTarjetas

