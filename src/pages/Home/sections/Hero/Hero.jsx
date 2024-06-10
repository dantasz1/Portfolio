// src/pages/Home/sections/Hero/Hero.jsx

import "./Hero.css";
import Logo from "../../../../assets/images/logo.png";
import { useEffect } from "react";
import initTyped from "./Hero"; // Importar a função initTyped
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
  useEffect(() => {
    const typed = initTyped();

    // Cleanup ao desmontar o componente
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="backGround1">
      <nav className="nav" id="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="MinhaLogo" />
        </div>
        <ul className="nav-links">
          <li className="link"><a href="#">&lt;Inicio&gt;</a></li>
          <li className="link"><a href="#">&lt;Sobre mim&gt;</a></li>
          <li className="link"><a href="#">&lt;Projetos&gt;</a></li>
          <li className="link"><a href="#">&lt;Contato&gt;</a></li>
        </ul>
      </nav>
      <header className="container">
        <span className="luz"></span>
        <h4 id="ola">Olá, me chamo</h4>
        <p className="text-gradient"> André Luiz <span id="sobrenome">de Almeida Dantas</span> </p>
        <h3 className="h3multiple">Sou um <span className="multiple-text"></span></h3>
        <span id="arrow"   style={{ fontSizeLarge: "100px" }}><KeyboardArrowDownIcon/></span>
        
      </header>
    </section>
  );
};

export default Hero; // Exportando o componente Hero por padrão

