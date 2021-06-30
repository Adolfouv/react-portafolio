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
                Actualmente poseo conocimientos en:<br></br><br></br>
<b>Base de Datos:</b> SQL Server, MySQL (MariaDB), MongoDB.<br></br>
<b>BackEnd:</b> Java (Desarrollo modelo CRUD), VisualBasic, Javascript, SQL.<br></br>
<b>FrontEnd:</b> CSS3, Javascript, React.js.<br></br>
<b>Git:</b> GitPages, Github, entre otras tecnologías. <br></br><br></br>
Otros conocimientos relacionados:<br></br><br></br>
API REST, Bootstrap,Wordpress, Adobe Illustrator, OBS Studio, Godot Engine (.gd), Hostgator Hosting, Cisco, PacketTracer, Bizagi, VirtualBox.
   
                </p>
            </div>
            <div className="about-img">
                <img src={imgAbout} alt="about" className="img-learnt"/>

            </div>
        </div>
    )
}

export default About
