import { useParams } from "react-router-dom"
import NavBar from '../Componentes/NavBar';
import RodaPe from '../Componentes/RodaPe';
import Card from "../Componentes/Card";
import "./Detalhe.css"
export default function Detalhe() {

    const { id } = useParams()
    const videos = JSON.parse(localStorage.getItem('Lista')) || [];

    const video = videos.filter((objeto) => {
        if (objeto.id == id) {
            return objeto
        }
        return null
    })
    console.log(video)
    return (
        <div className="detalhe-container">
            <NavBar/>
        <Card vid={video[0]} />
          <RodaPe/>
        </div>

    )
}