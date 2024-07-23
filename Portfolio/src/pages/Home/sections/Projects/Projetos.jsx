import  { useEffect, useState } from 'react';
import './Projetos.css';
import imagemFundoLoja from '../../../../assets/images/lojaDeRoupas.png';
import imagemFundoBarbearia from '../../../../assets/images/barbearia.png';
import imagemFundoCadastro from '../../../../assets/images/cadastroDeUsuarios.png';
import pontinhos from '../../../../assets/images/pontinhos.png';
import ScrollReveal from 'scrollreveal';

const Projetos = () => {
  const [cardHoverado, setCardHoverado] = useState(null);

  useEffect(() => {
    ScrollReveal().reveal('#Andre', { duration: 1000, reset: true })
    ScrollReveal().reveal('.card-projeto', { duration: 1000, reset: true });
   
  }, []);

  const lidarComMouseEntrar = (imagem) => setCardHoverado(imagem);
  const lidarComMouseSair = () => setCardHoverado(null);

  const estiloCard = (imagemFundo, posicaoHover, posicaoInicial) => ({
    backgroundImage: `url(${imagemFundo})`,
    backgroundSize: 'cover',
    backgroundPosition: cardHoverado === imagemFundo ? posicaoHover : posicaoInicial,
    backgroundRepeat: 'no-repeat',
    transition: 'background-position 0.8s ease',
  });

  return (
    <section className="projetos" id='projetos'>
      <div className="subtitulo">
        <h2>Projetos</h2>
        <span>Veja minhas criações</span>
        <hr className="linha-projetos" />
      </div>
      <div className="cards-projeto">
        <a
          className="card-projeto 1"
          href="https://dantasz1.github.io/Projeto-FInal-/"
          style={estiloCard(imagemFundoLoja, 'center', 'left top')}
          onMouseEnter={() => lidarComMouseEntrar(imagemFundoLoja)}
          onMouseLeave={lidarComMouseSair}
        ></a>
        <a
          className="card-projeto 2"
          href="https://barbeariapremium.netlify.app"
          style={estiloCard(imagemFundoBarbearia, 'center', 'center 13%')}
          onMouseEnter={() => lidarComMouseEntrar(imagemFundoBarbearia)}
          onMouseLeave={lidarComMouseSair}
        ></a>
        <a
          className="card-projeto 3"
          href="https://dantasz1.github.io/Projeto-FInal-/"
          style={estiloCard(imagemFundoCadastro, 'center', 'center')}
          onMouseEnter={() => lidarComMouseEntrar(imagemFundoCadastro)}
          onMouseLeave={lidarComMouseSair}
        ></a>
        <a
          className="card-projeto 4"
          style={estiloCard(pontinhos, 'center', 'center')}
          onMouseEnter={() => lidarComMouseEntrar(pontinhos)}
          onMouseLeave={lidarComMouseSair}
        ></a>
      </div>
    </section>
  );
};

export default Projetos;
