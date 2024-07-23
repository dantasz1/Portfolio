import { useState, useEffect } from "react";
import "../Skills/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logoBrazil from "../../../../assets/images/brazil.svg"
import logoEUA from "../../../../assets/images/bandeira-eua.png"
const Skills = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (visivel) {
      AOS.init({
        easing: "ease-in-out", // Tipo de easing
        once: true, // Anima apenas uma vez ao entrar na tela
      });
      AOS.refresh();
    }
  }, [visivel]);

  const handleScroll = () => {
    // Verifique o scroll da página aqui para determinar se `visivel` deve ser setado como true
    if (!visivel) {
      setVisivel(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <section id="skills" data-aos="zoom-in" data-aos-duration="10000">
        
        <div className="titulos">
          <h2 className="textSkills">&lt; Skills &gt;</h2>
          <span>Skills técnicas e pessoais</span>
          <div className="linha-separadora2">
            <hr />
          </div>
        </div>

        <div className="containerSkills">

          {/* HardSkills */}
          <div className="skillBar hardskills">
            <h4>HardSkills</h4>

            <div className="bar">
              <span className="ifo">
                <i style={{ color: '#c95d2e' }} className="bx bxl-html5"></i>
                <span className="spans">HTML</span>
              </span>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>

            <div className="bar">
              <span className="ifo">
                <i style={{ color: '#147bbc' }} className="bx bxl-css3"></i>
                <span className="spans">CSS3</span>
              </span>
              <div className="progress-line css">
                <span></span>
              </div>
            </div>

            <div className="bar">
              <span className="ifo">
                <i style={{ color: '#b0bc1e' }} className="bx bxl-javascript"></i>
                <span className="spans">JAVASCRIPT</span>
              </span>
              <div className="progress-line js">
                <span></span>
              </div>
            </div>

            <div className="bar">
              <span className="ifo">
                <i style={{ color: '#69bcbc' }} className="bx bxl-react"></i>
                <span className="spans">REACT</span>
              </span>
              <div className="progress-line react">
                <span></span>
              </div>
            </div>
          </div>

         {/* SoftSkills */}
<div className="skillBar softskills">
  <h4>SoftSkills</h4>

  <div className="bar-softskills">
    <div className="ifo">
      <span>Comunicação</span>
    </div>
    <div className="progress-line comunicacao">
      <span></span>
    </div>
  </div>
  
  <div className="bar-softskills">
    <div className="ifo">
      <span>Colaboração</span>
    </div>
    <div className="progress-line colaboracao">
      <span></span>
    </div>
  </div>

  <div className="bar-softskills">
    <div className="ifo">
      <span>Autodidata</span>
    </div>
    <div className="progress-line autodidata">
      <span></span>
    </div>
  </div>
</div>


          {/* Idiomas */}

          <div className="skillBar idiomas">
            <h4>Idiomas</h4>

            <div className="bar-idiomas">
              <div className="inf">
                <span className="icon brazil">
                <img src={logoBrazil} alt="bandeira do brasil" />
                <span className="spanIdiomas">Português</span>
              
                </span>
               
             
              </div>
              <div className="progress-line brazil">
                <span></span>
              </div>
            </div>

            <div className="bar-idiomas">
              <div className="inf">
               <span className="icon ingles">
                <img src={logoEUA} alt="bandeira dos estados unidos" />
                <span className="spanIdiomas">Inglês</span>
                 </span>
                
             
              </div>
              <div className="progress-line ingles">
                <span></span>
              </div>
            </div>

            {/* Adicione mais idiomas conforme necessário */}
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;
