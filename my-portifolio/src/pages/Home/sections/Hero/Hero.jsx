import "./Hero.css";
import "../NavBar/Nav.css"
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
    <a href="www.linkedin.com/in/andréluiz-desenvolvedor" target="_blank" rel="noopener noreferrer">
      <i id="iIcons" className="ri-linkedin-box-fill"></i>
    </a>
  </li>
</ul>

    </>
  );
};


export default Hero;

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
    

  

  
    
  



