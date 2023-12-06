import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

export default function Card({ vid }) {
    // Extrai o ID do vídeo da URL
    const videoId = vid.url.slice(17);

    const linkStyle = {
        color: 'black', // ou a cor desejada
        textDecoration: 'none',
    };

    return (
        <a to={`/detalhe/${vid.id}`} className='item' style={linkStyle}>
            <div className="col">
                {/* Vídeo incorporado do YouTube */}
                <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Vídeo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                {/* Exibe o título do vídeo e o nome do canal */}
                <h6>{vid.videos}</h6>
                <p>{vid.canal}</p>
            </div>
        </a>
    );
}
