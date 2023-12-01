import NavBar from "../Componentes/NavBar";
import Card from "../Componentes/Card";
import "./Home.css"

export default function Home() {
    const videos = JSON.parse(localStorage.getItem("Lista"));
    console.log(videos)
    return (

        <div>
           
            <div className="home-container">
            <NavBar />
            <div class="container text-center">
  <div class="row align-items-start">
  {videos.map((video) =>  <Card vid={video} />)}
</div>
            
           
            </div>
           
        </div>
</div>
    );
}

//{videos.map((video) => <p key={video.id}>{video.url}</p>)} 


