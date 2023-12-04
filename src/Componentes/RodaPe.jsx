import React from "react";

export default function RodaPe() {
    return (
        <div>
            {/* Barra de navegação no rodapé */}
            <nav className="navbar navbar-dark bg-dark fixed-bottom">
                <div className="container-fluid">
                    {/* Link para a página inicial */}
                    <a className="navbar-brand" href="Home">
                        {/* Ícone de câmera de vídeo */}
                        <i className="fi fi-rr-video-camera-alt"/> Videos Net
                    </a>
                </div>
            </nav>
        </div>
    );
}
