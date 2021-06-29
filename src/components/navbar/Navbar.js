import React from 'react';
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
        //función para el top click que hace subir hacia arriba de la pág
        const toThesky = () => {
            window.scrollTo({top:0, left:0, behavior:"smooth"});
        }

    return (
        //cuando scrolling es > 20 (siempre está en 0 desde arriba) | ? = condicional | : =else (en este caso es < 20 y volvera al estilo anterior) | "scrolling": nombre de la clase que se añade al contenedor navbar
        <nav className={`navbar ${isScrolling > 20 ? "scrolling": null}`}> 
            <div className="navbar-logo" onClick={toThesky}>Menu</div>
        </nav>
    )
}

export default Navbar
