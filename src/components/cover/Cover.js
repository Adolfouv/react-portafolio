import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/finalVideo.mp4";    

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted playsInline/>          
            <h1>Adolfo Ulloa</h1>  
            <p>Analista Programador | Creador de Contenido</p>
        </div>
    )
}

export default Cover
