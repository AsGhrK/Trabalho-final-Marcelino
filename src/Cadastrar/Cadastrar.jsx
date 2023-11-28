// Cadastrar.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Componentes/NavBar";
import "./Cadastrar.css";

export default function Cadastrar() {
  const localStorageList = JSON.parse(localStorage.getItem("Lista")) || [];
  const [videos, setVideo] = useState("");
  const [url, setUrl] = useState("");
  const [artista, setArtista] = useState("");
  const [discricao, setDescricao] = useState("");
  const [lista, setLista] = useState(localStorageList);
  const [id, setId] = useState(
    localStorageList[localStorageList.length - 1]?.id + 1 || 1
  );

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      { videos, url, artista, id, discricao },
    ]);
    setId(id + 1);
  };

  const removeVideo = (id) => {
    const newLista = lista.filter((vid) => vid.id !== id);
    setLista(newLista);
  };

  const [showFullDescription, setShowFullDescription] = useState({});

  const toggleDescription = (id) => {
    setShowFullDescription({
      ...showFullDescription,
      [id]: !showFullDescription[id],
    });
  };

  return (
    <div className="cadastrar-container">
      <NavBar />
      <div className="content-container">
        <h1 className="title">Lista de Produtos</h1>
        <form onSubmit={salvar} className="form">
          <div className="form-group">
            <label htmlFor="videos">Nome do Video:</label>
            <input
              type="text"
              id="videos"
              value={videos}
              onChange={(e) => setVideo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL:</label>
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="artista">Artista:</label>
            <input
              type="text"
              id="artista"
              value={artista}
              onChange={(e) => setArtista(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="discricao">Descrição:</label>
            <input
              type="text"
              id="discricao"
              value={discricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <br/>
          <button className="add-button">ADD</button>
        </form>
      </div>
      <div className="videos-container">
        {lista.map((vid) => (
          <div className="video-item" key={vid.id}>
            <p>
              Nome: {vid.videos}
              <br/>
              Artista: {vid.artista}
              <br/>
              Descrição: {showFullDescription[vid.id]
                ? vid.discricao
                : `${vid.discricao.slice(0, 50)}...`}<br/>
              {!showFullDescription[vid.id] ? (
                <button
                  className="ver-mais-button"
                  onClick={() => toggleDescription(vid.id)}
                >
                  Ver Mais
                </button>
              ) : (
                <button
                  className="ver-mais-button"
                  onClick={() => toggleDescription(vid.id)}
                >
                  Esconder
                </button>
              )}
            </p>
            <iframe
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${vid.url.slice(17)}`}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <Link className="link" to={`/detalhe/${vid.id}`}>
              <button className="view-button">Ver</button>
            </Link>
            <button
              onClick={() => removeVideo(vid.id)}
              className="remove-button"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
