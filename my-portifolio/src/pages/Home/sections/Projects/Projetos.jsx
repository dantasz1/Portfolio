import './Projetos.css';
import imagemFundoLoja from '../../../../assets/images/lojaDeRoupas.png';
import imagemFundoBarbearia from '../../../../assets/images/barbearia.png';
import imagemFundoCadastro from '../../../../assets/images/cadastroDeUsuarios.png';
import pontinhos from '../../../../assets/images/pontinhos.png'
import { useState } from 'react';


const Projetos = () => {
  
  // Estado para controlar o hover
  const [cardHoverado, setCardHoverado] = useState(null);

  // Funções para definir e limpar o hover
  const lidarComMouseEntrar = (imagem) => setCardHoverado(imagem);
  const lidarComMouseSair = () => setCardHoverado(null);

  // Estilos base para cada card
  const estiloCard = (imagemFundo, posicaoHover, posicaoInicial) => ({
    backgroundImage: `url(${imagemFundo})`,
    backgroundSize: 'cover',
    backgroundPosition: cardHoverado === imagemFundo ? posicaoHover : posicaoInicial,
    backgroundRepeat: 'no-repeat',
    transition: 'background-position 0.8s ease',
  });

  return (
    <section className="projetos">
      <div className="subtitulo">
        <h2>Projetos</h2>
        <span>Veja minhas criações</span>
        <hr className="linha-projetos" />
      </div>

      <div className="cards-projeto">
        <a
          className="card-projeto"
          href="https://dantasz1.github.io/Projeto-FInal-/"
          style={estiloCard(imagemFundoLoja, 'center', 'left top')} // Imagem se ajusta ao centro no hover e ocupa toda a área do card
          onMouseEnter={() => lidarComMouseEntrar(imagemFundoLoja)}
          onMouseLeave={lidarComMouseSair}
        >
          
        </a>

        <a
          className="card-projeto"
          href="https://barbeariapremium.netlify.app"
          style={estiloCard(imagemFundoBarbearia, 'center', 'center 13%')} // Imagem começa um pouco abaixo e move para o centro no hover
          onMouseEnter={() => lidarComMouseEntrar(imagemFundoBarbearia)}
          onMouseLeave={lidarComMouseSair}
        >
         
        </a>

        <a
          className="card-projeto"
          href="https://dantasz1.github.io/Projeto-FInal-/"
          style={estiloCard(imagemFundoCadastro, '10% 45%', 'center')}
          onMouseEnter={() => lidarComMouseEntrar(imagemFundoCadastro)}
          onMouseLeave={lidarComMouseSair}
        >
          
        </a>

        <a
          className="card-projeto"
          
          style ={estiloCard(pontinhos, 'center', 'center')}
          onMouseEnter={() => lidarComMouseEntrar(pontinhos)}
          onMouseLeave={lidarComMouseSair}
        >
         
        </a>
      </div>
    </section>
  );
};

export default Projetos;
