import "./Hero.css";
import "../../../../components/PreLoad.css";
import { useEffect } from "react";
import Foto from "../../../../assets/images/fotozona.png";
import Logo from "../../../../assets/images/logo.png";
import initTyped from "./Hero.js"; // Importar a função initTyped
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import undrawWeb from "../../../../assets/images/undrawWeb.svg"
import undrawSite from "../../../../assets/images/undrawSite.svg"
import undrawDesign from "../../../../assets/images/undrawDesign.svg"
const Hero = () => {
  useEffect(() => {
    const typed = initTyped(); // Inicializa o Typed.js através da função exportada

    // Limpar Typed ao desmontar o componente
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <nav className="nav" id="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="MinhaLogo" />
        </div>
        <ul className="nav-links">
          <li className="link">
            <a href="#">&lt;Inicio&gt;</a>
          </li>
          <li className="link">
            <a href="#">&lt;Sobre mim&gt;</a>
          </li>
          <li className="link">
            <a href="#">&lt;Projetos&gt;</a>
          </li>
          <li className="link">
            <a href="#">&lt;Contato&gt;</a>
          </li>
        </ul>
      </nav>

      <header className="backGround container">
        <span className="luz"></span>
        <h4 id="ola">Olá, me chamo</h4>
        <p className="text-gradient">
          André Luiz <span id="sobrenome">de Almeida Dantas</span>
        </p>
        <h3 className="h3multiple">
          Sou um <span className="multiple-text"></span>
        </h3>
        <span id="arrow">
          <KeyboardArrowDownIcon />
        </span>
      </header>

      <section className="about-me container">
        <div className="about">
          <img src={Foto} alt="minhaFoto" />
          <div className="info">
            <h2 className="aboutMe">About Me</h2>
            <p>
              Olá, meu nome é André! Estou cursando Análise e Desenvolvimento de
              Sistemas na universidade da UNIP Paulista, em Santos. Meu contato
              inicial com a área de TI começou em 2023, e desde então estou
              sempre disposto a descobrir e aprender mais, buscando
              constantemente novos conhecimentos. Trabalho como desenvolvedor
              front-end e tenho experiência com HTML, CSS, JavaScript, React,
              MongoDB e PostgreSQL . . .
            </p>
            <button className="contate-btn">Fale comigo</button>
          </div>
        </div>

        <div className="habilidades">
          <div className="skills">
            <h5 className="textSkills">Minhas Skills</h5>
            <br />
            <div className="info">
              <h3>Quais Linguagens eu domino?</h3>
            </div>
            <div className="icons">
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
                <i className="ri-database-2-fill"></i>
              </div>
              <div className="item">
                <i className="ri-github-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>




      <div className="Titulo-servico">
      <h5>Serviços</h5>
      </div>
      
      <section className="servicos">
  <div className="cards">
    <div className="card">
      <img src={undrawWeb} alt="Imagem 1"/>
      <div className="card-content">
        <h3>Desenvolvimento de websites.</h3>
        <p>- Criação de websites modernos e responsivos seguindo o padrão de escolha do cliente</p>
      </div>
      <button>Saiba mais</button>
    </div>
    <div className="card">
      <img src={undrawDesign} alt="Imagem 2"/>
      <div className="card-content">
        <h3>UI/UX.</h3>
        <p>- Prototipagem Interativa</p>
        <p>- Arquitetura de Software</p>
        <p>- Design Interface</p>
        <p>- Documentação de Software</p>
      </div>
      <button>Saiba mais</button>
    </div>
    <div className="card">
      <img src={undrawSite} alt="Imagem 3"/>
      <div className="card-content">
        <h3>Manutenção de sites.</h3>
        <p>- Serviços de manutenção para garantir que seu site esteja sempre atualizado, seguro e funcionando corretamente, incluindo correções de bugs e otimização de desempenho.</p>
      </div>
      <button>Saiba mais</button>
    </div>
  </div>
</section>



    </>
  );
};

export default Hero;
