import React from 'react';
import NavBar from '../Componentes/NavBar';
import RodaPe from '../Componentes/RodaPe';
import Card from '../Componentes/Card';
import './Home.css';

export default function Home() {
    // Recupera os vídeos do armazenamento local
    const videos = JSON.parse(localStorage.getItem('Lista')) || [];
    console.log(videos);

    return (
        <div>
            {/* Container da página inicial */}
            <div className="home-container">
                {/* Barra de navegação */}
                <NavBar />

                {/* Título principal da página */}
                <h1>Videos</h1>

                {/* Mensagem informativa abaixo do título */}
                <p className="message">Aprecie os vídeos cadastrados abaixo:</p>

                {/* Container principal com conteúdo centrado */}
                <div className="container text-center">
                    <div className="row align-items-center">
                        {/* Mapeia e exibe cada vídeo usando o componente Card */}
                        {videos.map((video, index) => (
                            <Card key={index} vid={video} />
                        ))}
                    </div>
                </div>

                {/* Rodapé */}
                <RodaPe />
            </div>
        </div>
    );
}
