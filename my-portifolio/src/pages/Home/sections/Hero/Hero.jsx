import "./Hero.css";
import "../../../../components/PreLoad.css"

import Foto from "../../../../assets/images/minhaFoto.png";
import Logo from "../../../../assets/images/logo.png";
import { useEffect, useState } from "react";
import initTyped from "./Hero.js"; // Importar a função initTyped
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PreLoad from "../../../../components/PreLoad.jsx";

const Hero = () => {
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    // Simulando um processo de carregamento com setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // Definindo loading como falso após um certo tempo (simulação de carregamento completo)
    }, 2000); // Simulando 2 segundos de carregamento

    return () => clearTimeout(timer); // Limpando o timer ao desmontar o componente
  }, []);

  useEffect(() => {
    // Inicializar Typed.js quando o componente estiver montado e loading for false
    if (!loading) {
      const typed = initTyped(); // Inicializa o Typed.js através da função exportada

      // Limpar Typed ao desmontar o componente
      return () => {
        typed.destroy();
      };
    }
  }, [loading]);

  return (
    <>

    <section className={`backGround1 ${loading ? 'loading' : 'loaded'}`}>
      {loading ? (
        <PreLoad />
      ) : (
        <>
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
            <p className="text-gradient">André Luiz <span id="sobrenome">de Almeida Dantas</span></p>
            <h3 className="h3multiple">Sou um <span className="multiple-text"></span></h3>
            <span id="arrow"><KeyboardArrowDownIcon /></span>
          </header>
        </>
      )}
    </section>

    <section className="container">
    
      <div className="about">
      <img src= {Foto} alt="minhaFoto"/>
      
      <div className="info">
      <h2 className="aboutMe">About Me</h2>
        <p>Olá, meu nome é André! Estou cursando Análise 
          e Desenvolvimento de Sistemas na universidade 
          da UNIP Paulista, em Santos. Meu contato inicial
           com a área de TI começou em 2023, e desde então 
           estou sempre disposto a descobrir e aprender mais, 
           buscando constantemente novos conhecimentos. 
           Trabalho como desenvolvedor front-end e tenho 
           experiência com HTML, CSS, JavaScript, React, MongoDB e PostgreSQL . . .</p>
           <button className="contate-btn">Fale comigo</button>
        </div>
        </div>
        
        <div className="skills">
    <h5 className="textSkills">Minhas Skills</h5>
    <div className="container">
        <div className="left">
            <div className="info">
                <h3>Quais Linguagens eu domino?</h3>
            </div>
        </div>
        <div className="right">
            <div className="item">
                <i className="ri-html5-fill"></i>
            </div>
            <div className="item">
                <i className="ri-css3-fill"></i>
            </div>
            <div className="item">
                <i className="ri-javascript-fill"></i>
            </div>
            <div className="item">
                <i className="bx bxl-mongodb"></i>
            </div>
            <div className="item">
                <i className="ri-database-2-fill"></i>
            </div>
            <div className="item">
                <i className="ri-github-fill"></i>
            </div>
        </div>
    </div>
</div>

    </section>
    </>
  );
};

export default Hero;
