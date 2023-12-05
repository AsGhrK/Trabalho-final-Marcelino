import React from "react";

export default function NavBar() {
    return (
        <div>
            {/* Barra de navegação */}
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    {/* Link para a página inicial */}
                    <a className="navbar-brand" href="Home"><i className="fi fi-rr-video-camera-alt"></i> Videos Net </a>
                    
                    {/* Botão de alternância para o menu lateral */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu lateral */}
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            {/* Título do menu lateral */}
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"> <i className="fi fi-rr-layers"></i> Opções</h5>
                            {/* Botão para fechar o menu lateral */}
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        
                        {/* Corpo do menu lateral com opções de navegação */}
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {/* Link para a página principal */}
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="Home"> <i className="fi fi-rr-video-camera-alt" /> Videos</a>
                                </li>
                                
                                {/* Link para vídeos em alta */}
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="EmAlta"> <i className="fi fi-rr-flame" /> Em alta</a>
                                </li>
                                
                                {/* Link para a página de upload de vídeos */}
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="Cadastrar"> <i className="fi fi-rr-pencil" /> Subir Video</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}