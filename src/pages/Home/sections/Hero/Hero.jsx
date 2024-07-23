import "./Hero.css";
import "../NavBar/Nav.css";
import { useEffect } from "react";
import initTyped from "./Hero.js"; // Importar a função initTyped
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Hero = () => {
  useEffect(() => {
    // Inicializa o Typed.js ou qualquer outra lógica que você tenha
    const typed = initTyped();

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("Andre");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" , duration: 1000 });
    }
  };

  return (
    <>
      <section id="home" className="backGround-container">
        <span className="luz"></span>

        <div className="containerTitle">
          <aside className="titulo">
            <span id="ola">Olá, me chamo</span>
            <div className="nome-completo">
              <span id="text-gradient">André Luiz</span>{" "}
              <span id="sobrenome">de Almeida Dantas</span>
            </div>

            <span className="h3multiple">
              Sou um <span className="multiple-text"></span>
            </span>
          </aside>
        </div>

        <a href="#Andre" onClick={scrollToAbout}>
          <span id="arrow">
            <KeyboardArrowDownIcon />
          </span>
        </a>
      </section>

      <ul className="icons-contato">
        <li>
          <a href="mailto:andreluiz.desenvolvedor@gmail.com" target="_blank" rel="noreferrer">
            <i id="iIcons" className="ri-mail-line"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/dantasz1" target="_blank" rel="noopener noreferrer">
            <i id="iIcons" className="ri-github-fill"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andréluiz-desenvolvedor" target="_blank" rel="noopener noreferrer">
            <i id="iIcons" className="ri-linkedin-box-fill"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Hero;
