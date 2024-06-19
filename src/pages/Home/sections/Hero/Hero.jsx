import "./Hero.css";
import "../../../../components/PreLoad.css"

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
  );
};

export default Hero;
