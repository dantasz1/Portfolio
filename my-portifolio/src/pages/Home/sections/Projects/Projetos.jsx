
import './Projetos.css';

const Projetos = () => {
  return (
    <section className="projetos">
  <div className="subtitulo">
    <h2>Projetos</h2>
    <span>Veja minhas criações</span>
    <hr className="linha-projetos" />
  </div>


  <div className="cards-projeto">

 
    <div className="card-projeto">
 
  <div className='imagem-produto'>
    <i className='bx bx-task' style={{ color: '#fff' }}></i>
  </div>
  <div className="projeto-titulo">
    <h3>Loja de Roupas</h3>
    <p>
      <strong>Com o HTML, CSS e JavaScript</strong> , objetivei um resultado muito bom na loja, com a lógica por trás, carrinho, botão de compra que gera uma página nova com as informações passadas pelo local storage.
    </p>
  </div>
</div>

    <div className="card-projeto">
   
     
       
   <div className='imagem-produto'>
   <i className='bx bx-task'  style={{ color: '#fff' }}></i>
  
   </div>
   <div className="projeto-titulo">
   <h3>Loja de Roupas</h3>
   <p>
   <strong>Com o HTML, CSS e JavaScript</strong> , objetivei um resultado muito bom na loja, com a lógica por trás, carrinho, botão de compra que gera uma página nova com as informações passadas pelo local storage.
   </p>
 </div>
</div>
<div className="card-projeto">
   
     
       
        <div className='imagem-produto'>
        <i className='bx bx-task'  style={{ color: '#fff' }}></i>
       
        </div>
        <div className="projeto-titulo">
        <h3>Loja de Roupas</h3>
        <p>
        <strong>Com o HTML, CSS e JavaScript</strong> , objetivei um resultado muito bom na loja, com a lógica por trás, carrinho, botão de compra que gera uma página nova com as informações passadas pelo local storage.
        </p>
      </div>
    </div>
</div>

</section>

  );
};

export default Projetos;
