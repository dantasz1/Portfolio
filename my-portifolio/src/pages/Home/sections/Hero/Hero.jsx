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
    

  

  
    
  



