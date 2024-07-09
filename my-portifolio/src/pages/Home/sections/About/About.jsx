import Foto from "../../../../assets/images/fotozona.png";
import  "../About/About.css"



const About = () => {
    return (
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
            <button className="contate-btn">Mais Informações</button>
            
          </div>
        </div>
        </section>
    )
}



export default About



