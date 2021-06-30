import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Desarrollo Sofware</h1>
                <p>Punta Arenas, Chile</p>
            </div>
            <div className="footer-contact">
                <h1>Contacto</h1>
                <p>[mapa]</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design By Adolfo Ulloa
                </div>
                <div className="sns-links">
                    <a href="https://linkedin.com/in/adolfo-ulloa-9088371ba" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=56933626350&text&app_absent=0" target="_blank" rel="noreferrer">
                        <i className="fab fa-whatsapp-square whatsapp"></i>
                    </a>
                    <a href="https://github.com/Adolfouv" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-square github"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
