import { useState, useEffect } from "react";
import "../Skills/Skills.css";
import AOS from 'aos';
import 'aos/dist/aos.css';






const Skills = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (visivel) {
      AOS.init({
        easing: 'ease-in-out', // Tipo de easing
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );
 




  return (
    <>
      <section id="skills" data-aos="zoom-in" data-aos-duration=" 10000" >
        <div className="titulos">
          <h2 className="textSkills"> &lt; Skills &gt;</h2>
          <span>Skills técnicas e pessoais</span>
          <div className="linha-separadora2">
            <hr />
          </div>
        </div>
        <div className = "containerSkills" >
          
          <div className="skillBar">
           

            <div className="bar">
            <h4>HardSkills</h4>
              <div className="infoBar">
                <span className="icon html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                    <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                    <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                                    <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                </svg>HTML</span>
                
              </div>
              <div className="progress-line html" data-progress = "90" ><span></span></div>
            </div>
          </div>


          <div className="skillBar">
           

            <div className="bar">
            <h4>SoftSKills</h4>
              <div className="infoBar">
                <span className="icon html"></span>
                
              </div>
              <div className="progress-line html" data-progress = "90" ><span></span></div>
            </div>
          </div>
          <div className="skillBar">
           

            <div className="bar">
            <h4>Idiomas</h4>
              <div className="infoBar">
                <span className="icon brazil"></span>
                
              </div>
              <div className="progress-line port" data-progress = "90" ><span></span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
