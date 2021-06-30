import React from 'react';
import Carousel, {slidesToShowPlugin} from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides"; 
import "./Slider.css";


const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Mis proyectos</h2>
            </div>
            <Carousel
                plugins={['arrows','infinite','centered',
                            {
                            resolve: slidesToShowPlugin,
                                    options: {
                                    numberOfSlides: 3
                                    }
                            },
                        ]}
                    animationSpeed={900}
                    slides={Slides}  
                    
                    
                    breakpoints={{
                        640: {
                            plugins: ['infinite','centered','arrows',
                                {
                                resolve: slidesToShowPlugin, 
                                        options:{
                                        numberOfSlides: 1
                                        }
                                },
                                      ]
                            }
                    }}
              
                

            >     
            </Carousel>
        </div>
    )
}
export default Slider;

