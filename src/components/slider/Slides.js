import React from 'react'
import "./Slider.css";
import carousel1 from "../../media/carousel1.jpg";  
import carousel2 from "../../media/carousel2.jpg";  
import carousel3 from "../../media/carousel3.jpg";  
 

const slidesInfo = [
    {
         
        src: carousel1,
        className: "hola",
        alt: "Project1 alt",
        desc: "Proyecto 1"
       
    },

    
    {
        src: carousel2,
        alt: "Project2 alt",
        desc: "Proyecto 2",
    
    },

    
    {
        src: carousel3,
        alt: "Project3 alt",
        desc: "Proyecto 3"
    }
]


const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;

