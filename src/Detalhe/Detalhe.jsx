// Detalhe.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Componentes/NavBar';
import RodaPe from '../Componentes/RodaPe';
import Card from '../Componentes/Card';
import './Detalhe.css';

export default function Detalhe() {
  const { id } = useParams();
  const videos = JSON.parse(localStorage.getItem('Lista')) || [];

  const video = videos.find((objeto) => objeto.id == id) || null;

  // State e função para controlar a exibição completa ou parcial da descrição
  const [showFullDescription, setShowFullDescription] = useState({});

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="detalhe-container">
      <NavBar />
      <Card vid={video} />
      <div className="videos-container">
        <div className="video-item">
          <p>
            Descrição: {showFullDescription
              ? video.discricao
              : `${video.discricao.slice(0, 50)}...`}
            <br />
            {/* Botão para mostrar/ocultar a descrição completa */}
            <button
              className="ver-mais-button"
              onClick={toggleDescription}
            >
              {showFullDescription ? 'Esconder' : 'Ver Mais'}
            </button>
          </p>
        </div>
      </div>
      <RodaPe />
    </div>
  );
}
