import "./detalle.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetalleTarjeta = () => {
  const [detalle, setDetalle] = useState([]);
  const { id } = useParams();
  const ts = 2;
  const key = "3e105e6aa93a91bd85cde560bdd4e7e8";
  const hash = "6f15c1b9c10b368ac634992ac5472445";
  const url = `https://gateway.marvel.com/v1/public/comics/${id}?ts=${ts}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDetalle(respuesta.data.data.results[0]);
      } catch (error) {
        console.error("hubo un error: ", error);
      }
    };
    solicitud();
  }, []);
  if (!detalle || !detalle.thumbnail) {
    return (
      <div className="text-center loading">
        <div
          className="spinner-border text-secondary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <main className="contenedordetalle">
      <div className="contenedorimg">
        <img
          src={`${detalle.thumbnail.path}/portrait_uncanny.${detalle.thumbnail.extension}`}
          alt=""
          className="img"
        />
      </div>
      <div className="contenedortitulo">
        <h2>{detalle.title}</h2>
        <h3>Fecha de publicación:</h3>
        <p>{detalle.dates[0].date}</p>
      </div>
    </main>
  );
};

export default DetalleTarjeta;