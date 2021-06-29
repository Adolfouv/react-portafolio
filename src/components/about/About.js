import React from 'react';
import "./About.css";
import imgAbout from "../../media/about-imagenv2.jpg";  

const About = () => {
    return (
        //contenedor que va a tener 2 divs, una con la descripcion del texto y la otra con la imagen
        <div className="about-container">
            <div className="about-desc">
                <h3>¿Quien soy?</h3>
                <p>
                    Soy titulado de la carrera Analista Programador en la Universidad Tecnológica de Chile, INACAP, poseo 
                    manejo del inglés como segundo lenguaje y tengo conocimientos básicos en desarrollo front-end HTML,CSS y JS.
                    Mi objetivo es convertirme en un desarrollador full stack que pueda llevar a cabo proyectos y liderarlos. 
                </p>
            </div>
            <div className="about-img">
                <img src={imgAbout} alt="about" className="img-learnt"/>

            </div>
        </div>
    )
}

export default About
