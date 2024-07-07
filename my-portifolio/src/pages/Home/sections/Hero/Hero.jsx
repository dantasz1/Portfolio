import "./Hero.css";
import "../Nav/Nav.css"
import { useEffect } from "react";


import initTyped from "./Hero.js"; // Importar a função initTyped
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import undrawWeb from "../../../../assets/images/undrawWeb.svg"
import undrawSite from "../../../../assets/images/undrawSite.svg"
import undrawDesign from "../../../../assets/images/undrawDesign.svg"



const Hero = () => {
  useEffect(() => {
    // Inicializa o Typed.js ou qualquer outra lógica que você tenha
    const typed = initTyped();

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <header 
      className="backGround-container">


        <span className="luz"></span>

        <div className="header-top">
        <h4 id="ola">Olá, me chamo</h4>
        </div>
        <p className="text-gradient">
          André Luiz <span id="sobrenome"> de Almeida Dantas</span>
        </p>

        <h3 className="h3multiple">
          Sou um <span className="multiple-text"></span>
        </h3>
        <span id="arrow">
          <KeyboardArrowDownIcon />
        </span>
      </header>
      <div className="caixa-icons-contato">

        <ul className="icons-contato">
          <li><i  id="iIcons" className="ri-whatsapp-line"></i></li>
          <li><i id="iIcons" className="ri-mail-line"></i></li>
          <li><i id="iIcons" className="ri-github-fill"></i></li>
          <li><i id="iIcons" className="ri-linkedin-box-fill"></i></li>
        </ul>
      </div>
    </>
  );
};


  

//useEffect(() => {
//  
//  function ScrollToElement(elementSelector , instance = 0) {
  
  //  const elements = document.querySelectorAll(elementSelector)
  //  if (elements.length > instance) {
    //  elements[instance].scrollIntoView({behavior : 'smooth'})
  //  }
  //  
//  }
//  
//  
//  const link1 = document.getElementById("link1")
//  const link2 = document.getElementById("link2")
//  //const link3 = document.getElementById("link3")
//  //const link4 = document.getElementById("link4")
//  
//  link1.addEventListener("click" , () => {
   // ScrollToElement(".backGround-container")
//  })
//  
//  
//  
//  link2.addEventListener("click" , () => {
 //   ScrollToElement(".about")
//  })
//  
//})
    

  

  
    <>
     
    



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
     



      <div className="Titulo-servico">
      <h5>Serviços</h5>
      </div>
      
      <section className="servicos">
  <div className="cards">
    <div className="card">
      <img src={undrawWeb} alt="Imagem 1"/>
      <div className="card-conteudo">
        <h3>Desenvolvimento de websites.</h3>
        <p>- Criação de websites modernos e responsivos seguindo o padrão de escolha do cliente</p>
      </div>
     
    </div>
    <div className="card">
      <img src={undrawDesign} alt="Imagem 2"/>
      <div className="card-conteudo">
        <h3>UI/UX.</h3>
        <p>- Prototipagem Interativa</p>
        <p>- Arquitetura de Software</p>
        <p>- Design Interface</p>
        <p>- Documentação de Software</p>
      </div>
      
    </div>
    <div className="card">
      <img src={undrawSite} alt="Imagem 3"/>
      <div className="card-conteudo">
        <h3>Manutenção de sites.</h3>
        <p>- Serviços de manutenção para garantir que seu site esteja sempre atualizado, seguro e funcionando corretamente, incluindo correções de bugs e otimização de desempenho.</p>
      </div>
      
    </div>
  </div>
</section>



    </>
  ;


export default Hero;
