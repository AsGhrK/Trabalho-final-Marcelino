import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Componentes/NavBar";
import RodaPe from "../Componentes/RodaPe";
import "./Cadastrar.css";

export default function Cadastrar() {
  // State e useEffect para manipular a lista de vídeos no localStorage
  const localStorageList = JSON.parse(localStorage.getItem("Lista")) || [];
  const [videos, setVideo] = useState("");
  const [url, setUrl] = useState("");
  const [canal, setCanal] = useState("");
  const [discricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [genero, setGenero] = useState("");
  const [lista, setLista] = useState(localStorageList);
  const [id, setId] = useState(
    localStorageList[localStorageList.length - 1]?.id + 1 || 1
  );

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  // Função para salvar um novo vídeo
  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      { videos: videos, url: url, canal: canal, id: id, discricao: discricao, data: data, genero: genero },
    ]);
    setId(id + 1);
  };

  // Função para remover um vídeo da lista
  const removeVideo = (id) => {
    const newLista = lista.filter((vid) => vid.id !== id);
    setLista(newLista);
  };

  // State e função para controlar a exibição completa ou parcial da descrição
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
        <h1 className="title">Lista de Vídeos</h1>
        <form onSubmit={salvar} className="form">
          {/* Formulário para adicionar um novo vídeo */}
          <div className="form-group">
            <label htmlFor="videos">Nome do Vídeo:</label>
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
            <label htmlFor="canal">Canal:</label>
            <input
              type="text"
              id="canal"
              value={canal}
              onChange={(e) => setCanal(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="canal">Data:</label>
            <input
              type="text"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="canal">Genero:</label>
            <input
              type="text"
              id="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição:</label>
            <input
              type="text"
              id="descricao"
              value={discricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <br />
          <button className="add-button">ADD</button>
        </form>
      </div>

      {/* Lista de vídeos cadastrados */}
      <div className="videos-container">
        {lista.map((vid) => (
          <div className="video-item" key={vid.id}>
            <p>
              Nome: {vid.videos}
              <br />
              Canal: {vid.canal}
              <br />
              Data: {vid.data}
              <br />
              Gênero: {vid.genero}
              <br />
              Descrição: {showFullDescription[vid.id]
                ? vid.discricao
                : `${vid.discricao.slice(0, 50)}...`}
              <br />
              {/* Botão para mostrar/ocultar a descrição completa */}
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
            {/* Vídeo incorporado do YouTube */}
            <iframe
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${vid.url.slice(17)}`}
              title="Vídeo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            {/* Links para detalhes do vídeo e botão para remover o vídeo */}
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
      {/* Rodapé */}
      <RodaPe />
    </div>
  );
}