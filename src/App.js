import React, {useEffect, useState} from 'react';
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

function App() {
//la posicion del scroll
  const [scrollHeight, setScrollHeight] = useState(0); //cuando la página cargue el scroll quedará en 0
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])


  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}/>
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
