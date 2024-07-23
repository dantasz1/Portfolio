import "../Contato/Contato.css";
import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <>
   <section id="myself">

   
    <hr />
    <div className="container">
    {/* <div className="work">
      <span>Disponibilidade</span>
      <p>Atualmente, estou aberto a opções de estágio ou trabalhar como desenvolvedor ReactJs. Mande-me um email ao lado para conversarmos melhor.</p>
    </div>
    <div className="containerInfos">
      <span>Redes Sociais</span>

    </div> */}
     <div className="textosContato">
  <span>
    Precisa de um <span className="textoDev">Desenvolvedor Júnior?</span>
  </span>
  <span>Vamos trabalhar juntos!</span>
</div>
      
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={() => {}}>
        <label htmlFor="">Nome:</label>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <label htmlFor="">Email:</label>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
<label htmlFor="">Mensagem:</label>
        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMensagem(e.target.value)}
          value={mensagem}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
    </section>
    </>
  );
}

export default Contato;
