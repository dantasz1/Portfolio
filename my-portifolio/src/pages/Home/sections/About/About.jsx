import Foto from "../../../../assets/images/fotozona.png";
import  "../About/About.css"



const About = () => {
    return (
<section id="Andre">
  <div className="info">
    <h2>Sobre mim</h2>
    <span>Conheça mais sobre mim</span>
    <hr />
  </div>

  <div className="textoEFoto">
    <div className="texto">
      <p>
         <strong>Olá, meu nome é André!</strong> Estou cursando Análise e Desenvolvimento de
        Sistemas na universidade da UNIP Paulista, em Santos. Meu contato
        inicial com a área de TI começou em 2023, e desde então estou
        sempre disposto a descobrir e aprender mais, buscando
        constantemente novos conhecimentos. Trabalho como desenvolvedor <strong> front-end e tenho experiência com HTML, CSS, JavaScript, React,
        MongoDB e PostgreSQL . . .</strong>
       
      </p>
    </div>
    <div className="minhaFoto">
      <img src={Foto} alt="Foto de André" />
    </div>
  </div>
</section>

    )
}



export default About



